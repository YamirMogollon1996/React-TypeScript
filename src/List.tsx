interface Props {
  sub: {
    nick: string;
    avatar: string;
    subMonts: number;
    description?: string;
  };
  DeleteDuser: (id: string) => void;
}

const List = ({ sub, DeleteDuser }: Props) => {
  return (
    <>
      <div>
        <h1>{sub.nick}</h1>
        <p>{sub.avatar}</p>
        <p>{sub.description}</p>
        <p>{sub.subMonts}</p>
        <button onClick={() => DeleteDuser(sub.nick)} className="Top">
          Deleted
        </button>
      </div>
    </>
  );
};

export default List;
