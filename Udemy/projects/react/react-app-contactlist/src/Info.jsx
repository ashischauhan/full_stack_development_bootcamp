export default function Info(props) {
  return (
    <div className="info">
      <p>Phone: {props.tel}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}
