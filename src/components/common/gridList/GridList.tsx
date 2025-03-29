import { typeCategory } from "@customTypes/category";
import { Row, Col } from "react-bootstrap";

type GridListProps = {
  records: typeCategory[];
  renderItem: (record: typeCategory) => React.JSX.Element;
};

const GridList = ({ records, renderItem }: GridListProps) => {
  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(record)}
          </Col>
        ))
      : "esta categoria não existe.";

  return <Row>{categoriesList}</Row>;
};

export default GridList;
