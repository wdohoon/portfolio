export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-4">
      <h2 className="text-4xl font-bold">페이지를 찾을 수 없습니다.</h2>
      <p>요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <a href="/" className="text-primary underline">홈으로 돌아가기</a>
    </div>
  );
}
