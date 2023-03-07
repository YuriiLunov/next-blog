import { NormalComponents } from 'react-markdown/lib/complex-types';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';

type TMdCustomComponents =
  | Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents>
  | undefined;

export default TMdCustomComponents;
