interface Props {
  certificate: string;
}

export function Certifications({ certificate }: Props) {
  return <div>{certificate}</div>;
}
