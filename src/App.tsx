import React, { useState } from "react";
import "./App.css";

function App() {
  const bandage: number[] = [5, 1, 5]; // 시전 시간, 초당 회복량, 추가 회복량
  const initialHealth: number = 30; // 캐릭터의 체력통
  const attacks: number[][] = [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ]; // 몬스터 공격 패턴

  const combatWithMonster = () => {
    const [healingTime, healingPerSecond, additionalHealing] = bandage;
    const [firstAttack, secondAttack, thirdAttack, fourthAttack] = attacks;
    let currentHealth = initialHealth;
    let status: string = "none"; // 현재 붕대를 감고 있는지 아닌지 확인
    let healingDoneTime = -1; // 붕대 감기 완료시간 추적

    for (let i = 0; i <= fourthAttack[0]; i++) {
      // 공격 적용
      if (i === firstAttack[0]) {
        currentHealth -= firstAttack[1];
        status = "none"; // 공격 받으면 붕대 상태 초기화
      } else if (i === secondAttack[0]) {
        currentHealth -= secondAttack[1];
        status = "none";
      } else if (i === thirdAttack[0]) {
        currentHealth -= thirdAttack[1];
        status = "none";
      } else if (i === fourthAttack[0]) {
        currentHealth -= fourthAttack[1];
        status = "none";
      }

      // 체력 회복 적용
      if (status === "heal") {
        currentHealth += healingPerSecond;
        if (i === healingDoneTime) {
          currentHealth += additionalHealing;
          status = "none"; // 추가 회복 완료 후 상태 초기화
        }
      }

      // 붕대 사용 시작
      if (status === "none" && currentHealth < initialHealth) {
        status = "heal";
        healingDoneTime = i + healingTime;
      }

      // 최대 체력 초과 불가
      if (currentHealth > initialHealth) {
        currentHealth = initialHealth;
      }

      // 체력이 0 이하가 되면 전투 중단
      if (currentHealth <= 0) {
        return 0;
      }
    }

    return currentHealth;
  };

  const [currentHealth, setCurrentHealth] = useState<number>(initialHealth);

  const handleCombat = () => {
    const finalHealth = combatWithMonster();
    setCurrentHealth(finalHealth);
  };

  return (
    <div>
      <div>현재 체력: {currentHealth}</div>
      <button onClick={handleCombat}>전투 시작</button>
    </div>
  );
}

export default App;
