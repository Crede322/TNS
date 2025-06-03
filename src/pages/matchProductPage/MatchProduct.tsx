import PromotionPageTemplate from "../../components/templates/promotionPageTemplate/PromotionPageTemplate";

export default function MatchProduct() {
  return (
    <PromotionPageTemplate
      heading="Подобрать CPU"
      textH2="На этой странице мы подобрали определённые процессоры специально для вас - от доступных моделей для дома до высокопроизводительных решений для профессионалов."
      textH3="Идеальные процессоры — мы уже выбрали их для вас. Осталось только выбрать свой!"
      productIDs={[107, 108, 109, 6, 12, 110]}
    />
  );
}
