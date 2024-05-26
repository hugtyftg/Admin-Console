import ProfileImage from '@/assets/image.png';
type AvatarPropsType = {
  src?: string;
  size: number;
};
export default function Avatar({ src, size }: AvatarPropsType) {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src={src ?? ProfileImage}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
