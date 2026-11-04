// Components.d.ts — the complete catalog of the 27 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Alerta2) and usable directly in JSX.
import * as React from 'react';

// figma layer: "alerta" (node 986:1148)
export interface Alerta2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "alerta" (node 3019:1917)
export interface Alerta6Props {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "arrow-left" (node 708:846)
export interface ArrowLeftProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "arrow-up" (node 708:861)
export interface ArrowUpProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Avatar" (node 2968:1071)
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "imagem" | "tipográfico";
  state?: "xxxxl" | "xxxl" | "xxl" | "xl" | "l" | "m";
  /** Text content; defaults to "NS". */
  text1?: string;
}

// figma layer: "Badge " (node 1719:701)
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "orange" | "red" | "yellow" | "green" | "puerple" | "grey";
  /** Text content; defaults to "TEXT". */
  text1?: string;
}

// figma layer: "Badge-number" (node 3044:1042)
export interface BadgeNumberProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "20". */
  text1?: string;
}

// figma layer: "Bagde-icon-square" (node 3036:4729)
export interface BagdeIconSquareProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  status?: "error" | "info" | "neutral" | "success" | "warning";
  showIcon?: "true";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Breadcrumb" (node 3764:1051)
export interface BreadcrumbProps {
  className?: string;
  style?: React.CSSProperties;
  background?: "white" | "blue";
  step?: "1" | "2" | "3";
  /** Text content; defaults to "Caminho". */
  text1?: string;
  /** Text content; defaults to "Caminho". */
  text2?: string;
  /** Text content; defaults to "Caminho". */
  text3?: string;
}

// figma layer: "Button" (node 708:902)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  iconLeft?: boolean;
  iconRight?: boolean;
  size?: "giant" | "lg" | "md" | "sm" | "tiny";
  state?: "default" | "hover" | "focus" | "press" | "disabled";
  style2?: "filled" | "outline" | "clear";
  content?: "icons + text" | "only icons";
  /** Text content; defaults to "Button". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Card Status number " (node 3037:5217)
export interface CardStatusNumberProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "a pagar" | "com falha" | "em andamento" | "pagos" | "estornados";
  state?: "default" | "hover";
  /** Text content; defaults to "A PAGAR". */
  text1?: string;
  /** Text content; defaults to "40". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Check" (node 31:263)
export interface CheckProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "check" (node 1814:2272)
export interface Check3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Checkbox" (node 1298:1190)
export interface CheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  state?: "default" | "hover";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "doc-moedas" (node 1254:520)
export interface DocMoedasProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Fechar " (node 31:4757)
export interface Fechar2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "icon-placeholder" (node 2014:5090)
export interface IconPlaceholder2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "input-text" (node 2014:5337)
export interface InputTextProps {
  className?: string;
  style?: React.CSSProperties;
  iconLeft?: boolean;
  state?: "default" | "hover" | "active" | "disabled" | "error" | "filled" | "focus";
  iconRight?: boolean;
  icon?: React.ReactNode;
  showHint?: boolean;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "Placeholder". */
  text2?: string;
  /** Text content; defaults to "Some hint for the input field". */
  text3?: string;
}

// figma layer: "loader" (node 31:139)
export interface LoaderProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Progress Bar- Stepper Horizontal" (node 3022:3081)
export interface ProgressBarStepperHorizontalProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "etapa 1" | "etapa 2" | "etapa 3" | "etapa 4";
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Text content; defaults to "Title". */
  text2?: string;
  /** Text content; defaults to "Title". */
  text3?: string;
  /** Text content; defaults to "Title". */
  text4?: string;
}

