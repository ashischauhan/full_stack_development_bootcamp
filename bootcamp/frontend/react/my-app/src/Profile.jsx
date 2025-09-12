export default function Profile({ prof, size = 20 }) {
  return (
    <img
      src={prof.url}
      alt={`Picture of ${prof.name} width ${size}, age ${prof.age}`}
      height={size / 2}
    />
  );
}
