// Components.d.ts — the complete catalog of the 12 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Atividades) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Atividades" (node 1:1548)
export interface AtividadesProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Aula Ao Vivo" (node 1:9193)
export interface AulaAoVivoProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Aula de Conversação" (node 1:9143)
export interface AulaDeConversaOProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Autodeclaração" (node 1:1340)
export interface AutodeclaraOProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Bem vinda" (node 1:1332)
export interface BemVindaProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Dúvida" (node 1:1740)
export interface DVidaProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Gramática" (node 1:1820)
export interface GramTicaProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Home " (node 1:1663)
export interface HomeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Leitura " (node 1:9055)
export interface LeituraProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Login" (node 1:1290)
export interface LoginProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Questionário nível de inglês" (node 1:1494)
export interface QuestionRioNVelDeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "1-Splash" (node 1:1529)
export interface Splash1Props {
  className?: string;
  style?: React.CSSProperties;
}

declare const Atividades: React.FC<AtividadesProps>;
declare const AulaAoVivo: React.FC<AulaAoVivoProps>;
declare const AulaDeConversaO: React.FC<AulaDeConversaOProps>;
declare const AutodeclaraO: React.FC<AutodeclaraOProps>;
declare const BemVinda: React.FC<BemVindaProps>;
declare const DVida: React.FC<DVidaProps>;
declare const GramTica: React.FC<GramTicaProps>;
declare const Home: React.FC<HomeProps>;
declare const Leitura: React.FC<LeituraProps>;
declare const Login: React.FC<LoginProps>;
declare const QuestionRioNVelDe: React.FC<QuestionRioNVelDeProps>;
declare const Splash1: React.FC<Splash1Props>;
declare global {
  interface Window {
    Atividades: React.FC<AtividadesProps>;
    AulaAoVivo: React.FC<AulaAoVivoProps>;
    AulaDeConversaO: React.FC<AulaDeConversaOProps>;
    AutodeclaraO: React.FC<AutodeclaraOProps>;
    BemVinda: React.FC<BemVindaProps>;
    DVida: React.FC<DVidaProps>;
    GramTica: React.FC<GramTicaProps>;
    Home: React.FC<HomeProps>;
    Leitura: React.FC<LeituraProps>;
    Login: React.FC<LoginProps>;
    QuestionRioNVelDe: React.FC<QuestionRioNVelDeProps>;
    Splash1: React.FC<Splash1Props>;
  }
}
