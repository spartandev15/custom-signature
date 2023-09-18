<template>
  <div>
    <section>
      <table cellpadding="0" cellspacing="0" border="0" align="center" :style="{ background: emailBackground }">
        <tbody>
          <tr>
            <td :style="{ maxWidth: '700px' }">
              <table cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                <tbody>
                  <tr>
                    <td
                      :style="{
                        padding: '20px',
                        height: '60px',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        borderBottom: '1px solid #f4f4f4',
                      }"
                    >
                      <img src="https://uploads-ssl.webflow.com/62e9199d4976608473849e5a/62ea368144e58a2a06fbe5a6_logo.svg" width="200" />
                    </td>
                  </tr>
                </tbody>
              </table>
 
              <table cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                <tbody>
                  <tr>
                    <td :style="{ padding: '20px' }">
                      <h2 :style="{ textAlign: 'center', fontSize: '26px', fontWeight: 600, color: '#134d75'}" >Join Now!</h2>
                      <h5 :style="{ textAlign: 'center', fontSize: '20px', fontWeight: 600, margin: 0, color: '#134d75' }">Become a member today.</h5>
                      <br/>
                      <p>We invite you to join our community and enjoy exclusive benefits.</p>
                      <p :style="{ lineHeight: '2rem' }">If you have any questions or need assistance, please don't hesitate to reach out to our support team. We're here to help.</p>
                      <p>Click the button below to join:</p>
                      <a href="#" style="text-decoration: none;">
                        <br/>
                        <button class="btn btn-primary" :style="{ backgroundColor: '#134d75', color: '#fff', border: 'none', padding: '7px 12px',marginTop:20 }" >Join Now</button>
                      </a>
                      <br/>
                      <p> Thank You </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                <tbody>
                  <tr>
                    <td
                      :style="{
                        padding: '10px',
                        height: '60px',
                        textAlign: 'center',
                        background: '#f6821e',
                        lineHeight: '2rem',
                      }"
                    >
                      <span :style="{ fontSize: '15px' }">© COPYRIGHT 2023 <a href="#" style="color: rgb(19, 77, 117); text-decoration: none; font-weight: 600;">{{ companyName }}</a> All Rights Reserved.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailBackground: '#f1f1f1',
      companyName: 'weweb',
    };
  },
};
</script>

<style scoped>

.joinnow{
margin-top: 20px;
margin-bottom: 20px;
}
</style>