// figma layer: "recarregar" (node 1248:677)
export interface RecarregarProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "recarregar" (node 3019:1850)
export interface Recarregar2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Tabs" (node 1708:1140)
export interface TabsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "tributos a pagar" | "tributos em processamento" | "tributos com falha" | "tributos pagos";
  /** Text content; defaults to "Tributos a pagar". */
  text1?: string;
  /** Text content; defaults to "Tributos com falha". */
  text2?: string;
  /** Text content; defaults to "Tributos em processamento". */
  text3?: string;
  /** Text content; defaults to "Tributos pagos". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "temporizador" (node 1254:508)
export interface TemporizadorProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Toast " (node 31:4759)
export interface ToastProps {
  className?: string;
  style?: React.CSSProperties;
  erro?: "default" | "variant2" | "toast";
  sucesso?: "toast";
  atenO?: "toast";
  informaO?: "property 44" | "variant3" | "informação5";
  /** Text content; defaults to "Erro Titulo principal". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Toggle" (node 1298:1216)
export interface ToggleProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "desabilitado" | "ativo";
  /** Text content; defaults to "Inativo". */
  text1?: string;
}

// figma layer: "Tooltip Top" (node 1313:1974)
export interface TooltipTopProps {
  className?: string;
  style?: React.CSSProperties;
  tooltipText?: string;
  arrowPosition?: "center top arrow" | "left top arrow" | "right top arrow";
}

declare const Alerta2: React.FC<Alerta2Props>;
declare const Alerta6: React.FC<Alerta6Props>;
declare const ArrowLeft: React.FC<ArrowLeftProps>;
declare const ArrowUp: React.FC<ArrowUpProps>;
declare const Avatar: React.FC<AvatarProps>;
declare const Badge: React.FC<BadgeProps>;
declare const BadgeNumber: React.FC<BadgeNumberProps>;
declare const BagdeIconSquare: React.FC<BagdeIconSquareProps>;
declare const Breadcrumb: React.FC<BreadcrumbProps>;
declare const Button: React.FC<ButtonProps>;
declare const CardStatusNumber: React.FC<CardStatusNumberProps>;
declare const Check: React.FC<CheckProps>;
declare const Check3: React.FC<Check3Props>;
declare const Checkbox: React.FC<CheckboxProps>;
declare const DocMoedas: React.FC<DocMoedasProps>;
declare const Fechar2: React.FC<Fechar2Props>;
declare const IconPlaceholder2: React.FC<IconPlaceholder2Props>;
declare const InputText: React.FC<InputTextProps>;
declare const Loader: React.FC<LoaderProps>;
declare const ProgressBarStepperHorizontal: React.FC<ProgressBarStepperHorizontalProps>;
declare const Recarregar: React.FC<RecarregarProps>;
declare const Recarregar2: React.FC<Recarregar2Props>;
declare const Tabs: React.FC<TabsProps>;
declare const Temporizador: React.FC<TemporizadorProps>;
declare const Toast: React.FC<ToastProps>;
declare const Toggle: React.FC<ToggleProps>;
declare const TooltipTop: React.FC<TooltipTopProps>;
declare global {
  interface Window {
    Alerta2: React.FC<Alerta2Props>;
    Alerta6: React.FC<Alerta6Props>;
    ArrowLeft: React.FC<ArrowLeftProps>;
    ArrowUp: React.FC<ArrowUpProps>;
    Avatar: React.FC<AvatarProps>;
    Badge: React.FC<BadgeProps>;
    BadgeNumber: React.FC<BadgeNumberProps>;
    BagdeIconSquare: React.FC<BagdeIconSquareProps>;
    Breadcrumb: React.FC<BreadcrumbProps>;
    Button: React.FC<ButtonProps>;
    CardStatusNumber: React.FC<CardStatusNumberProps>;
    Check: React.FC<CheckProps>;
    Check3: React.FC<Check3Props>;
    Checkbox: React.FC<CheckboxProps>;
    DocMoedas: React.FC<DocMoedasProps>;
    Fechar2: React.FC<Fechar2Props>;
    IconPlaceholder2: React.FC<IconPlaceholder2Props>;
    InputText: React.FC<InputTextProps>;
    Loader: React.FC<LoaderProps>;
    ProgressBarStepperHorizontal: React.FC<ProgressBarStepperHorizontalProps>;
    Recarregar: React.FC<RecarregarProps>;
    Recarregar2: React.FC<Recarregar2Props>;
    Tabs: React.FC<TabsProps>;
    Temporizador: React.FC<TemporizadorProps>;
    Toast: React.FC<ToastProps>;
    Toggle: React.FC<ToggleProps>;
    TooltipTop: React.FC<TooltipTopProps>;
  }
}
