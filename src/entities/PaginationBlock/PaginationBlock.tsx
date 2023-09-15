import { ArrowLeft14x7 } from 'shared/ui/icons/icons-tools/ArrowLeft14x7';
import { ArrowRight14x7 } from 'shared/ui/icons/icons-tools/ArrowRight14x7';
import { PaginationBlockDiv } from './PaginationBlock.style';

export const PaginationBlock = () => {
  return (
    <PaginationBlockDiv>
      <ArrowLeft14x7 style={{marginRight: '12px'}} color="#BCBCBC" />
      <ArrowRight14x7 style={{ marginLeft: '12px' }} color="#1C1C1E" />
    </PaginationBlockDiv>
  );
};
