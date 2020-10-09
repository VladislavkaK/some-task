import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Table from '../../base/Table';
import Button from '../../base/Button';
import Input from '../../base/Input';
import { AppDispatch } from '../../../store';
import { editUnicornsDataRequested } from '../../../store/unicorn/actions';

interface TableColumn {
  id:
    | 'name'
    | 'age'
    | 'colour'
    | 'options';
  title: string;
}

const StyledContainer = styled.div`
  width: 100%;
  padding: 100px;
`;

const Content: React.FC<{
  data?: {
    _id: string;
    name: string;
    age: number;
    colour: string;
  }[];
}> = ({ data }) => {
  const [clickProps, setClickProps] = React.useState<{ id?: string, isClick?: boolean }>({});
  const dispatch: AppDispatch = useDispatch();
  const [values, setValues] = React.useState<{
    _id: string;
    name: string;
    age: number;
    colour: string;
  }[]>([]);
  const columns: TableColumn[] = [
    {
      id: 'name',
      title: 'name',
    },
    {
      id: 'age',
      title: 'age',
    },
    {
      id: 'colour',
      title: 'color',
    },
    {
      id: 'options',
      title: '',
    },
  ];

  React.useEffect(() => setValues(data || []), [data]);

  const handleEdit = (id: string) => {
    setClickProps({ id, isClick: true });
  }

  const handleSave = (id: string, name: string, age: number, color: string) => {
    setClickProps({ id, isClick: false });
    dispatch(editUnicornsDataRequested({ id, name, age, color }))
  }

  const handleChange = (e: any, id: string, field: string) => {
    const newValues = values.map((el) => {
      if (el._id === id) {
        return {
          ...el,
          [field]: e.target.value
        }
      }

      return el;
    });

    setValues(newValues);
  }

  const rows = values && values.length > 0 ? values.map(({ _id, name, age, colour }, index) => {
    const rowComponent = (prop: any, field: string) => {
      if (clickProps.id === _id && clickProps.isClick) {
        return <Input type="text" defaultValue={prop} onChange={(e) => handleChange(e, _id, field)} />;
      }

      return <span>{prop}</span>;
    }

    const row = {
      name: {
        component: rowComponent(name, 'name')
      },
      age: {
        component: rowComponent(age, 'age')
      },
      colour: {
        component: rowComponent(colour, 'colour')
      },
      options: {
        component: clickProps.id === _id && clickProps.isClick ? (
          <Button 
            type="link" 
            onClick={() => handleSave(_id, name, age, colour)}
          >
            Save
          </Button>
        ) : (
          <Button 
            type="link"
            disabled={clickProps.isClick}
            onClick={() => handleEdit(_id)}
          >
            Edit
          </Button>
        )
      },
    };

    return row;
  }) : [];

  return (
    <StyledContainer>
      <Table columns={columns} rows={rows} />
    </StyledContainer>
  );
}

export default Content;