import SectionTitle from "@/components/common/SectionTitle";
import MainSlide from "@/components/slide/MainSlide";
import { MainTitle, SubTitle } from "@/components/style/style";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="home-banner">
        <div>
          <div className="slider-wrapper">
            <MainSlide />
          </div>
          <div>
            <div>
              <div>
                <Image src="/images/하루의활기찬시작.png" alt="하루의 활기찬 시작" width={642} height={254} />
              </div>
              <h2>단순한 활력을 넘어<br className="mo" />몸속 깊은 곳의 균형까지</h2>
              <h3>우리들의 하루를 더 단단하고 건강하게 지켜줍니다.</h3>
            </div>
          </div>
        </div>
      </main>

      <article className="home1">
        <div>

          <div>
            <div>
              <SubTitle>자연이 준 최대의 선물!</SubTitle>
              <MainTitle>귀를 기울이면 들려오는 자연의 속삭임<br />좋은 에너지는 건강이 됩니다.</MainTitle>
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

          <div className="display-flex-flow">
            <div className="pc">
            </div>
            <section>
              <Link href="/product/heating">
                <div>
                  <Image src="/icons/전신온열케어.png" alt="전신 온열 케어 제품 보기" width={100} height={100} />
                </div>
                <h3>전신 온열 케어</h3>
                <p className="pc">전신을 따뜻하게 감싸고 파동 에너지를 전달하여 내일의 에너지를 충전합니다.</p>
              </Link>
            </section>
            <div className="pc"></div>
            <section>
              <Link href="/product/intensive">
                <div>
                  <Image src="/icons/부분집중케어.png" alt="부분 집중 케어 제품 보기" width={100} height={100} />
                </div>
                <h3>부분 집중 케어</h3>
                <p className="pc">신체 특정 부위의 체온을 올리고 통증 완화를 도와 따뜻한 휴식을 드립니다.</p>
              </Link>
            </section>
            <div className="pc"></div>
            <div className="pc"></div>
          </div>

          <div>
            <Image src="/images/products/lifestyle/쇼파형라온드림.png" alt="쇼파형 라온드림" width={1200} height={967} />
          </div>

        </div >
      </article >

      <article className="home2">
        <div>

          <div>
            <div>
              <SubTitle>에코원이 만들어낸 건강과학</SubTitle>
              <MainTitle>어제보다 건강한 오늘,<br />칠보세라믹으로부터</MainTitle>
            </div>
            <p>칠보세라믹은 백두대간의 태백산 줄기에 위치한 일월산에서 1억 5천만년 전 형성된 퇴적암으로 열에너지파의 일종인 적외선 영역(0.76~1000um)에는 원적외선 파장대가 있어 모든 생물의 성장발육과 생명활동을 촉진시키는 신비의 빛 생육광선이 있습니다. <br /><br />열에너지의 효율이 가장 강력한 파장대(6~14um)의 원적외선 중 방출량이 가장 우수한 소재를 선별, 명물질을 블랜딩시켜, 원료정제, 혼합 등 철저한 성분관리를 하였으며, 또한 고온으로 소결하여 원적외선이 고방사되는 복사세라믹입니다.</p>
            <div className="read-more">
              <Link href="/company" className="display-flex">
                <p>READ MORE</p>
                <div>
                  <Image src="/icons/arrow_red.png" alt="자세히 보기 아이콘" width={15} height={29} />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <Image src="/images/home_contents.png" alt="어제보다 건강한 오늘" width={1200} height={929} />
          </div>

        </div>
      </article>

      <article className="home3">
        <div>
          <SectionTitle main="칠보세라믹의 헬스테라피" sub="통증은 멀게, 건강은 가깝게" />
          <div className="display-flex-flow">
            <section>
              <Link href="/product/heating">
                <div>
                  <div>
                    <Image src="/images/products/heating/라온블랙다이아.png" alt="" width={1000} height={526} />
                  </div>
                  <h4>라온블랙다이아</h4>
                </div>
              </Link>
            </section>
            <section>
              <Link href="/product/lifestyle">
                <div>
                  <div>
                    <Image src="/images/products/lifestyle/쇼파형라온드림.png" alt="" width={1200} height={967} />
                  </div>
                  <h4>쇼파형 라온드림</h4>
                </div>
              </Link>
            </section>
            <section>
              <Link href="/product/lifestyle">
                <div>
                  <div>
                    <Image src="/images/products/lifestyle/셀파워충전소.png" alt="" width={700} height={935} />
                  </div>
                  <h4>셀파워 충전소</h4>
                </div>
              </Link>
            </section>
          </div>
          <div className="read-more">
            <Link href="/product/heating" className="display-flex">
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
