/** Minimal typings for template Swiper loaded from /assets/js/swiper-bundle.min.js */

export type SwiperInstance = {
  destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void;
  autoplay?: { running: boolean; start: () => void };
};

export type SwiperConstructor = new (
  selector: string,
  options: Record<string, unknown>,
) => SwiperInstance;

export function getWindowSwiper(): SwiperConstructor | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { Swiper?: SwiperConstructor }).Swiper;
}
