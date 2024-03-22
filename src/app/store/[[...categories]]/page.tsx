interface CategoryProps {
  params: {
    categories: string[];
    searchParamas?: string;
  };
}

export default function Categories(props: CategoryProps) {
  const { categories } = props.params;
  console.log(props);

  return <h1>Categoria Dinamica: {categories}</h1>;
}
