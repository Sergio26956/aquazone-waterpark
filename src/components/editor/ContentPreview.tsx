type Props = {
  html: string;
};

export default function ContentPreview({ html }: Props) {
  return (
    <div className="border border-gray-200 p-4 rounded mt-4 bg-white shadow-inner">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
