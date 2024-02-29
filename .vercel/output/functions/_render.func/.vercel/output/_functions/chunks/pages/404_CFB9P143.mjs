/* empty css                          */
import { A as AstroError, c as MissingLocale, d as InvalidImageService, e as ExpectedImageOptions, E as ExpectedImage, F as FailedToFetchRemoteImageDimensions, f as createAstro, g as createComponent, h as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, i as addAttribute, s as spreadAttributes, j as renderTransition, k as renderComponent, l as createTransitionScope, u as unescapeHTML, n as renderSlot, o as renderHead } from '../astro_DVgfIFhV.mjs';
import 'kleur/colors';
import { a as appendForwardSlash, j as joinPaths, i as isRemoteImage, b as isESMImportedImage, c as isLocalService, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_D4NYTO7E.mjs';
import 'clsx';
/* empty css                          */

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function getLocaleRelativeUrl({
  locale,
  base,
  locales: _locales,
  trailingSlash,
  format,
  path,
  prependWith,
  normalizeLocale = true,
  strategy = "pathname-prefix-other-locales",
  defaultLocale
}) {
  const codeToUse = peekCodePathToUse(_locales, locale);
  if (!codeToUse) {
    throw new AstroError({
      ...MissingLocale,
      message: MissingLocale.message(locale)
    });
  }
  const pathsToJoin = [base, prependWith];
  const normalizedLocale = normalizeLocale ? normalizeTheLocale(codeToUse) : codeToUse;
  if (strategy === "pathname-prefix-always" || strategy === "pathname-prefix-always-no-redirect" || strategy === "domains-prefix-always" || strategy === "domains-prefix-always-no-redirect") {
    pathsToJoin.push(normalizedLocale);
  } else if (locale !== defaultLocale) {
    pathsToJoin.push(normalizedLocale);
  }
  pathsToJoin.push(path);
  if (shouldAppendForwardSlash(trailingSlash, format)) {
    return appendForwardSlash(joinPaths(...pathsToJoin));
  } else {
    return joinPaths(...pathsToJoin);
  }
}
function getLocaleAbsoluteUrl({ site, isBuild, ...rest }) {
  const localeUrl = getLocaleRelativeUrl(rest);
  const { domains, locale } = rest;
  let url;
  if (isBuild && domains && domains[locale]) {
    const base = domains[locale];
    url = joinPaths(base, localeUrl.replace(`/${rest.locale}`, ""));
  } else {
    if (site) {
      url = joinPaths(site, localeUrl);
    } else {
      url = localeUrl;
    }
  }
  if (shouldAppendForwardSlash(rest.trailingSlash, rest.format)) {
    return appendForwardSlash(url);
  } else {
    return url;
  }
}
function getPathByLocale(locale, locales) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  throw new Unreachable();
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function toCodes(locales) {
  return locales.map((loopLocale) => {
    if (typeof loopLocale === "string") {
      return loopLocale;
    } else {
      return loopLocale.codes[0];
    }
  });
}
function peekCodePathToUse(locales, locale) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  return void 0;
}
class Unreachable extends Error {
  constructor() {
    super(
      "Astro encountered an unexpected line of code.\nIn most cases, this is not your fault, but a bug in astro code.\nIf there isn't one already, please create an issue.\nhttps://astro.build/issues"
    );
  }
}

