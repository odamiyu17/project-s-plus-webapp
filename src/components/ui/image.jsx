import * as React from "react"

import { ResponsiveImage } from "./responsive-image"

import {
  getOriginalImageUrl,
  IMAGE_LOAD_MODE,
  nextImageLoadMode,
  parseWixMediaUrl,
} from "./image-helpers"

// Self-contained fallback image.
// No external image service is required.
const FALLBACK_IMAGE_URL =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="600"
      viewBox="0 0 800 600"
    >
      <rect
        width="800"
        height="600"
        fill="#e5e7eb"
      />
      <text
        x="400"
        y="300"
        dominant-baseline="middle"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="28"
        fill="#6b7280"
      >
        Image unavailable
      </text>
    </svg>
  `)

/**
 * Image component with optional Wix Media optimization.
 *
 * Supported Wix-hosted images can be resized based on
 * the rendered size. Local project images and normal
 * external URLs are rendered as regular images.
 *
 * Failed optimized images retry their original URL.
 * If that also fails, a built-in fallback is shown.
 */
const Image = React.forwardRef(
  (
    {
      src: source,
      fittingType = "fill",
      originWidth,
      originHeight,
      focalPointX,
      focalPointY,
      quality = 90,
      onError,
      ...props
    },
    ref,
  ) => {
    const [
      previewSource,
      setPreviewSource,
    ] = React.useState(null)

    const preview =
      previewSource?.source ===
      source
        ? previewSource
        : null

    const src = preview
      ? preview.value
      : source

    const replaceSource = (
      value,
      className,
    ) =>
      setPreviewSource({
        source,
        value,
        className,
        sourceClassName:
          props.className,
      })

    React.useEffect(() => {
      setPreviewSource(null)
    }, [source])

    const parsedSource =
      src &&
      src !==
        FALLBACK_IMAGE_URL
        ? parseWixMediaUrl(src)
        : null

    const initialMode =
      parsedSource
        ? IMAGE_LOAD_MODE.OPTIMIZED
        : IMAGE_LOAD_MODE.ORIGINAL

    const [
      loadState,
      setLoadState,
    ] = React.useState({
      src,
      mode: initialMode,
    })

    const mode =
      loadState.src === src
        ? loadState.mode
        : initialMode

    React.useEffect(() => {
      setLoadState({
        src,
        mode: initialMode,
      })
    }, [src, initialMode])

    const handleError = (
      event,
    ) => {
      if (
        mode ===
        IMAGE_LOAD_MODE.FALLBACK
      ) {
        return
      }

      const nextMode =
        nextImageLoadMode(mode)

      setLoadState({
        src,
        mode: nextMode,
      })

      if (
        nextMode ===
        IMAGE_LOAD_MODE.FALLBACK
      ) {
        onError?.(event)
      }
    }

    const imageProps = {
      ...props,

      className:
        preview &&
        preview.sourceClassName ===
          props.className
          ? preview.className
          : props.className,

      onError: handleError,
    }

    if (!src) {
      return (
        <img
          ref={ref}
          src={
            FALLBACK_IMAGE_URL
          }
          {...imageProps}
          data-empty-image
        />
      )
    }

    const parsed =
      mode ===
      IMAGE_LOAD_MODE.OPTIMIZED
        ? parsedSource
        : null

    if (!parsed) {
      const isErrorMode =
        mode ===
        IMAGE_LOAD_MODE.FALLBACK

      const imageSrc =
        isErrorMode
          ? FALLBACK_IMAGE_URL
          : getOriginalImageUrl(
              src,
              parsedSource,
            )

      return (
        <img
          ref={ref}
          src={imageSrc}
          {...imageProps}
          data-error-image={
            isErrorMode ||
            undefined
          }
        />
      )
    }

    const focalPoint =
      typeof focalPointX ===
        "number" &&
      typeof focalPointY ===
        "number"
        ? {
            x: focalPointX,
            y: focalPointY,
          }
        : undefined

    const aspectRatio =
      originWidth &&
      originHeight
        ? `${originWidth} / ${originHeight}`
        : undefined

    return (
      <ResponsiveImage
        ref={ref}
        src={src}
        parsed={parsed}
        onSourceChange={
          replaceSource
        }
        fittingType={
          fittingType
        }
        focalPoint={
          focalPoint
        }
        quality={quality}
        aspectRatio={
          aspectRatio
        }
        {...imageProps}
      />
    )
  },
)

Image.displayName = "Image"

export { Image }