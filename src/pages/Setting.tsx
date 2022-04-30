import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Card } from '../style/Card';
import { Form } from '../style/Form';

const Setting = () => {
  const dispath = useAppDispatch;
  const { sort } = useAppSelector((state) => state.commentReducer);

  // TODO: Fix select

  return (
    <main>
      <Card>
        <Form>
          <legend>Sort order</legend>
          <select
          // value={sort === 'ASC' ? 0 : 1}
          // onChange={(e => dispath(setSort(evt.target.value)))}
          >
            <option value='ASC'>Ascending</option>
            <option value='DESC'>Descending</option>
          </select>
        </Form>
      </Card>
    </main>
  );
};

export default Setting;