function parseLocale(header) {
  if (header === "*") {
    return [{ locale: header, qualityValue: void 0 }];
  }
  const result = [];
  const localeValues = header.split(",").map((str) => str.trim());
  for (const localeValue of localeValues) {
    const split = localeValue.split(";").map((str) => str.trim());
    const localeName = split[0];
    const qualityValue = split[1];
    if (!split) {
      continue;
    }
    if (qualityValue && qualityValue.startsWith("q=")) {
      const qualityValueAsFloat = Number.parseFloat(qualityValue.slice("q=".length));
      if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) {
        result.push({
          locale: localeName,
          qualityValue: void 0
        });
      } else {
        result.push({
          locale: localeName,
          qualityValue: qualityValueAsFloat
        });
      }
    } else {
      result.push({
        locale: localeName,
        qualityValue: void 0
      });
    }
  }
  return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
  const normalizedLocales = toCodes(locales).map(normalizeTheLocale);
  return browserLocaleList.filter((browserLocale) => {
    if (browserLocale.locale !== "*") {
      return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
    }
    return true;
  }).sort((a, b) => {
    if (a.qualityValue && b.qualityValue) {
      if (a.qualityValue > b.qualityValue) {
        return -1;
      } else if (a.qualityValue < b.qualityValue) {
        return 1;
      }
    }
    return 0;
  });
}
function computePreferredLocale(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = void 0;
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    const firstResult = browserLocaleList.at(0);
    if (firstResult && firstResult.locale !== "*") {
      for (const currentLocale of locales) {
        if (typeof currentLocale === "string") {
          if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
            result = currentLocale;
          }
        } else {
          for (const currentCode of currentLocale.codes) {
            if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
              result = currentLocale.path;
            }
          }
        }
      }
    }
  }
  return result;
}
function computePreferredLocaleList(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = [];
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") {
      return locales.map((locale) => {
        if (typeof locale === "string") {
          return locale;
        } else {
          return locale.codes.at(0);
        }
      });
    } else if (browserLocaleList.length > 0) {
      for (const browserLocale of browserLocaleList) {
        for (const loopLocale of locales) {
          if (typeof loopLocale === "string") {
            if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale)) {
              result.push(loopLocale);
            }
          } else {
            for (const code of loopLocale.codes) {
              if (code === browserLocale.locale) {
                result.push(loopLocale.path);
              }
            }
          }
        }
      }
    }
  }
  return result;
}
function computeCurrentLocale(pathname, locales, routingStrategy, defaultLocale) {
  for (const segment of pathname.split("/")) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (!segment.includes(locale))
          continue;
        if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) {
          return locale;
        }
      } else {
        if (locale.path === segment) {
          return locale.codes.at(0);
        } else {
          for (const code of locale.codes) {
            if (normalizeTheLocale(code) === normalizeTheLocale(segment)) {
              return code;
            }
          }
        }
      }
    }
  }
  if (routingStrategy === "pathname-prefix-other-locales" || routingStrategy === "domains-prefix-other-locales") {
    return defaultLocale;
  }
  return void 0;
}
function toRoutingStrategy(i18n) {
  let { routing, domains } = i18n;
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (!hasDomains) {
    if (routing?.prefixDefaultLocale === true) {
      if (routing.redirectToDefaultLocale) {
        strategy = "pathname-prefix-always";
      } else {
        strategy = "pathname-prefix-always-no-redirect";
      }
    } else {
      strategy = "pathname-prefix-other-locales";
    }
  } else {
    if (routing?.prefixDefaultLocale === true) {
      if (routing.redirectToDefaultLocale) {
        strategy = "domains-prefix-always";
      } else {
        strategy = "domains-prefix-always-no-redirect";
      }
    } else {
      strategy = "domains-prefix-other-locales";
    }
  }
  return strategy;
}

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4)
    return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize)
    return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box)
      break;
    if (box.name === boxName)
      return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1)
      return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength)
      return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1)
      return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox)
      return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(1);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  // eslint-disable-next-line regexp/prefer-d
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = toUTF8String(input).match(extractorRegExps.root);
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

const globalOptions = {
  disabledTypes: []
};
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.indexOf(type) > -1) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done)
      break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_D4NYTO7E.mjs'
    ).then(n => n.g).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$9 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/node_modules/astro/components/Image.astro", void 0);

const $$Astro$8 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/.vercel/output/static/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const languages = {
  en: "en English",
  ru: "ru Русский"
};
const defaultLang = "en";
const ui = {
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "footer.copyright": 'Copyright © <span id="currentYear"></span> All rights reserved.',
    "portfolio.subDesc": "Technologies i used:",
    "portfolio.externalButton": "Check out"
  },
  ru: {
    "nav.home": "Главная",
    "nav.blog": "Блог",
    "nav.about": "Обо мне",
    "nav.portfolio": "Портфолио",
    "footer.copyright": 'Авторское право © <span id="currentYear"></span> Все права защищены.',
    "portfolio.subDesc": "Использованные технологии:",
    "portfolio.externalButton": "Смотреть"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui)
    return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { base: "/", format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["en", "ru", { path: "ru", codes: ["ru", "ru-RU"] }], fallback: { ru: "en" }, routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true, strategy: "pathname" } }, isBuild: true };
