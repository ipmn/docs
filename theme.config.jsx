import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  logo: (
    <>
      <svg
        width="32"
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        viewBox="0 0 512 512"
      >
        <defs></defs>
        <circle cx="155.5" cy="114.6" r="72.4" fill="#3c82f5">
          <animate
            attributeName="fill"
            dur="2s"
            values="#3c82f5;#0fb982;#3c82f5"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="r"
            begin="0.1s"
            dur="2s"
            repeatCount="indefinite"
            values="5%;10%;5%"
          ></animate>
        </circle>
        <circle cx="265.6" cy="425.5" r="72.4" fill="#3c82f5">
          <animate
            attributeName="fill"
            dur="2s"
            values="#3c82f5;#8c5af5;#3c82f5"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="r"
            begin="0.25s"
            dur="2s"
            repeatCount="indefinite"
            values="5%;10%;5%"
          ></animate>
        </circle>
        <circle cx="421.3" cy="330" r="72.4" fill="#3c82f5">
          <animate
            attributeName="fill"
            dur="2s"
            values="#3c82f5;#eb4687;#3c82f5"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="r"
            begin="0.5s"
            dur="2s"
            repeatCount="indefinite"
            values="5%;10%;5%"
          ></animate>
        </circle>
        <circle
          cx="443.6"
          cy="177.7"
          r="59.4"
          fill="#0fb982"
          id="logo-circle-green-1"
        ></circle>
        <circle
          cx="137.9"
          cy="267.3"
          r="59.4"
          fill="#0fb982"
          id="logo-circle-green-2"
        ></circle>
        <circle
          cx="127.9"
          cy="393.1"
          r="44.6"
          fill="#8c5af5"
          id="logo-circle-purple-1"
        ></circle>
        <circle
          cx="278.2"
          cy="274.9"
          r="44.6"
          fill="#8c5af5"
          id="logo-circle-purple-2"
        ></circle>
        <circle
          cx="328.8"
          cy="103.4"
          r="39.6"
          fill="#8c5af5"
          id="logo-circle-purple-3"
        ></circle>
        <circle
          cx="48.6"
          cy="183.9"
          r="39.6"
          fill="#8c5af5"
          id="logo-circle-purple-4"
        ></circle>
        <circle
          cx="251.6"
          cy="41.4"
          r="29.7"
          fill="#eb4687"
          id="logo-circle-magenta-1"
        ></circle>
        <circle
          cx="424.3"
          cy="71.8"
          r="29.7"
          fill="#eb4687"
          id="logo-circle-magenta-2"
        ></circle>
        <circle
          cx="304.6"
          cy="187.5"
          r="29.7"
          fill="#eb4687"
          id="logo-circle-magenta-2"
        ></circle>
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>IPMN</span>
    </>
  ),
  docsRepositoryBase: "https://github.com/ipmn/docs",
  // project: {
  //   link: "https://github.com/ipmn/docs",
  // },
  // chat: {
  //   link: "https://twitter.com/ipmnio",
  // },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – IPMN",
      };
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`https://docs.ipmn.io${asPath}`} />
        <meta property="og:title" content={frontMatter.title || "IPMN"} />
        <meta
          property="og:description"
          content={frontMatter.description || "IPMN"}
        />
      </>
    );
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://ipmn.io" target="_blank">
          IPMN
        </a>
      </span>
    ),
  },
};
