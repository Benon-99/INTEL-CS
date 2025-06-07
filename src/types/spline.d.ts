declare module '@splinetool/react-spline/next' {
  interface SplineProps {
    scene: string;
    [key: string]: any;
  }

  export default function Spline(props: SplineProps): JSX.Element;
}
