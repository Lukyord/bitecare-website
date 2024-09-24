import { getTranslations } from "next-intl/server"
import TextRevealFromBottom from "../../animations/TextRevealFromBottom"
import WhiteTextBox from "./WhiteTextBox"
import Image from "next/image"
import { Images } from "@/constant/Images"
import BlobBackground_1 from "./BlobBackground_1"
import BlobBackground_2 from "./BlobBackground_2"

// "bitecare-difference": {
//   "header": "The BiteCare Difference",
//   "tailored-nutrition": "Tailored Nutrition",
//   "tailored-nutrition-description-1": "BiteCare offers a range of specialized dog foods crafted to meet the specific needs of your dogs. Each formula is a result of meticulous research and a genuine love for our canine companions.",
//   "tailored-nutrition-description-2": "Think of BiteCare as your dog's personal nutritionist. Our Tailored Nutrition approach allows you to create a personalized care plan for your pet.",
//   "tailored-nutrition-quote": "“Every bite is tailored to match your dog's life stage and health considerations.”",
//   "premium-ingredients": "Premium Ingredients",
//   "premium-ingredients-description-1": "At BiteCare, we believe that exceptional meals start with exceptional ingredients. Our commitment to “Premium Ingredients” means that every bite your is crafted with love and care.",
//   "premium-ingredients-description-2": "We source our ingredients from trusted suppliers and use only the finest quality meats, fruits, and vegetables. Our recipes are free from artificial flavors, colors, and preservatives.",
//   "premium-ingredients-quote": "“No fillers, no compromises, just pure, nutrition.”",
//   "bitecare-community-header": "Our Mission",
//   "bitecare-community-description": "BiteCare isn't just a brand; it's a community of pet lovers who share a common goal - to provide the best for our furry friends. Join us on this journey towards healthier, happier dogs.",
//   "bitecare-thanks": "Thank you for choosing BiteCare. Because every wag, bark, and cuddle matters. ❤️"
// },

// "bitecare-difference": {
//   "header": "ความแตกต่างของ BiteCare",
//   "tailored-nutrition": "โภชนาการที่เพรียบพร้อม",
//   "tailored-nutrition-description-1": "BiteCare นำเสนออาหารสุนัขที่ทันสมัยที่ถูกออกแบบมาเพื่อตอบสนองต่อความต้องการของสุนัขของคุณ ทุกรูปแบบเป็นผลมาจากการวิจัยอย่างพิถีพิถันและความรักเพื่อเพื่อนร่วมทางของเรา",
//   "tailored-nutrition-description-2": "BiteCare เหมือนนักโภชนาการส่วนตัวของสุนัขของคุณ ผลิตภัณฑ์ของเราจะช่วยให้คุณดูแลสัตว์เลี้ยงของคุณได้ดีชึ้นอีกระดับ",
//   "tailored-nutrition-quote": "“ทุกจานที่เรามอบให้ เหมาะกับทุกช่วงชีวิตและความต้องการทางสุขภาพของเพื่อนสุนัคของคุณ”",
//   "premium-ingredients": "วัตถุดิบพรีเมียม",
//   "premium-ingredients-description-1": "ที่ BiteCare เราเชื่อว่าอาหารที่ยอดเยี่ยมเริ่มต้นด้วยส่วนผสมที่ยอดเยี่ยม ความมุ่งมั่นของเราในการใช้ วัตถุดิบพรีเมียม หมายความว่าทุกคำที่สุนัขของคุณได้รับถูกสร้างขึ้นด้วยความรักและความใส่ใจ",
//   "premium-ingredients-description-2": "วัตถุดิบของเรามาจากผู้ผลิตที่น่าเชื่อถือและใช้เฉพาะเนื้อคุณภาพดีที่สุด ผลไม้และผักที่มีคุณภาพดีที่สุด สูตรของเราปลอดจากสารเจือปน สี และสารกันเสื่อม",
//   "premium-ingredients-quote": "“ไม่มีส่วนเติม ไม่มีการมักง่าย มีเพียงโภชนาการที่เพรียบพร้อม”",
//   "rigorous-testing": "Rigorous Testing",
//   "rigorous-testing-description-1": "Safety and palatability are our top priorities. Every Bitecare snack undergoes thorough testing, including comprehensive blood tests to ensure they are safe and beneficial for pets with various health conditions. Additionally, we conduct extensive palatability tests to guarantee that our treats are not only nutritious but also irresistible to pets. We believe that a snack should bring joy as well as health benefits.",
//   "rigorous-testing-description-2": "",
//   "rigorous-testing-quote": "",
//   "bitecare-community-header": "ภารกิจของเรา",
//   "bitecare-community-description": "BiteCare ไม่ได้เป็นเพียงแค่แบรนด์ แต่เราเป็นชุมชนของคนรักสัตว์เลี้ยงที่มีจุดมุ่งหมายเดียวกัน ที่จะให้สุนัขของเรามีสุขภาพที่ดีที่สุด เข้ามาเป็นส่วนหนึ่งกับเราในการเดินทางนี้ที่จะทำให้เพื่อนสุนัขของเราสุขภาพดีและสุขสบายกว่า",
//   "bitecare-thanks": "ขอบคุณที่เลือก BiteCare เพราะทุกการเคลื่อนไหว เสี่ยงเห่า และการกอดมีค่าเสมอ ❤️"
// },

