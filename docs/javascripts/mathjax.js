window.MathJax = {
    loader: {
        load: ['[tex]/html']
    },
    tex: {
        packages: {
            '[+]': ['html', 'newcommand']
        },
        macros: { // custom commands
            properideal: "{\\ \\mathbin{\\rlap{\\lneq}\\hspace{-0.6ex}\\trianglelefteq}} \\ ",
            ideal: "{\\ \\trianglelefteq} \\ ",
            Ker: "{\\operatorname{Ker}}",
            Im: "{\\operatorname{Im}}",
            oversethref: ["{\\overset{\\href{#1}{\\text{#2}}}{#3}}", 3], // overset with link
            implieshref: ["{\\oversethref{#1}{#2}{\\implies}}", 2], // overset \implies with a link
            eqhref: ["{\\oversethref{#1}{#2}{=}}", 2], // overset = with a link
            Spec: ["{\\operatorname{Spec}\\left(#1\\right)}", 1], // Spectrum of a ring
            Specmax: ["{\\operatorname{Spec}_{max}\\left(#1\\right)}", 1], // Maximal spectrum of a ring
            Specrab: ["{\\operatorname{Spec}_{rab}\\left(#1\\right)}", 1], // Rabinowitsch spectrum of a ring
            nil: "{\\operatorname{nil}}",
            Lip: "{\\operatorname{Lip}}",// Lipschitz constant
            diam: "{\\operatorname{diam}}",// Lipschitz constant
            N: "\\mathbb{N}", // Natural numbers
            Z: "\\mathbb{Z}", // Integers
            R: "\\mathbb{R}", // Reals
            C: "\\mathbb{C}", // Complex numbers
            I: "\\mathcal{I}", // Vanishing ideal
            V: "{\\mathcal{V}}", // Affine variety
            M: "{\\mathcal{M}}", // Fancy M
            F: "{\\mathcal{F}}", // Fancy F
            a: "{\\mathfrak{a}}", // Fancy a
            H: "{\\mathcal H}", // Hausdorff measure
            Hauseps: ["{\\H_\\varepsilon^{#1}}", 1], // Hausdorff measure approximation
            contradiction: "{\\ \\Rightarrow\\!\\Leftarrow}",
            tab: "{\\ \\ \\ \\ }"
        },
        environments: {
                rcases: ['\\left.\\begin{aligned}', '\\end{aligned}\\right\\rbrace', ''],
        },
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
