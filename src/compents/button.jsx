function Button({color,label}) {
  // const {color,label}=props
  return (
    <button
      style={{color : color ? color :"yellow"}}
    >
      {label}
    </button>
  );
}

export default Button;

