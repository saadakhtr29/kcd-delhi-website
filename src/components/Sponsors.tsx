import ImageBtn from "../components/ImageBtn";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative w-full py-24 bg-linear-to-b from-[#172B4C] to-[#9FBAC3] min-h-[60vh] flex flex-col items-center justify-center overflow-hidden gap-16"
    >
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />

      {/* Sponsors Box */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl">
        <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-20 text-center shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-12 tracking-tight">
            Sponsors
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-center">
              Platinum Sponsors
            </h3>

            <div className="flex justify-center">
              <div className="flex items-center justify-center bg-white/95 rounded-xl p-8 shadow-lg w-full max-w-md h-32">
                <ImageBtn
                  href="https://www.vcluster.com"
                  src="/vCluster_logo.svg"
                  alt="vCluster Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text">
              Gold Sponsors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center place-items-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center bg-white/95 rounded-xl p-8 shadow-lg w-full h-32">
                <ImageBtn
                  href="https://www.vultr.com/"
                  src="/vultr_logo.png"
                  alt="Vultr Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center bg-white/95 rounded-xl p-8 shadow-lg w-full h-32">
                <ImageBtn
                  href="https://www.elastic.co/"
                  src="/elastic-logo.png"
                  alt="Elastic Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-linear-to-r from-gray-400 to-gray-600 bg-clip-text">
              Silver Sponsors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
              <div className="flex items-center justify-center bg-[#1B2D4A] rounded-xl p-8 shadow-lg max-w-md w-full h-32">
                <ImageBtn
                  href="https://nudgebee.com/"
                  src="/nudgebee-logo.png"
                  alt="NudgeBee Logo"
                  width={280}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="flex items-center justify-center bg-[#1B2D4A] rounded-xl p-8 shadow-lg max-w-md w-full h-32">
                <ImageBtn
                  href="https://www.cleanstart.com/"
                  src="/cleanstart_logo.jpeg"
                  alt="CleanStart Logo"
                  width={220}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 place-items-center">
              <div className="flex items-center justify-center bg-[#1B2D4A] rounded-xl p-8 mt-10 shadow-lg max-w-md w-full h-32">
                <ImageBtn
                  href="https://kodekloud.com/"
                  src="/KodeKloud.svg"
                  alt="KodeKloud Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Startup Sponsor
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-linear-to-r from-green-400 to-emerald-600 bg-clip-text">
              Startup Sponsor
            </h3>
            <div className="grid grid-cols-1 gap-8 place-items-center">
              <div className="flex items-center justify-center bg-[#1F2937]/95 rounded-xl p-8 shadow-lg max-w-md w-full h-32">
                <ImageBtn
                  href="https://kodekloud.com/"
                  src="/KodeKloud.svg"
                  alt="KodeKloud Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div> */}

          {/* Diversity Sponsor */}
          <div className="mb-14">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-linear-to-r from-pink-400 to-purple-600 bg-clip-text">
              Diversity Sponsor
            </h3>
            <div className="grid grid-cols-1 gap-8 place-items-center">
              <div className="flex items-center justify-center bg-white/95 rounded-xl p-8 shadow-lg max-w-md w-full h-32">
                <ImageBtn
                  href="https://www.docker.com/"
                  src="/docker-logo.png"
                  alt="Docker Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Party Sponsor */}
          <div className="mb-14">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-linear-to-r from-orange-400 to-red-500 bg-clip-text">
              Party Sponsor
            </h3>
            <div className="grid grid-cols-1 gap-8 place-items-center">
              <div className="flex items-center justify-center bg-white/95 rounded-xl p-8 shadow-lg max-w-md w-full h-32">
                <ImageBtn
                  href="https://devtron.ai/"
                  src="/devtron-logo.png"
                  alt="Devtron Logo"
                  width={220}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Native Partners */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl">
        <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-20 text-center shadow-2xl">
          <h3 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-12 tracking-tight">
            Cloud Native Partners
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            <div className="flex items-center justify-center bg-[#232e3c] rounded-xl p-8 shadow-lg aspect-square w-32 md:w-40">
              <ImageBtn
                href="https://www.linkedin.com/company/cncggurugram/posts/?feedView=all"
                src="/cloud-native-partners/cncf_gurugram_logo.jpg"
                alt="CNCF Gurugram Partner Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>

            <div className="flex items-center justify-center bg-[#232e3c] rounded-xl p-8 shadow-lg aspect-square w-32 md:w-40">
              <ImageBtn
                href="https://www.linkedin.com/company/cloud-native-hooghly"
                src="/cloud-native-partners/cncf_hooghly_logo.jpg"
                alt="CNCF Hooghly Partner Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>

            <div className="flex items-center justify-center bg-[#232e3c] rounded-xl p-8 shadow-lg aspect-square w-32 md:w-40">
              <ImageBtn
                href="https://www.linkedin.com/company/cncg-lucknow/"
                src="/cloud-native-partners/cncf_lucknow_logo.jpg"
                alt="CNCF Lucknow Partner Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>

            <div className="flex items-center justify-center bg-[#232e3c] rounded-xl p-8 shadow-lg aspect-square w-32 md:w-40">
              <ImageBtn
                href="https://www.linkedin.com/company/cncg-pune/posts/?feedView=all"
                src="/cloud-native-partners/cncf_pune_logo.jpg"
                alt="CNCF Pune Partner Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>

            <div className="flex items-center justify-center bg-[#232e3c] rounded-xl p-8 shadow-lg aspect-square w-32 md:w-40">
              <ImageBtn
                href="https://www.linkedin.com/company/cncf-hyderabad/posts/?feedView=all"
                src="/cloud-native-partners/cncf_hyderabad_logo.jpg"
                alt="CNCF Hyderabad Partner Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>
            <div className="flex items-center justify-center bg-[#232e3c] rounded-xl p-8 shadow-lg aspect-square w-32 md:w-40">
              <ImageBtn
                href="https://www.linkedin.com/company/cncf-thane/?originalSubdomain=in"
                src="/cloud-native-partners/cncf-thane-logo.png"
                alt="CNCF Hyderabad Partner Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>

            <div className="flex items-ceter justify-center bg-[#232e3c] rounded-xl p-8 shadow-lg aspect-square w-32 md:w-40">
              <ImageBtn
                href="#"
                src="/cloud-native-partners/cloud_native_mumbai.jpeg"
                alt="CNCF Mumbai Partner Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>
            <div className="flex items-center justify-center bg-[#232e3c] rounded-xl p-8 shadow-lg aspect-square w-32 md:w-40">
              <ImageBtn
                href="https://www.linkedin.com/company/kcddelhi/"
                src="/cloud-native-partners/cncg-nd.jpeg"
                alt="CNCF New Delhi Partner Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>
            <div className="flex items-center justify-center bg-[#232e3c] rounded-xl p-8 shadow-lg aspect-square w-32 md:w-40">
              <ImageBtn
                href="https://www.linkedin.com/company/cloud-native-noida/"
                src="/cloud-native-partners/cncg-noida.webp"
                alt="CNCF Noida Partner Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>
            <div className="flex items-center justify-center bg-[#232e3c] rounded-xl p-8 shadow-lg aspect-square w-32 md:w-40">
              <ImageBtn
                href="https://www.linkedin.com/company/cncfchd/"
                src="/cloud-native-partners/cncg-chandigarh.jpg"
                alt="CNCF Chandigarh Partner Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>
            <div className="flex items-center justify-center bg-[#232e3c] rounded-xl p-8 shadow-lg aspect-square w-32 md:w-40">
              <ImageBtn
                href="https://www.linkedin.com/company/cncg-dehradun/"
                src="/cloud-native-partners/cncg-dehradun.jpeg"
                alt="CNCF Dehradun Partner Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Community Partners */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl">
        <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-20 text-center shadow-2xl">
          <h3 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-12 tracking-tight">
            Community Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            <div className="flex items-center justify-center bg-white/95 rounded-xl p-8 shadow-lg w-full max-w-md h-32">
              <ImageBtn
                href="https://kubesimplify.com/"
                src="/kubesimplify-logo.svg"
                alt="KubeSimplify Logo"
                width={220}
                height={50}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center bg-white/95 rounded-xl p-8 shadow-lg w-full max-w-md h-32">
              <ImageBtn
                href="https://www.wemakedevs.org/"
                src="/we-make-devs-logo.jpeg"
                alt="WeMakeDevs Logo"
                width={260}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* Grafana and Friends Delhi as Community Partner (no border) */}
            <div className="flex items-center justify-center bg-transparent shadow-none w-full max-w-md h-32">
              <ImageBtn
                href="#"
                src="/grafana-and-friends-delhi.avif"
                alt="Grafana and Friends Delhi Community Partner"
                width={220}
                height={80}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* GrowIn Community Partner (no rectangular border) */}
            <div className="flex items-center justify-center bg-transparent shadow-none w-full max-w-md h-32">
              <ImageBtn
                href="#"
                src="/growinn-community.png"
                alt="GrowIn Community Partner"
                width={120}
                height={120}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Media Partners */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl mt-16">
        <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-20 text-center shadow-2xl">
          <h3 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-12 tracking-tight">
            Media Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center justify-center bg-white/95 rounded-xl p-8 shadow-lg w-full max-w-md h-32">
              <ImageBtn
                href="https://kube.events/"
                src="/logo-light-bg@3x.png"
                alt="Kube Events Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