const { trailingSlash, format, site, i18n, isBuild } = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains } = i18n;
const base = "/";
const routing = toRoutingStrategy(i18n);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy: routing,
  domains,
  ...options
});
const getAbsoluteLocaleUrl = (locale, path, options) => getLocaleAbsoluteUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  site,
  defaultLocale,
  locales,
  strategy: routing,
  domains,
  isBuild,
  ...options
});

const logo = new Proxy({"src":"/_astro/logo.B713gtQC.svg","width":69,"height":11,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/assets/img/logo.svg";
							}
							
							return target[name];
						}
					});

const blur$1 = new Proxy({"src":"/_astro/bg.BlYfRVHK.svg","width":1000,"height":957,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/assets/img/bg.svg";
							}
							
							return target[name];
						}
					});

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$7 = createAstro();
const $$SwitchLang = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SwitchLang;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<select id="langSelect" class="lang-selector"> ', ' </select> <script type="text/javascript">\n  let selectedLang = document.cookie.replace(\n    /(?:(?:^|.*;\\s*)selectedLang\\s*\\=\\s*([^;]*).*$)|^.*$/,\n    "$1"\n  );\n  // \u0415\u0441\u043B\u0438 cookie selectedLang \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043D\u0430 en\n  if (!selectedLang) {\n    selectedLang = "en";\n    document.cookie = "selectedLang=" + selectedLang + "; path=/";\n  }\n  const langSelect = document.getElementById("langSelect");\n  if (langSelect) {\n    langSelect.value = selectedLang;\n    langSelect.onchange = function () {\n      document.cookie = "selectedLang=" + this.value + "; path=/";\n      let newPath = window.location.pathname.replace(\n        /\\/[a-z]{2}\\//,\n        "/" + this.value + "/"\n      );\n      if (newPath.includes("/blog/")) {\n        newPath = newPath.substring(0, newPath.indexOf("/blog/") + 6);\n      }\n      window.location.href = newPath;\n    };\n  }\n<\/script>'], ["", '<select id="langSelect" class="lang-selector"> ', ' </select> <script type="text/javascript">\n  let selectedLang = document.cookie.replace(\n    /(?:(?:^|.*;\\\\s*)selectedLang\\\\s*\\\\=\\\\s*([^;]*).*$)|^.*$/,\n    "$1"\n  );\n  // \u0415\u0441\u043B\u0438 cookie selectedLang \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043D\u0430 en\n  if (!selectedLang) {\n    selectedLang = "en";\n    document.cookie = "selectedLang=" + selectedLang + "; path=/";\n  }\n  const langSelect = document.getElementById("langSelect");\n  if (langSelect) {\n    langSelect.value = selectedLang;\n    langSelect.onchange = function () {\n      document.cookie = "selectedLang=" + this.value + "; path=/";\n      let newPath = window.location.pathname.replace(\n        /\\\\/[a-z]{2}\\\\//,\n        "/" + this.value + "/"\n      );\n      if (newPath.includes("/blog/")) {\n        newPath = newPath.substring(0, newPath.indexOf("/blog/") + 6);\n      }\n      window.location.href = newPath;\n    };\n  }\n<\/script>'])), maybeRenderHead(), Object.entries(languages).map(([lang, label]) => renderTemplate`<option${addAttribute(lang, "value")}>${label}</option>`));
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/components/SwitchLang.astro", void 0);

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`<!-- HEADER -->${maybeRenderHead()}<nav data-astro-transition-persist="nav" class="container fixed top-0 md:left-5 md:right-5 xl:max-w-7xl mx-auto font-sans bg-[#97979733]/20 backdrop-blur-[80px] rounded-xl py-2 px-5 flex justify-between items-center z-50"${addAttribute(renderTransition($$result, "7zjuvqpw", "", "nav"), "data-astro-transition-scope")}> <div class="w-26 z-50"> <a${addAttribute(`/${lang}/`, "href")}>${renderComponent($$result, "Image", $$Image, { "src": logo, "width": "100", "height": "40", "alt": "OV logo" })}</a> </div> <div class="flex hover:cursor-default"> <button id="menu-image" class="z-50 p-2 rounded-lg transition-colors duration-150 hover:bg-zinc-800 justify-self-end hover:cursor-pointer"${addAttribute(createTransitionScope($$result, "aivadjtx"), "data-astro-transition-persist")}> ${renderComponent($$result, "Image", $$Image, { "id": "menu-icon", "src": "/src/assets/img/menu.svg", "width": "34", "height": "34", "alt": "menu" })} <div class="relative hover:cursor-default"> <div id="main-menu" class="menu bg-[#040404]/[98%] hidden overflow-y-auto animation z-40 fixed left-0 right-0 top-[62px] h-full min-h-screen w-full lg:min-h-[120px] max-w-[1120px] mx-auto rounded-xl"> ${renderComponent($$result, "Picture", $$Picture, { "src": blur$1, "class": "absolute blur-[100px] top-0 bottom-0 left-0 right-0 m-auto h-full w-full object-cover object-center z-[-1]", "alt": "blur background", "formats": ["avif", "webp"] })} <div class="block"> <ul class="text-6xl lg:text-3xl font-black grid lg:grid-flow-col gap-y-10 lg:gap-y-0 lg:gap-x-10 place-content-center lg:place-content-arround my-auto content-start uppercase lg:content-center h-full max-h-[120px] text-white mt-40 lg:mt-10"> <li class="hover:scale-110 duration-150 transition-all hover:cursor-pointer"> <a${addAttribute(`/${lang}/`, "href")} class="hover-link active"> ${t("nav.home")} </a> </li> <li class="hover:scale-110 duration-150 transition-all hover:cursor-pointer"> <a${addAttribute(`/${lang}/blog/`, "href")} class="hover-link"> ${t("nav.blog")} </a> </li> <li class="hover:scale-110 duration-150 transition-all hover:cursor-pointer"> <a${addAttribute(`/${lang}/about/`, "href")} class="hover-link"> ${t("nav.about")} </a> </li> <li class="hover:scale-110 duration-150 transition-all hover:cursor-pointer"> <a${addAttribute(`/${lang}/portfolio/`, "href")} class="hover-link"> ${t("nav.portfolio")} </a> </li> </ul> </div> </div> </div> </button> <div class="self-center mx-5 pl-5 border-l-[1px] border-white/30"> ${renderComponent($$result, "SwitchLang", $$SwitchLang, { "class": "bg-transparent hover:cursor-pointer" })} </div> </div> </nav>`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/components/Header.astro", "self");

