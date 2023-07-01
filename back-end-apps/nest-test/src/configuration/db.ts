export const db = () => ({
  /**
   * 데이터베이스 이름 입니다
   * DB_DATABASE: for Build Time Env
   */
  dbDatabase: process.env.DB_DATABASE ?? 'main',

  /**
   * 마이그레이션 없이 바로 entities 와 데이터베이스 구조를 같게 만듭니다 (개발 환경에서만 참입니다)
   */
  dbSynchronize:
    process.env.DB_SYNCHRONIZE ?? process.env.NODE_ENV === 'development',
})

export type DBConnection = ReturnType<typeof db>
