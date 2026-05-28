import MainSlide from "@/components/slide/MainSlide";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="home-banner w-[full] block relative">
        <div>
          <div className="slider-wrapper">
            <MainSlide />
          </div>
          <div className="w-[90%] absolute top-12.5 left-[5%]
          pc:w-300 pc:top-[45%] pc:left-1/2 pc:-translate-x-1/2 pc:-translate-y-1/2">
            <div>
              <div>
                <Image
                  className="w-55 h-auto md:w-80 pc:w-135!"
                  src="/images/하루의활기찬시작.png"
                  alt="하루의 활기찬 시작"
                  width={642}
                  height={254} />
              </div>
              <h2 className="font-['myeongjo-b'] text-red mt-5 mb-3.75 pc:mt-12.5 pc:mb-3.75 pc:text-[2rem]">단순한 활력을 넘어<br className="mo" />몸속 깊은 곳의 균형까지</h2>
              <h3 className="font-['myeongjo-b'] pc:text-[1.5rem]">우리들의 하루를 더 단단하고 건강하게 지켜줍니다.</h3>
            </div>
          </div>
        </div>
      </main>

      <article>
        <div className="relative pc:flex pc:justify-between">

          <div>
            <div>
              <p className="font-['myeongjo-ex'] text-red pc:text-[1.2rem]">자연이 준 최대의 선물!</p>
              <h2 className="font-['myeongjo-ex'] mt-3.75 mx-0 mb-6.25 pc:mb-12.5 pc:text-[2rem]">귀를 기울이면 들려오는 자연의 속삭임<br />좋은 에너지는 건강이 됩니다.</h2>
            </div>
            <p>‘원적외선의 과학기술이 숙면 과학의 기술’ 입니다.<br className="pc" />
              칠보복합세라믹으로 가족의 건강을 되찾아드리겠습니다.<br className="pc" />
              가족 건강을 위해 ECHOONE과 함께 하십시오.</p>
            <div className="read-more">
              <Link href="/product/heating" className="display-flex">
                <p>READ MORE</p>
                <div>
                  <Image src="/icons/arrow_red.png" alt="자세히 보기 아이콘" width={15} height={29} />
                </div>
              </Link>
            </div>
          </div>

          <div className="display-flex-flow my-17.5 mx-0 pc:m-0 pc:w-130 pc:justify-left pc-gap-5">
            <div className="pc pc:w-62.5 pc:h-62.5"></div>
            <section
              className="w-[48%] flex justify-center items-center py-7.5 px-2.5 duration-300 bg-red hover:bg-[#b90000]
              md:py-12.5 md:px-2.5
              pc:py-7.5 pc:w-62.5 pc:h-62.5">
              <Link
                className="text-center text-white"
                href="/product/heating">
                <div>
                  <Image
                    className="w-10 h-auto mt-0 mx-auto mb-5 pc:w-17.5"
                    src="/icons/전신온열케어.png" alt="전신 온열 케어 제품 보기" width={100} height={100} />
                </div>
                <h3 className="pc:mb-1.25">전신 온열 케어</h3>
                <p className="hidden mt-1.25 md:block pc:block">전신을 따뜻하게 감싸고 파동 에너지를 전달하여 내일의 에너지를 충전합니다.</p>
              </Link>
            </section>
            <div className="pc pc:w-62.5 pc:h-62.5 pc:bg-[#222] pc:my-5"></div>
            <section
              className="w-[48%] flex justify-center items-center py-7.5 px-2.5 duration-300 bg-[#555] hover:bg-[#222]
            md:py-12.5 md:px-2.5
            pc:py-7.5 pc:w-62.5 pc:h-62.5 pc:my-5">
              <Link
                className="text-center text-white"
                href="/product/intensive">
                <div>
                  <Image
                    className="w-10 h-auto mt-0 mx-auto mb-5 pc:w-17.5"
                    src="/icons/부분집중케어.png" alt="부분 집중 케어 제품 보기" width={100} height={100} />
                </div>
                <h3 className="pc:mb-1.25">부분 집중 케어</h3>
                <p className="hidden mt-1.25 md:block pc:block">신체 특정 부위의 체온을 올리고 통증 완화를 도와 따뜻한 휴식을 드립니다.</p>
              </Link>
            </section>
            <div className="pc pc:w-62.5 pc:h-62.5"></div>
            <div className="pc pc:w-62.5 pc:h-62.5 pc:bg-[url('/images/box-bg.png')] pc:bg-cover pc:bg-center pc:bg-no-repeat"></div>
          </div>

          <div className="-mt-21.25 pc:mt-0 pc:absolute pc:right-50 pc:-bottom-7.5">
            <Image className="w-full h-auto md:w-[80%] md:m-auto pc:w-170!" src="/images/쇼파형라온드림_B.png" alt="쇼파형 라온드림" width={680} height={548} />
          </div>

        </div >
      </article >

      <article>
        <div className="pc:flex pc:justify-between">

          <div className="pc:w-145 pc:order-2 pc:my-auto pc:mx-0">
            <div>
              <p className="font-['myeongjo-ex'] text-red pc:text-[1.2rem]">에코원이 만들어낸 건강과학</p>
              <h2 className="font-['myeongjo-ex'] mt-3.75 mx-0 mb-6.25 pc:mb-12.5 pc:text-[2rem]">어제보다 건강한 오늘,<br />칠보세라믹으로부터</h2>
            </div>
            <p className="font-['nanum']">칠보세라믹은 백두대간의 태백산 줄기에 위치한 일월산에서 1억 5천만년 전 형성된 퇴적암으로 열에너지파의 일종인 적외선 영역(0.76~1000um)에는 원적외선 파장대가 있어 모든 생물의 성장발육과 생명활동을 촉진시키는 신비의 빛 생육광선이 있습니다. <br /><br />열에너지의 효율이 가장 강력한 파장대(6~14um)의 원적외선 중 방출량이 가장 우수한 소재를 선별, 명물질을 블랜딩시켜, 원료정제, 혼합 등 철저한 성분관리를 하였으며, 또한 고온으로 소결하여 원적외선이 고방사되는 복사세라믹입니다.</p>
            <div className="read-more">
              <Link href="/company" className="display-flex">
                <p>READ MORE</p>
                <div>
                  <Image src="/icons/arrow_red.png" alt="자세히 보기 아이콘" width={15} height={29} />
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-12.5 pc:mt-0">
            <Image className="pc:w-137.5" src="/images/home_contents.png" alt="어제보다 건강한 오늘" width={1200} height={929} />
          </div>

        </div>
      </article>

      <article className="bg-[#f5f5f5]">
        <div>
          <div className="text-center">
            <p className="font-['myeongjo-ex'] text-red pc:text-[1.2rem]">통증은 멀게, 건강은 가깝게</p>
            <h2 className="font-['myeongjo-ex'] mt-3.75 mx-0 mb-6.25 pc:mb-12.5 pc:text-[2rem]">칠보세라믹의 헬스테라피</h2>
          </div>
          <div className="display-flex-flow">
            <section className="bg-white w-full h-80 my-3.25 mx-0 relative pc:w-96.5 pc:h-87.5 pc:m-0">
              <Link
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pc:insert-0"
                href="/product/heating">
                <div className="flex justify-center items-center flex-col w-55 m-auto pc:w-75 pc:h-45">
                  <div>
                    <Image
                      className="h-45 w-auto m-auto"
                      src="/images/라온블랙다이아.png"
                      alt="라온블랙다이아"
                      width={479}
                      height={251} />
                  </div>
                  <h4 className="mt-7.5 text-center font-light">라온블랙다이아</h4>
                </div>
              </Link>
            </section>
            <section className="bg-white w-full h-80 my-3.25 mx-0 relative pc:w-96.5 pc:h-87.5 pc:m-0">
              <Link
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pc:insert-0"
                href="/product/lifestyle">
                <div className="flex justify-center items-center flex-col w-55 m-auto pc:h-45">
                  <div>
                    <Image
                      className="h-45 w-auto m-auto"
                      src="/images/쇼파형라온드림.png"
                      alt="쇼파형라온드림"
                      width={399}
                      height={323} />
                  </div>
                  <h4 className="mt-7.5 text-center font-light">쇼파형 라온드림</h4>
                </div>
              </Link>
            </section>
            <section className="bg-white w-full h-80 my-3.25 mx-0 relative pc:w-96.5 pc:h-87.5 pc:m-0">
              <Link
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pc:insert-0"
                href="/product/lifestyle">
                <div className="flex justify-center items-center flex-col w-55 m-auto pc:w-87.5 pc:h-45">
                  <div>
                    <Image
                      className="h-45 w-auto m-auto"
                      src="/images/셀파워충전소.png"
                      alt="셀파워충전소"
                      width={282}
                      height={377} />
                  </div>
                  <h4 className="mt-7.5 text-center font-light">셀파워 충전소</h4>
                </div>
              </Link>
            </section>
          </div>
          <div className="read-more">
            <Link href="/product/heating" className="flex justify-center">
              <p>READ MORE</p>
              <div>
                <Image src="/icons/arrow_red.png" alt="자세히 보기 아이콘" width={15} height={29} />
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
