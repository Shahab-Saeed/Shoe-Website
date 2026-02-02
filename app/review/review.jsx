import React from 'react'
import style from "./review.module.css"
const review = () => {
  return (
    <div className={style.review}>
      <div className={style.child1}>
        <div className={style.heading}>CUSTOMER'S <span>REVIEW</span></div>
      </div>
      <div className={style.child2}>
  <div className={style.reviewBox}>
    <div className={style.userInfo}>
      <img src="/Assets/image/girl_dp1.jpg" alt="user" />
      <div>
        <h4>Ahmed Khan</h4>
        <p className={style.stars}>⭐⭐⭐⭐⭐</p>
      </div>
    </div>
    <div className={style.reviewText}>
      <p>
        Amazing service! The quality exceeded my expectations and the delivery
        was super fast. Highly recommended.
      </p>
    </div>
  </div>

  <div className={style.reviewBox}>
    <div className={style.userInfo}>
      <img src="/Assets/image/man_dp1.jpg" alt="user" />
      <div>
        <h4>Sara Ali</h4>
        <p className={style.stars}>⭐⭐⭐⭐</p>
      </div>
    </div>
    <div className={style.reviewText}>
      <p>
        Very good experience overall. Customer support was responsive and helpful.
        Will definitely order again.
      </p>
    </div>
  </div>

  <div className={style.reviewBox}>
    <div className={style.userInfo}>
      <img src="/Assets/image/man_dp2.jpg" alt="user" />
      <div>
        <h4>Usman Raza</h4>
        <p className={style.stars}>⭐⭐⭐⭐⭐</p>
      </div>
    </div>
    <div className={style.reviewText}>
      <p>
        Excellent quality and smooth process from start to finish. Truly satisfied
        with the service.
      </p>
    </div>
  </div>
  <div className={style.reviewBox}>
    <div className={style.userInfo}>
      <img src="/Assets/image/gir_dp2.jpg" alt="user" />
      <div>
        <h4>Usman Raza</h4>
        <p className={style.stars}>⭐⭐⭐⭐⭐</p>
      </div>
    </div>
    <div className={style.reviewText}>
      <p>
        Excellent quality and smooth process from start to finish. Truly satisfied
        with the service.
      </p>
    </div>
  </div>

   <div className={style.reviewBox}>
    <div className={style.userInfo}>
      <img src="/Assets/image/gir_dp3.jpg" alt="user" />
      <div>
        <h4>Usman Raza</h4>
        <p className={style.stars}>⭐⭐⭐⭐⭐</p>
      </div>
    </div>
    <div className={style.reviewText}>
      <p>
        Excellent quality and smooth process from start to finish. Truly satisfied
        with the service.
      </p>
    </div>
  </div>

   <div className={style.reviewBox}>
    <div className={style.userInfo}>
      <img src="/Assets/image/man_dp3.jpg" alt="user" />
      <div>
        <h4>Usman Raza</h4>
        <p className={style.stars}>⭐⭐⭐⭐</p>
      </div>
    </div>
    <div className={style.reviewText}>
      <p>
        Excellent quality and smooth process from start to finish. Truly satisfied
        with the service.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default review
