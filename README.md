# shop-commerce-service

상품/주문/결제 백엔드 서비스 (NestJS)

## Links

- [shop-web](https://github.com/Choi-Seunghwan/shop-web) - 클라이언트
- [shop-account-service](https://github.com/Choi-Seunghwan/shop-account-service) - 회원 서비스
- [msa-common-packages](https://github.com/Choi-Seunghwan/msa-common-packages) - 공통 패키지

## Tech Stack

- NestJS
- Prisma (PostgreSQL)
- PortOne Payment (토스페이먼츠)
- TCP Microservices

## Modules

- **Product** - 상품 관리
- **Order** - 주문 관리
- **Payment** - 결제/환불
- **Cart** - 장바구니
- **Database** - Prisma 연동

## 로컬 개발 설정

```bash
# 패키지 설치
pnpm install

# Prisma 클라이언트 생성
npx prisma generate

# DB 마이그레이션 + 샘플 데이터
pnpm db:setup

# 개발 서버 실행
pnpm start:dev
```

## 명령어

```bash
pnpm seed        # 샘플 상품 10개 삽입
pnpm db:setup    # 마이그레이션 + 시딩
pnpm db:reset    # DB 완전 초기화 (데이터 삭제)
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /product | 상품 목록 |
| GET | /product/:id | 상품 상세 |
| GET | /cart | 장바구니 조회 |
| POST | /cart | 장바구니 추가 |
| POST | /order | 주문 생성 |
| GET | /order | 주문 목록 |
| POST | /payment/complete | 결제 완료 처리 |