const github = new Proxy({"src":"/_astro/github.DzDbeBpc.svg","width":40,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/assets/img/github.svg";
							}
							
							return target[name];
						}
					});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<footer class="py-3 px-5 lg:py-5 lg:px-10"> <div class="horizontal-line"></div> <div class="flex justify-between items-center"> <div> <h4 class="font-light text-sm lg:text-lg"> <div>', '</div> </h4> </div> <div class="flex lg:space-x-1 items-center"> <a href="https://github.com/vratskyi" target="_blank"> <div class="hover:bg-primary-0 duration-150 rounded-xl px-2 py-2"> ', ' </div> </a> <a href="https://www.behance.net/alexvracky" target="_blank"> <div class="hover:bg-primary-0 duration-150 rounded-xl px-2 py-2"> <svg class="inline-block w-6 lg:w-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256" style="fill:#000000;"> <g transform=""><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM11,16c-0.55226,0.00006 -0.99994,0.44774 -1,1v16.00195c0.00006,0.55226 0.44774,0.99994 1,1h7.60938c0.00065,0 0.0013,0 0.00195,0c0.41242,-0.00065 1.85909,-0.03581 3.35547,-0.73828c1.49633,-0.70247 3.0332,-2.28232 3.0332,-4.83594c0,-1.61999 -0.53053,-2.83986 -1.24219,-3.64258c-0.29784,-0.33595 -0.57608,-0.37359 -0.89062,-0.58008c0.60177,-0.70396 1.13281,-1.65669 1.13281,-3.20508c0,-2.38267 -1.30503,-3.8614 -2.64648,-4.46289c-1.34146,-0.60149 -2.72095,-0.53711 -3.06055,-0.53711zM30,16c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h6c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM12,18h6.29297c0.4524,0 1.42814,-0.0037 2.24219,0.36133c0.81404,0.36501 1.46484,0.88735 1.46484,2.63867c0,1.87589 -0.7229,2.23586 -1.15234,2.45703c-0.35558,0.18367 -0.56742,0.56163 -0.53852,0.9608c0.02891,0.39917 0.293,0.74267 0.67133,0.87319c0.37813,0.12962 0.88315,0.37128 1.28125,0.82031c0.3981,0.44903 0.73828,1.1074 0.73828,2.31641c0,1.83038 -0.84269,2.53711 -1.88281,3.02539c-1.04012,0.48828 -2.28624,0.54848 -2.50781,0.54883h-6.60937zM33,19c-0.91237,0 -2.58259,0.18126 -4.13672,1.24805c-1.55413,1.06679 -2.86328,3.09135 -2.86328,6.25195c0,2.9434 1.20884,4.94415 2.72852,6.06836c1.51967,1.1242 3.24217,1.43164 4.44141,1.43164c2.53915,0 4.33457,-0.86305 5.41016,-2.08984c0.99343,-1.13308 1.32229,-2.46985 1.37305,-3.61328c0.0272,-0.08476 0.04297,-0.17278 0.04688,-0.26172c0.00031,-0.0086 -0.00225,-0.0187 -0.00195,-0.02734c0.00005,-0.00245 0.00195,-0.00537 0.00195,-0.00781c-0.00029,-0.03328 -0.00225,-0.06652 -0.00586,-0.09961c0,-0.0013 0,-0.0026 0,-0.00391c0.05445,-1.80735 -0.08556,-3.89615 -1.05078,-5.68359c-0.98874,-1.831 -2.97679,-3.21289 -5.94336,-3.21289zM15,20v3h2.61914c0.357,0 1.54688,-0.22545 1.54688,-1.56445c0,-1.34 -1.54816,-1.43555 -1.78516,-1.43555zM33,21c2.40843,0 3.48288,0.86811 4.18164,2.16211c0.566,1.04814 0.73808,2.45623 0.77148,3.83789h-2.95312h-4c-0.55226,0.00006 -0.99994,0.44774 -1,1c0,0 0.0086,0.25241 0.08203,0.47266c0.07341,0.22024 0.21809,0.49152 0.46094,0.73438c0.4857,0.4857 1.29036,0.79297 2.45703,0.79297c1.16667,0 1.97133,-0.30727 2.45703,-0.79297c0.0686,-0.0686 0.07739,-0.13566 0.13086,-0.20703h2.25391c-0.13318,0.55475 -0.34711,1.1125 -0.76562,1.58984c-0.67791,0.77321 -1.7974,1.41016 -3.90625,1.41016c-0.82876,0 -2.19413,-0.25652 -3.25195,-1.03906c-1.05783,-0.78255 -1.91797,-2.03134 -1.91797,-4.46094c0,-2.6464 0.93048,-3.87205 1.99609,-4.60352c1.06562,-0.73146 2.39528,-0.89648 3.00391,-0.89648zM33.08594,22.60156c-0.591,0 -1.01552,0.07547 -1.35352,0.23047c-0.338,0.154 -0.58975,0.38714 -0.84375,0.61914c-0.169,0.232 -0.33883,0.46539 -0.42383,0.77539c-0.085,0.232 -0.16897,0.46439 -0.16797,0.77539h5.4082c-0.085,-0.775 -0.33872,-1.39425 -0.76172,-1.78125c-0.422,-0.387 -1.01242,-0.61914 -1.85742,-0.61914zM15.0332,26v3.98047h2.92969c0.254,0 2.03711,-0.09802 2.03711,-1.91602c0,-1.82 -1.40111,-2.06445 -2.03711,-2.06445z"></path></g></g></g> </svg> </div> </a> <a href="https://t.me/dev_it_dude" target="_blank"> <div class="hover:bg-primary-0 duration-150 rounded-xl px-2 py-2"> <svg class="inline-block w-6 lg:w-8 -rotate-45" fill="none" stroke="#ffffff" stroke-width="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path> </svg> </div> </a> <a href="mailto:vratskiy0@gmail.com" target="_blank"> <div class="hover:bg-primary-0 duration-150 rounded-xl px-2 py-2"> <svg class="inline-block w-6 lg:w-8" fill="none" stroke="#ffffff" stroke-width="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path> </svg> </div> </a> </div> </div> </footer> <script', `>
