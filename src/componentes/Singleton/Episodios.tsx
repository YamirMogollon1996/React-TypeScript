interface Props {
  episodios: Array<string>;
}

export const Episodios = ({ episodios }: Props) => {
  return <h3> Lista de espisdios es de {episodios.length} </h3>;
};
