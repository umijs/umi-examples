import { Button } from "antd-mobile";

function Count({ value = 0, onChange }) {
  return (
    <div>
      <div>Count: {value}</div>
      <br />
      <div>
        <Button type="primary" onClick={() => onChange(value + 1)}>
          +
        </Button>
        <Button type="ghost" onClick={() => onChange(value - 1)}>
          -
        </Button>
      </div>
    </div>
  );
}

export default Count;