document.addEventListener('astro:page-load', () => {
	// \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u044B
	let currentDate = new Date();
	// \u0418\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0433\u043E\u0434\u0430 \u0438\u0437 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0434\u0430\u0442\u044B
	let currentYear = currentDate.getFullYear();
	// \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443
	let yearElement = document.getElementById('currentYear');
	// \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043F\u0435\u0440\u0435\u0434 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u043E\u0439 \u0435\u0433\u043E textContent
	if (yearElement !== null) {
		yearElement.textContent = String(currentYear);
	} else {
		console.error("Element with ID 'currentYear' not found.");
	}
});
<\/script>`])), maybeRenderHead(), unescapeHTML(t("footer.copyright")), renderComponent($$result, "Image", $$Image, { "class": "inline-block w-6 lg:w-8", "src": github, "width": "40", "height": "40", "alt": "oleksii vratskyi github" }), addAttribute(createTransitionScope($$result, "runigxov"), "data-astro-transition-persist"));
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/components/Footer.astro", "self");

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`<html${addAttribute(lang, "lang")}> ${maybeRenderHead()}<body class="cursor-default relative container xl:max-w-7xl font-sans md:px-5 mx-auto tracking-wide text-zinc-200 bg-[#040404]"> ${renderComponent($$result, "Header", $$Header, {})} <div class="md:flex md:flex-col md:min-h-full"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/layouts/Layout.astro", void 0);