export default async function BiteCareDifference() {
  const tBiteCareDifference = await getTranslations("bitecare-difference")

  return (
    <section
      className="
            flex h-fit w-[100vw]
            flex-col gap-[5vh] px-[5vw]
            py-[5vh] xl:h-[100vh]
            xl:w-[250vw] xl:pl-[10vw]
          "
    >
      <div className="relative w-fit">
        <TextRevealFromBottom duration={0.9} delay={0.5}>
          <h1 className="relative text-h2 lg:text-h1">
            {tBiteCareDifference("header")}
          </h1>
        </TextRevealFromBottom>
        <BlobBackground_1 />
      </div>

      <div
        className="
                  flex h-full w-full 
                  flex-col justify-between 
                  xl:flex-row
                "
      >
        {/* BiteCare Difference */}
        <div
          className="
                    relative flex h-full
                    flex-col gap-14 pb-40 xl:grid
                    xl:w-[45%] xl:grid-cols-3 xl:gap-[2.5%]
                    desktop:pb-[5vh]
                  "
        >
          <TextRevealFromBottom duration={1} delay={0.65}>
            <WhiteTextBox header={tBiteCareDifference("tailored-nutrition")}>
              <p className="hidden xl:block">
                {tBiteCareDifference("tailored-nutrition-description-1")}
              </p>
              <h2 className="text-center text-h3">
                {tBiteCareDifference("tailored-nutrition-quote")}
              </h2>
              <p className="hidden xl:block">
                {tBiteCareDifference("tailored-nutrition-description-2")}
              </p>
            </WhiteTextBox>
          </TextRevealFromBottom>
          <TextRevealFromBottom duration={1} delay={0.65}>
            <WhiteTextBox header={tBiteCareDifference("premium-ingredients")}>
              <p className="hidden xl:block">
                {tBiteCareDifference("premium-ingredients-description-1")}
              </p>
              <p className="hidden xl:block">
                {tBiteCareDifference("premium-ingredients-description-2")}
              </p>
              <h2 className="text-center text-h3">
                {tBiteCareDifference("premium-ingredients-quote")}
              </h2>
            </WhiteTextBox>
          </TextRevealFromBottom>
          <TextRevealFromBottom duration={1} delay={0.65}>
            <WhiteTextBox header={tBiteCareDifference("rigorous-testing")}>
              <p className="hidden xl:block">
                {tBiteCareDifference("rigorous-testing-description-1")}
              </p>
              <p className="hidden xl:block">
                {tBiteCareDifference("rigorous-testing-description-2")}
              </p>
              <h2 className="text-center text-h3">
                {tBiteCareDifference("rigorous-testing-quote")}
              </h2>
            </WhiteTextBox>
          </TextRevealFromBottom>
          <BlobBackground_2 />
        </div>

        {/* BiteCare Community */}
        <div
          className="
                    flex h-full flex-col gap-14
                    xl:w-[50%] xl:flex-row xl:justify-between
                    xl:gap-0
                  "
        >
          <div className="relative xl:w-[70%]">
            <Image
              alt="tape top right"
              src={Images.DuctTape_1}
              className="absolute -right-[5%] top-[5%] h-auto w-[20%] rotate-45"
            />
            <Image
              alt="bitecare community"
              src={Images.AboutUsBcDifferenceDog}
              className="h-auto w-full object-cover"
            />
            <Image
              alt="tape bottom left"
              src={Images.DuctTape_1}
              className="absolute -left-[5%] bottom-[5%] h-auto w-[20%] rotate-45"
            />
          </div>

          <div className="flex flex-col gap-14 text-justify text-paragraph xl:w-[25%]">
            <TextRevealFromBottom duration={0.5} delay={0.25}>
              <h3 className="mb-4 text-3xl">
                {tBiteCareDifference("bitecare-community-header")}
              </h3>
              <p>{tBiteCareDifference("bitecare-community-description")}</p>
            </TextRevealFromBottom>
            <TextRevealFromBottom duration={0.5} delay={0.5}>
              <p>{tBiteCareDifference("bitecare-thanks")}</p>
            </TextRevealFromBottom>
          </div>
        </div>
      </div>
    </section>
  )
}
