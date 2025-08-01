export default function Profile({ prof, size = 50 }) {
  return (
    <img
      src={prof.url}
      alt={`Picture of ${prof.name} width{prof.size}, age ${prof.age}`}
      height={size / 2}
    />
  );
}