const fav = new Proxy({"src":"/_astro/favicon.DZMLhRyv.svg","width":40,"height":30,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/favicon.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Head;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- HEAD --><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"', `><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><link rel="preload" href="/styles/reset.css" as="style" onload="this.onload=null;this.rel='stylesheet';"><link rel="preload" href="/styles/global.css" as="style" onload="this.onload=null;this.rel='stylesheet';"><script src="/src/assets/js/menu.js" defer><\/script><script src="/src/assets/js/animate.js" defer><\/script><meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"><title>`, "</title>", "", "</head>"])), addAttribute(fav.src, "href"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead());
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/components/Head.astro", void 0);

const blur = new Proxy({"src":"/_astro/bg.ChhNY2Zo.png","width":1104,"height":1039,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/assets/img/bg.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$404$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$404$1;
  getAbsoluteLocaleUrl("en");
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "Error 404" })} ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen grid gap-5 px-3 lg:px-0  place-content-center place-items-center content-center tracking-wide text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": blur, "class": "fixed top-0 bottom-0 left-0 right-0 m-auto h-full w-full object-cover object-center z-[-1]", "alt": "blur background" })} <h3 class="text-9xl font-black bg-clip-text text-transparent bg-gradient-to-t from-primary-0 to-accent-0">404</h3> <h1 class="font-black text-8xl">Wooops..</h1><p class="font-black text-5xl">Something was wrong..</p> <button onclick="window.location.href = '/';" class="justify-self-center px-3 py-2 mt-5 rounded-lg border-2 hover:border-primary-0 hover:bg-primary-0 duration-150">Back to home
</button> </section> ${renderComponent($$result2, "Layout", $$Layout, {})}` })}`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/en/404.astro", void 0);

const $$file$1 = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/en/404.astro";
const $$url$1 = "/en/404";

const _404$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  getAbsoluteLocaleUrl("ru");
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "\u041E\u0448\u0438\u0431\u043A\u0430 404" })} ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen grid gap-5 px-3 lg:px-0  place-content-center place-items-center content-center tracking-wide text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": blur, "class": "fixed top-0 bottom-0 left-0 right-0 m-auto h-full w-full object-cover object-center z-[-1]", "alt": "blur background" })} <h3 class="text-9xl font-black bg-clip-text text-transparent bg-gradient-to-t from-primary-0 to-accent-0">404</h3> <h1 class="font-black text-8xl">Упс..</h1><p class="font-black text-5xl">Что-то пошло не так..</p> <button onclick="window.location.href = '/';" class="justify-self-center px-3 py-2 mt-5 rounded-lg border-2 hover:border-primary-0 hover:bg-primary-0 duration-150">На главную
</button> </section> ${renderComponent($$result2, "Layout", $$Layout, {})}` })}`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/ru/404.astro", void 0);

const $$file = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/ru/404.astro";
const $$url = "/ru/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Head as $, _404$1 as _, $$Image as a, blur as b, $$Picture as c, github as d, $$Layout as e, getConfiguredImageService as f, getAbsoluteLocaleUrl as g, getLangFromUrl as h, imageConfig as i, getRelativeLocaleUrl as j, $$Header as k, $$Footer as l, getPathByLocale as m, normalizeTheLocale as n, computePreferredLocale as o, computePreferredLocaleList as p, computeCurrentLocale as q, _404 as r, shouldAppendForwardSlash as s, useTranslations as u };
