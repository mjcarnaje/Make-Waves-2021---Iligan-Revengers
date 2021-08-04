import React from "react";
import { View } from "react-native";

interface Props {
  marginVertical?: number;
}

const Separator: React.FC<Props> = ({ marginVertical = 8 }) => {
  return <View style={{ marginVertical }} />;
};

export default Separator;
