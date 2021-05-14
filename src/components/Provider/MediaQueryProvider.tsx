import React, { createContext, FC, useContext, useMemo } from "react";
import useMedia from "use-media";

type Props = {
  children: React.ReactNode;
};

// アプリケーション全体で共有する値の定義
type Context = {
  // モバイルか？
  isMobile: boolean;
  // タブレットか？
  isTablet: boolean;
  // PCか？
  isPc: boolean;
};

// Contextの生成
// デフォルトはPCとする。
const MediaQueryContext = createContext<Context>({
  isMobile: false,
  isTablet: false,
  isPc: true,
});

// 各デバイスでのサイズを定義
const mediaQueries = {
  mobile: "(max-width: 467px)",
  tablet: "(min-width: 468px) and (max-width: 959px)",
  pc: "(min-width: 960px)",
};

export const MediaQueryProvider: FC<Props> = ({ children }: Props) => {
  const isMobile = useMedia(mediaQueries.mobile);
  const isTablet = useMedia(mediaQueries.tablet);
  const isPc = useMedia(mediaQueries.pc);
  const value = useMemo(
    () => ({ isMobile, isTablet, isPc }),
    [isMobile, isTablet, isPc]
  );

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMediaQueryContext = (): Context =>
  useContext(MediaQueryContext);
