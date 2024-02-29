import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.startsWith('/') ? path.substring(1) : path;
    const hasTranslation = defaultLang !== l && routes[l] !== undefined && routes[l][pathName] !== undefined;
    let translatedPath = hasTranslation ? routes[l][pathName] : path;

    if (translatedPath.startsWith('/')) {
      translatedPath = translatedPath.substring(1);
    }

    return !showDefaultLang && l === defaultLang ? translatedPath : `/${l}/${translatedPath}`;
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    if (route) {
        return route[path];
    }
  }

  const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined  => {
      return Object.keys(obj).find((key) => obj[key] === value);
  }

  // Check if routes[currentLang] is defined
  if (routes[currentLang]) {
    const reversedKey = getKeyByValue(routes[currentLang], path);

    if (reversedKey !== undefined) {
      return reversedKey;
    }
  }

  return undefined;
}
