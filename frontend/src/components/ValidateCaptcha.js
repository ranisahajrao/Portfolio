import { useState } from 'react';

export function ValidateCaptcha({ onVerify }) {
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  function validateCaptcha(e) {
    const value = e.target.value;
    setCaptchaAnswer(value);
    if (parseInt(value) === 4) {
      onVerify(true);
    } else {
      onVerify(false);
    }
  }

  return (
    <div className="captcha-box">
      <label>What is 2 + 2?</label>
      <input
        type="text"
        value={captchaAnswer}
        onChange={validateCaptcha}
        required
      />
    </div>
  );
}
