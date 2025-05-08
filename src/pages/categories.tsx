import useCategories from "@hooks/useCategories";
import { GridList, Heading } from "@components/common";
import { Category } from "../components/ecommerce";
import { Loading } from "@components/feedback";

const Categories = () => {
  const { loading, error, records } = useCategories();
  return (
    <>
      <Heading title="Categorias" />
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </>
  );
};

export default Categories;
