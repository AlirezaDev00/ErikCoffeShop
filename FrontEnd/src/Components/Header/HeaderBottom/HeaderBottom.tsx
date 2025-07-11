interface imgArrType {
  id: string;
  index: number;
}

const createImgArr = (count: number): imgArrType[] =>
  Array.from({ length: count }, (_, index) => ({
    id: crypto.randomUUID(),
    index,
  }));

const HeaderBottom = () => {
  const imgArr: imgArrType[] = createImgArr(20);

  const duplicate_arr: imgArrType[] = createImgArr(20);

  const doubleArr: imgArrType[] = [...imgArr, ...duplicate_arr];

  return (
    <div className="flex items-center p-4 bg-secondary w-fit gap-24  h-16 move    max-[630px]:h-8">
      {doubleArr.map((item: imgArrType) => (
        <img key={item.id} src="/images/image 6.svg" alt="تبلیغ" />
      ))}
    </div>
  );
};

export default HeaderBottom;
