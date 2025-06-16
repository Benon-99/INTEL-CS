declare module '@splinetool/react-spline/next' {
  interface SplineProps {
    scene: string;
    [key: string]: string | number | boolean | undefined;
  }

  export default function Spline(props: SplineProps): JSX.Element;
}
