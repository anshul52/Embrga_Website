import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer class="bg-white dark:bg-[#01121A]">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <div
              class="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              {/* <img
                src="https://Embrga.com/docs/images/logo.svg"
                class="h-8 me-3"
              /> */}
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Embrga
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact Us
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://embrga@gmail.com/" class="hover:underline">
                    embrga@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    #
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Join Us
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                {/* <li class="mb-4">
                  <a
                    href="https://www.instagram.com/embrga/"
                    class="hover:underline "
                  >
                    Instagram
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://chat.whatsapp.com/L3LcRmeb1c66jxNWXNfg9y"
                    class="hover:underline"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://Embrga.com/" class="hover:underline">
              Embrga™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
