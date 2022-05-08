import { FunctionComponent } from "react";

import { Container } from "./styles";
import GroupingSelectBox from '../GroupingSelectBox'

interface HeaderProps {
  options: number[]
}
const Header: FunctionComponent<HeaderProps> = ({ options }) => (
  <Container>
    <h3>Order Book</h3>
    <GroupingSelectBox options={options} />
  </Container>
)

export default Header