import "./process.css";

export function Process() {
  return (
    <>
      <div class="process bg-slate-200 flex flex-col justify-center items-center min-h-[100vh] w-[99vw] z-10 relative">
        <div class="process-gradient absolute w-[100%] h-[100%] -z-50 top-0 left-0"></div>
        <h1 class="process-hero text-center font-bold mb-2.5">Our Process</h1>
        <p class="process-subhero text-center text-[#99e1d9] py-2.5 text-lg px-5 mx-auto bg-[#202c39]">
          At Nexora Group, we follow a structured process to ensure the successful
          delivery of high-quality applications that meet our clients' needs.
        </p>
        <div class="process-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          <div class="process-box">
            <div class="imgbox">
              <img src="../01.webp" alt="client meeting" />
              <div class="ontext">
                <div>
                  <h1>001</h1>
                </div>
              </div>
            </div>
            <div class="process-content">
              <div>
                <h2>1. Client Meeting</h2>
                <p>
                  When clients approach us, we take time to understand their
                  business model, goals, and application needs. By studying
                  their industry, competitors, challenges, and market scope, we
                  tailor our application development services to perfectly align
                  with their objectives.
                </p>
              </div>
            </div>
          </div>
          <div class="process-box">
            <div class="imgbox">
              <img src="../02.jpg" alt="process-content" />
              <div class="ontext">
                <div>
                  <h1>002</h1>
                </div>
              </div>
            </div>
            <div class="process-content">
              <div>
                <h2>2. Strategy and Prototypes</h2>
                <p>
                  After taking on a project, we handle it fully—our developers
                  choose the best tools, create a detailed prototype, and begin
                  development once the client approves it.
                </p>
              </div>
            </div>
          </div>
          <div class="process-box">
            <div class="imgbox">
              <img src="../03.jpg" alt="development and design" />
              <div class="ontext">
                <div>
                  <h1>003</h1>
                </div>
              </div>
            </div>
            <div class="process-content">
              <div>
                <h2>3. Development and Designing</h2>
                <p>
                  Our testers thoroughly check the application’s performance and
                  functionality to ensure it’s error-free. Once it meets all
                  standards, it’s ready for delivery.
                </p>
              </div>
            </div>
          </div>
          <div class="process-box">
            <div class="imgbox">
              <img src="../04.webp" alt="track and maintanance" />
              <div class="ontext">
                <div>
                  <h1>004</h1>
                </div>
              </div>
            </div>
            <div class="process-content">
              <div>
                <h2>4. Track and Maintenance</h2>
                <p>
                  Our services go beyond delivery — we provide post-delivery
                  maintenance and support, monitoring the application’s
                  performance and offering ongoing improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
