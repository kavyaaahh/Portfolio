import React from "react";

function Home() {
  return (
    <div id="home"className="bg-gradient-to-br from-zinc-950 ia-zinc-900 to-orange-950 text-white px-6 md:px-20 py-30 min-h-screen ">

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        <div className="max-w-2xl">

          <p className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-sm text-orange-300 mb-6 backdrop-blur-md">
            Available for learning & opportunities
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
            KAVYA S R
          </h1>

          <p className="text-xl text-gray-400 mb-10">
            Creative Mind • Tech Enthusiast • Frontend Learner
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl shadow-md hover:border-orange-500 transition">
              <b className="block text-lg mb-2 text-white">
                Student
              </b>
              <span className="text-gray-400 text-sm">
                Diploma in Computer Engineering
              </span>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl shadow-md hover:border-orange-500 transition">
              <b className="block text-lg mb-2 text-white">
                Based In
              </b>
              <span className="text-gray-400 text-sm">
                Kerala, India
              </span>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl shadow-md hover:border-orange-500 transition">
              <b className="block text-lg mb-2 text-white">
                Status
              </b>
              <span className="text-gray-400 text-sm">
                Learning & Building
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">

          {/* GLOW EFFECT */}
          <div className="absolute w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

          {/* PROFILE CIRCLE */}
          <div className="relative w-30 h-30 md:w-70 md:h-70 rounded-full border border-orange-500/30 bg-gradient-to-br from-zinc-900 to-orange-950 flex items-center justify-center shadow-2xl shadow-orange-500/20">

            <span className="text-6xl font-bold bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPEA8QDxAWFRUVEA8QEA8PDw8PFRUWFhUWFRUYHSghGBolHRUVITEiJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGxAQGi0iHyUrLS0tLSstLS0tLS0tLS8tLS0tKy0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIEBQYDB//EAEEQAAEDAgMFBQQHBgUFAAAAAAEAAgMEEQUSIQYxQVFhEyJxgZEyUqHBByNCcrHR8BQzYqKy4TRDc5LxFVNjgsL/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAKhEAAgIBBAEDAgcBAAAAAAAAAAECEQMEEiExQSIyURMzBUJhcYGR8LH/2gAMAwEAAhEDEQA/ANuAnAIBPAXmDuCARARsjZIBAIgJWTgEAIBGyICKYgWRSRQAEbJBCSQNBc42A3koAKa54G8geJAWD2j24yksgFx717X66arHz49USnV414NsPktC00mrfA4qz20HqEhqvGKaoed5cB4m3orATyM9l7mX9xzm39EfQXyTeJnrCVlkNndpHB4gqDmBsI5Tvvwa88eh9VsFTKDi+SDVdgsgQnJWURDLIEJ6FkAcyE1dbJhCBjCECE5AhIDmQmkLoQmkIAZZJOskmA4BOCACdZIApwCACcEwEAnBIIoEIIpIoAVkkUEAJYv6RcYMMYjDsua9+dv0VtF5x9IcjDO0HewXtycf7AK/Sx3ZURm6R5+Ynv7xDhfi5rbnyXSmicOvkfzKdV1JJ0Dj5E/BdKMSjUxyW5ljvyXTyEsTZa0cgaN1uliR6b/gm4jXjLpw63FxyPPomiqbbvC3nb/j4qoxQsOrSQefd/RVChbNDnSNDBVBxBAPCxseC2uCbWXcyGdoBPdZI29ieAI5ry/Dq2Rrb5SR1tf1Gh8wjJixce7cEeVv1+rKE8O7hkZNSR74ElGwqcSwxPBuC0G/W2qlWWBqikFkEUkgG2TSE9AoA5lNK6FNKBjCmkJ6aUkAyySNkUwHBEJBOCAEAnBIIoAKKARCQhBFJJMBJIqoxPFg0ljDqNHO5HkFKMXJ0hpWTqmsYzQm7vdG/wDssVV4ZE+R0kpdK9xJIuQwX4WH5qTLV34/mUzOteNfT6LFjXkZDTMZ7EbGD+FoB9V0LRvtc9Ux0iF7puTLFET3dBbqAR8VT4jRwPBD4WHq0ZHDzCtZCALlUOLVzh3WDXw1RFu+BtLyZ7EMJ7Lvwl0kfGN1y9np7QUJlc51o2NY08m52lWJrntJDyCOVxcegV5TvDckoY02sWkta4g+YWhypclKjftZ6bs9QmCmhidbOGNzgagPygEDwsrFZjBNq2yWZNZrjoH/AGSevJacFcyaafJW012IoFFIqAhqCKBQMaU0hPKBQBzIQKcU1AxqSdZBIBwTgmhPCkIQTghZOSASKQSQAQlZIJPcACToBv8ABAFPtJiogZkafrH7ubW8XfIefJYefEgOKjY9ixllfKTvPdHusG4elvO6g4VGXntn+yD3B7zhxPQfj4LoRx7Ik8ZfU7yBmd7R3DkPzQfVqtq622l1EFXbUlRaLy+ZNxKT60DiNOJ3D9frrnpMQ03rmyYv1J0/XqjaFl6arPuNh7x/WijzxtseA4nifE/Jcae7rAA+W/1WowTZ4ylrpR3RubuCEuQlKlyea4413dAYWNcfay2uBv1VlhTy5oZmI5Eb17JiOz0M8BicwWt3dB3TwsvK8Qwp9FMWn2b6HhZWzk6oqwuMm2iLL2sLgJBmadzrAX+S9C2IxjtmOhc7M5gBaTvLNxB8NPVUtMyOeLK8BwIsRyVZh5fh9ZESbxE2zHjG7Q38L/BVSSnGvJLJE9VSKSSxGcCBTkCkMamlPKaUANKYV0KYUDGpIpIAITwmhOCYghFBOCQCRCCcEAKyrNp6js6Sdw3luUeLyG/NWiy/0gzWp42e9JqObWtPzIVmJXNIizzSSPtXht7NGrzybw8z81MqqsMGVulhYAcANwUaSYRg29om5P8AF+QVTNMSV0JcsujwiRLVX6rg6cnw/FQaiqawXJ04Ab3f2UYYkN9j4AKaxMTyxXbLmM3OvorvDMMfKRcEBcNj+xqHZdQ8a5XbyOYK9MwzDmttoqpJ3RPeqsi4HgTW2NlsKOmDQudLCAoW0e0kNBGHSXc4+xGz2nW/AbtU4qjNknKTpF8sztXhLZmHTXgeRWYP0q6/4PT/AF9f6FKpvpKpJe7NHJDf7QtKweNrO9AVKXKFjjKDsyEFS6mlyO0F7W/Xr69FZ4q5s8VuO9p5FddsKBkrBUwOa9p1D2EFpt4cis1RVpygKlo6CqSPXtnqky0sEh3lgzfeAsfiCrFUGw0uajb0c8eHevb4q/WOS5MclTYimlFJRENQTimpDAU0pxTSgBqSKSBhTggEUxBRQRSAScEAnJiFdea/SJjAdM2Jp0iBBP8A5HWLh5AN+K2O1WNNo6dz7jtHXbE08XcyOQ3+g4rxGrqTI4kkk3Nydbk6klatPD8zHFWwTzZioxcXHKPMpsrZHCzGm24yHusB0v3jpfUaKZhtHmOVrtB7cg0ueTL/AIn0C2qFK2Esib2o6UuFxA5pXMLv43AWHIArQUNDRv7t4Hfw5mX9FEFVQ02juzzfd7R/zK7wbQYfMQxzYzyMkTQPIkaFRdvnkItR44NfguB08JDmRNa73rajwK1dIFhqGN8Iz0jjIzeaV7y5r27z2Tzq13IE2Og0WvwetZNG2Rhu08wQ4HiCDuI5KtryNu+C8jUavwyCf99EyTSwzAEgeK7MdoqDEcVlmlfTUjgwR6VNWRmETv8Atxjc6Tnwb4qS5KXafBPGF0UA/dU8Q5ubG34lVWI4ZhNQC1xpb+818bHDwIKoMWxHC6NxFQRUTXGYzn9pmJ5kO7rdOQCVJtfgk31b204G762maGHzLbKVfuO5LyiM/AJcPfeJ5qcPkOWZtw50BOgk00IGlyOG+9gRlK6mME80J4G4+6f73Xpk+zUbmdvhsxppLXYGPL6SUcGujNw0Hm23gV57tDWunna+SHsahjXxVMenttLS0gcd7um4jQpON8oux5adSNx9GVReCVnJ9wPFo/JbRYb6L4fqp3HcXNA8gtw1c/J7mLJ7mFBEoKsiAppTimpDAgUUEANSRskmAQiEAnBACRSCSAOFdI9kbnsaHOAuGnjbgsdU/SI1oIFP3xp3pCAD1GW/ktyFR4nsnSVDi90eVx3lvHyU4OK9yBV5PJMexqaskMkjrncABZrRyaOSrqamdIcreG88l6jjuyNLTUlVKxt3thlc0ng4RuIPqF5/suz6lzz9p59B+itiyJwbRfiUZSora5pjayF2ozvcx3iG5h/KD6p9bDO2KMQh3ftctve53XPDepmO02cwf6rQT0cQFq9lqfNCWkDtGFzHDdZwJ+H5K9TbgmzPPGlkklxZRO2ahoaN9ZO1tRPoGdp3oxK82Fm8QNTzOU7lhGDtp2sdLHGXvDTNMS2JhJtdxaDlaOg0XtuPYeayhkhjH1rS17YzYHtGH2DfcSC4A7tQd2q8Yq8PcHuBGQg95jwWOY7iCCLjzWmM15MTxtx9PZstha98M8tFI9kmQnI+N7ZIzlIByPGhabgjzV9ieK1NJUuipGhxqA2RrcuYtl7zXlgvYXyhxvpqSVRbD4A9mSoLS1pvkJFu0aR3nAe7fKAeOvJbDC6czYjI8atp4Gx3tp20ji82PRn4rNNre2vg1wTeNJvmyvk2kxilbmqYxkccokc2F7WuO7WM6HoVZ43V/wDTMJZlP1zg0ZibudUSjM95J3kd46+6Fa4/hpmpaiEC7nMJjB3GVvfZ/M1qptq6R2I4VSzwAyZQ2RzGjM51oyx4AG8gkm3QpRluXXkbjtl2ePUUYqZZC+pigysfKZah0n1j265WZQSXknTzXoH0d4dS4xFNS1cTTURNa+OpbZk74ibd5w9otNtTe+YX3a+eGgdfQtI4OvwXs30KYE+IS1r2ljHMEUJIsZGZg57/ALt2tAPHVa9y6RilCaTcyp2cwOvw3E20jZHvpX3fn1LTGN+YcHA2HLXyEf6R47Yk61hmijJ4C4uLnyt6L1x7hJIXj2QA1p94i5JHTUDyK86xeBtXi9RG3vNbA6MngJMgvbwLh5hZpS9TZoxxtKLNRsdhzIKZmSRz8wBfmDQ0P3HKBqNb8Sr4LIfR5UF8Tmk3LTY/h+IcteFz8y8l8o7ZUIpIoKgQE1OTSkMagnJpQALJJJJgEIoBOQAQkgEUAORQCKBFXtTCX0VUwb3RSAdS5jm/NeUbOwXo2Ee9J65v+F7ROzM0g7jofMWXnGxFGwPrsMl7rmSGWAjfYgMfbpYRH/2WjFL0NfyTxy2uyjlp8wHRzXf7HB3yV6/NTT/tDGl7HACojaLuIGgkaOJA0I4gacbz6nZudhNmdo3gWEfEHULlXRObZrwWusLg772V0MiSoulFZGjQYfUQTtEkbmSDg5pBLenMKTLRxPIc6Nr3Dc5wDnDwJ3LDjCmvdnGZjzvfG98TyepaRfzupxwUlpMtRVPZxaaiYC3WxCf1I/LFLA/0ZMxzFGteKenaKisd7MTTcR/xzO+wwddTpzVvs7hjaOJsJf2kziZJ5TYGSZ+rnH8B0AXDAaSCBloI2MB1JaBdx5k7yepSmjmEmZoDgTrrqAlLJS4IxxXKm6NE+mzDrwKykNQcLmkbM0ihlcXh4F20kzvavyjcdeh05X0FN25y5coH2s193RWs0LXtyvAcLa3F7qcHfJnyenh8lOcKopiJxT00pOol7OJ5J55ralTXa77nobkDwBWZn2Yp2vcad81OeIglfGy+/wBkd34Jrtms+ktTVyt4tdO8NPjltdPevkmsXngm4tjxDjTUmWerO4A3jpwf8yZw0aBy3m1lGwnBmUskbQS92U9pKfallecz3nxsPIBWWHUEUDckUbY23vZoDbnmeZ6ldTBI6UOLbNB3ki1vVRlNVQ1Ha7bMxsM7LU1bBuEjx/te5bcLBbA/WVFTKNxeSD4l5P8AUFvllyy5oMvuEgigqSIECiUCkAwpFEoIGBJJJACCcmhOTAQRSCSQDgigEUxCXnm2TTR4hTVrOPtD3g3uvHm11vRehrzra+qbiNXT0dMe1DC7tZG6sFyM2o4AA68yArMV2SgrZ6I1wIBG46jwKpdpcPMjRK0d5vtDm3+yuWNsAOQA9E5RTpii3F2jB0jrFaClkaW2XLGMFIJlhHVzBw6j8lV09SRoVbGRrtZFaOlRSSRuLoH5ObCM0Z8Bw8lIp8XqG6PgDurHN/8AohOZJmU6mYpfsS3qqmrHwYxO7RtOR1c5gHwdf4KdDHPJ+9eGN9yO4v4uOvoAnQMspN7K1X5MeSUfypIEsbQAAAAN1lEkNl0nmso8URebnRvxKUpJBBUrZ0p25jfgPiVE2oxDsKWVwPecCxnPO7S/lvVoABoNAsnj7TUVjIPsstpwL3byfKyovdLkF6pHfYTDuxp7kau1PibE/ANWmTIIgxoY3cB+inquTt2Rk7diQRQKiICBRTSkMBQRKaUDFZFNRTAQRQCKACEUgkkA4JJBJMRjMRinxSd8DZHQ0MZyyFmjqh3EX5dOW/eLaXCMHp6VmSCJrBxI1c7xO8puA0wjhy21zOzeIJHyVipyk+l0NvwJJJJQEJQK/CY5bm2R/vN4nqOKnpOcBqSAOuiaBNrlGKc4xPLHGxBtr06q4oakcVTbTOBmcQQRpqNQdAqeGZ4Pdc5vgSAtDVdGuHrjyejxzt5rlLXNvlaczjpYLJUolf7T3kcsxstFhNLlIKkm6KpwjHksmUw3u7x+A8l3skldZm7KLbAsltLDLTztrY2GSPTtWgXLS3c63Ec1rUkRdDjKnZAwjF4qpmeJwPvN+0w9Qp6y2O4KYXftlJ9XK03kY3RkjSdbt/XzWgw2sE8UczdA4XtyO4jyIIQ0u0NryuiSmlFJRIgTU4ppSJATSiUCgAJIIoAITk0IhMBySCKQBCKARQIDGWv1N/XenJJJgJJJNkeGgk6Ab0Aca2Qhpy6OO48l5/tHSysvI8ueDvcbuynqeCuqnHZDVMjIDYXB2XTUyCxFz4B2it6eqa7RwBvv4hdTTxj9NfJRNzhMxkXejiG+zG38bC6nUdDdapmBUrtWsDPuEtHk3cPRTafAIxue/wA8p+SJYZNl0dVCKoqaGjA4KztkaTy/NWcOENH2j8FIGFRkWddw4gmwPomsEiuepgyBh47YkAWt9obr9UJYy0lp3hXsbGMFmgNA4DRUNRVB8snQ28bafJU6vHCEU/JVhnKcnXQAkkksJpI1fJZjhYuJBAaN5JXLBaMwQRxHeASfEkn5qcki+KHfFAKCKCQAKBRKaUhgQKN00oACKCSBhCcmBOCYgohBJIBycmohABRXKaZrBdxt+JVbPix+wAOp1KTko9ko45S6LdVOK1NzkG4b+pVXWV0pB+scPA5fwQp5czGOJ3gX+9uPxupY5xdv4LfoOLVnGopGyCxuOLXD2muG4hGlL2ENk8nj2Xfkeip8S2j7xipWCV+4yOv2TT0t7R8LDqo8FRiTTnfI2SM72iOMBo6i17dbpYsuTE+Wqfh9/wAF88CyI9DoTeyuIGnmqLCqd7o2PAtcXtyVxCyQLtYp7oqXycTLGpNFgwHmuoBURj5OSg4riL42OI3208eCslNRVsqjBydInV9Y2Mam7uDeZWfgaRck3JJcT/E4lx+JWUxisrmv7SJweN5zAG/RTtnNp2VJMT29lON8ZPtDm0rzmq1M9RUo+1f3/J2I6R4Y33ZrI3XTlCMhGoSbWHiLqEdTDqRU8b8E1Bco6hp6eK63V8ZKStMjVASSQKkACgkgkMBQKKaUDEkmpJWA4IhNCN1IQ5FAIhIArnUThjcx8hzK6LPYzW3dYHRug8eKlGNjSt0Nqasvdcn+y5XUATX9fguzZVzdRNuR08cKQag6KjnZK8GLMRHru00JuR4alXTn3XPRGKbiWNECkoWsGgVtSvDLucbMaC554BoFyo5KZVRl8bIR/nTRxkc2XzPHm1rh5qe3fJJ+SE51Fs9AwKU/s8JMUjQ5gcAWgkBwvYhpNiL2Vq2dnJw8WPHyT4GWAHIWXcBesxQ2xUV4PLZJ7m2RzOzr/td+SyW2VSezcGh3jaxWzcFl9q6QujdYcEssd0WmSwy2yTIMOV7GkWLSBbwss/jey4kIlhPZzNN2vGhBUzZepzRZDvbp5K8Xi5bsGVpPlHdjkceirwSonczJUMs9v2wdH9VYFq6WQVE5bnZFu3wMAUmGTgVxASDtVLHOUHaItWTroLnC++ieV2Yy3K0U1QigUkCpCAgUU0oGBJK6SVAIJwTQiFIQ4IpoTkgI2JVPZxudx3DxKxlRLcq92on1YzoXHzNh+BWaBuU8ktuM06eNsPaWTmTrhVOsFGpZLlYow3I2t0XAenXXCMrqFBqgBdTsLZmraJlrgdrKfEZGN/qcoYCs9mBmxDoyFg83GQn8ArtKt2Zf79CnUusTPSI10C5RldQvWo8uwqNWU4e0hSUihiTo8sp4f2etli3A6t87rQAqFtzB2VVTzjQOuxx/mClxuuAV5H8Vx7M9/J3cMt2JM6JJJLlEwOcuBk1T5nWUMv1TZZGNljDJqpV1WMep8LrgLoaTJacSrJGuR6BRumlbioSaUboFAASSSQAgnBJJMQQikkkwMvtR+9H3G/i5UcO8pJJZ/to2ac5VvFQaL2kklVi6NEy5jXZqSSon2NdHRis9j/8AHVH3Y/6HJJK3Rfe/r/qM+r+0/wDeD0ONdQkkvVo80wopJJiMR9Jv7um/1h/S5c6P2G+ASSXmPxv3xOzo/skgIpJLhmgj1O5Q270ElKZfDokRqwptySS06T3lWXo7IJJLqGYakUkkANSSSQB//9k=" 
              className="w-70 h-70 rounded-full object-cover  border-4 border-orange-400" ></img>
            </span>

          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;