import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: '브라운 레더 숄더백',
    price: 189000,
    images: ['/assets/items/product1.png'],
    description:
      '고급 소가죽으로 제작된 클래식한 디자인의 숄더백입니다. 넉넉한 수납공간과 조절 가능한 스트랩으로 실용성을 더했습니다.',
  },
  {
    name: '골드 하트 목걸이',
    price: 89000,
    images: ['/assets/items/0008dcc8-7964-4ca7-8a9a-aab68a4aef2c.png'],
    description:
      '14K 금도금 하트 펜던트 목걸이입니다. 미니멀하면서도 사랑스러운 디자인으로 데일리 착용에 적합합니다.',
  },
  {
    name: '와이드 데님 팬츠',
    price: 79000,
    images: ['/assets/items/086c7bd3-acf0-497f-a7dd-a06af312c0d1.png'],
    description:
      '편안한 핏의 와이드 데님 팬츠입니다. 하이웨스트 디자인으로 다리가 길어보이는 효과가 있습니다.',
  },
  {
    name: '크림 베이직 티셔츠',
    price: 39000,
    images: ['/assets/items/35510c29-e385-4758-ad99-1c1deb8a5a5b.png'],
    description:
      '부드러운 코튼 소재의 베이직 티셔츠입니다. 다양한 스타일링에 활용 가능한 필수 아이템입니다.',
  },
  {
    name: '블랙 테일러드 재킷',
    price: 259000,
    images: ['/assets/items/4721d07e-9c94-4765-9487-48737f0b65a6.png'],
    description:
      '세련된 핏의 테일러드 재킷입니다. 오피스룩부터 캐주얼까지 다양하게 연출 가능합니다.',
  },
  {
    name: '진주 드롭 귀걸이',
    price: 59000,
    images: ['/assets/items/730e3a99-aec8-47c2-963c-2aef7e33e9c3.png'],
    description:
      '우아한 담수진주 드롭 귀걸이입니다. 페미닌한 무드를 연출하기 좋은 아이템입니다.',
  },
  {
    name: '실버 트위스트 링',
    price: 49000,
    images: ['/assets/items/7f8331d8-3c62-486b-bdfb-f61665f2000f.png'],
    description:
      '925 실버 소재의 트위스트 링입니다. 심플하면서도 세련된 디자인이 특징입니다.',
  },
  {
    name: '베이지 니트 가디건',
    price: 119000,
    images: ['/assets/items/ab7f0a3a-2f8c-4e6d-941a-fe2ffbef5a9c.png'],
    description:
      '부드러운 캐시미어 블렌드 니트 가디건입니다. 따뜻하면서도 가벼워 간절기에 활용하기 좋습니다.',
  },
  {
    name: '크리스탈 테니스 팔찌',
    price: 129000,
    images: ['/assets/items/d54e9f9c-56fe-40df-aeb7-80c63217ab11.png'],
    description:
      '스와로브스키 크리스탈이 세팅된 테니스 팔찌입니다. 화려하면서도 우아한 느낌을 줍니다.',
  },
  {
    name: '체크 더블 코트',
    price: 329000,
    images: ['/assets/items/ddddf377-0c04-448f-a276-87ef748046c9.png'],
    description:
      '클래식한 체크 패턴의 더블 브레스트 코트입니다. 고급 울 혼방 소재로 보온성이 뛰어납니다.',
  },
];

async function main() {
  console.log('🌱 Seeding database...');

  // 기존 데이터 삭제
  await prisma.product.deleteMany();
  console.log('🗑️  Cleared existing products');

  // 상품 데이터 삽입
  await prisma.product.createMany({
    data: products,
  });
  console.log(`✅ Inserted ${products.length} products`);
}

main()
  .catch((e) => {
    console.error('❌ Error inserting seed data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
