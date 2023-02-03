interface Props {
  certificate: string;
}

export function Certifications({ certificate }: Props) {
  return (
    <div>
      <ul>
        <li>{certificate}</li>
      </ul>
    </div>
  );
}
