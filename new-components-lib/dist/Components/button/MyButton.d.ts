import { FC } from 'react';
export interface MyButtonProps {
    color: string;
    background: string;
    fontSize: string;
    variant: string;
    cursor: string;
    padding: string;
    border: string;
    hoverColor: string;
    hoverBackgroundColor: string;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
