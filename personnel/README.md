# 인력 현황 관리대장 (Personnel Status Ledger)

Factory 1/2 (SungJu Vina) 인력 현황 및 생산 현황 원본 자료.

## 폴더 구조

```
personnel/
  data/
    2026Factory_1_2_Manpower.xlsx      # 라인/부서별 일일 출근 및 인력 명단 (66개 시트)
    2026Factory_1_2_prod_status.xlsx   # 생산 현황
  reports/
    Factory_1_2_baocaonhansu.html          # 인력 보고서
    Factory_1_2_baocaophanbonhansu.html    # 인력 배치 보고서
```

## 개인정보 처리 안내

- 원본에 있던 시민 신분증(CCCD) 번호는 제거된 버전입니다.
- 성명, 사번, 입사일, 부서/직급 정보는 포함되어 있습니다.
- 이 저장소는 Public 상태이므로, 추가 데이터 업로드 시에도 신분증번호 등
  민감정보는 포함하지 않도록 주의하세요.

## 다음 단계

- `data/2026Factory_1_2_Manpower.xlsx`의 시트 구조(라인/부서별)를 기반으로
  인력 현황을 조회/검색할 수 있는 웹 화면 설계
- 어떤 항목을 관리대장 화면에 보여줄지(부서, 직급, 재직상태 등) 정의
