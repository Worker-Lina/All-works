import { FC } from 'react';
export interface MyHeadingProps {
    fontSize: string;
    fontWeight: string;
    color: string;
    textAlign: string;
}
declare const Heading: FC<MyHeadingProps>;
export default Heading;
