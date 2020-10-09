import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getUnicornsDataRequested } from '../../store/unicorn/actions';
import Content from '../../components/IndexPage/Content';
import Spinner from '../../components/base/Spinner';

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledContainerCenter = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function IndexPage() {
  const dispatch: AppDispatch = useDispatch();
  const unicornsData = useSelector((state: RootState) => state.unicorn.data);
  const loading = useSelector((state: RootState) => state.unicorn.isLoadingUnicornsData);

  React.useEffect(() => {
    dispatch(getUnicornsDataRequested());
  }, []);

  if (loading) {
    return (
      <StyledContainerCenter>
        <Spinner />
      </StyledContainerCenter>
    );
  }

  return (
    <StyledContainer>
      <Content data={unicornsData} />
    </StyledContainer>
  );
}

export default IndexPage;
