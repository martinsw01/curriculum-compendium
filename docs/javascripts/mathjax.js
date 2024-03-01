window.MathJax = {
    loader: {
        load: ['[tex]/html']
    },
    tex: {
        packages: {
            '[+]': ['html', 'newcommand']
        },
        macros: { // custom commands
            Cfi: "{\\operatorname{C}}", // group of invertible fractional ideals
            Cl: "{\\operatorname{Cl}}", // ideal class group
            sgn: "{\\operatorname{sgn}}", // signum
            weakto: "{\\rightharpoonup}", // weak convergence
            weakstarto: "{\\overset{\\ast}{\\rightharpoonup}}", // weak* convergence
            properideal: "{\\ \\mathbin{\\rlap{\\lneq}\\hspace{-0.6ex}\\trianglelefteq}} \\ ",
            subsetsim: "{\\ \\mathbin{\\rlap{\\raise{0.3ex}{\\subset}}\\raise{-0.6ex}{\\hspace{0.3ex}\\scriptstyle\\sim}}} \\ ",
            supsetsim: "{\\ \\mathbin{\\rlap{\\raise{0.3ex}{\\supset}}\\raise{-0.6ex}{\\hspace{0.3ex}\\scriptstyle\\sim}}} \\ ",
            ideal: "{\\ \\trianglelefteq} \\ ",
            Ker: "{\\operatorname{Ker}}",
            coker: "{\\operatorname{coker}}", // co-kernel
            codim: "{\\operatorname{codim}}", // co-dimension
            Span: "{\\operatorname{Span}}",
            rank: "{\\operatorname{rank}}", // rank of a matrix
            Im: "{\\operatorname{Im}}",
            Range: "{\\operatorname{Range}}",
            clos: "{\\operatorname{clos}}", // closure
            card: "{\\operatorname{card}}", // cardinality
            oversethref: ["{\\overset{\\href{#1}{\\text{#2}}}{#3}}", 3], // overset with link
            implieshref: ["{\\oversethref{#1}{#2}{\\implies}}", 2], // overset \implies with a link
            iffhref: ["{\\oversethref{#1}{#2}{\\iff}}", 2], // overset \iff with a link
            eqhref: ["{\\oversethref{#1}{#2}{=}}", 2], // overset = with a link
            surjectiveto: "{\\to\\!\\!\\!\\!\\!\\to}", // surjective arrow
            Spec: ["{\\operatorname{Spec}\\left(#1\\right)}", 1], // Spectrum of a ring
            Specmax: ["{\\operatorname{Spec}_{max}\\left(#1\\right)}", 1], // Maximal spectrum of a ring
            Specrab: ["{\\operatorname{Spec}_{rab}\\left(#1\\right)}", 1], // Rabinowitsch spectrum of a ring
            ptspec: ["{\\operatorname{ptspec}\\left(#1\\right)}", 1], // Point-spectrum of a ring
            length: ["{\\operatorname{length}\\left(#1\\right)}", 1],
            gr: ["{\\operatorname{gr}\\left(#1\\right)}", 1], // associated graded ring
            ord: "{\\operatorname{ord}}", // order (of an element in a graded ring)
            trdeg: "{\\operatorname{trdeg}}", // transcendence degree
            Quot: "{\\operatorname{Quot}}", // Quotient a ring
            nil: "{\\operatorname{nil}}",
            Lip: "{\\operatorname{Lip}}",// Lipschitz constant
            diam: "{\\operatorname{diam}}",
            dist: "{\\operatorname{dist}}",
            graph: "{\\operatorname{graph}}",
            ht: "{\\operatorname{ht}}", // height of an ideal
            Ann: "{\\operatorname{Ann}}", // annihilator
            Supp: "{\\operatorname{Supp}}", // Support
            ind: "{\\operatorname{ind}\\ }", // Index
            d: "{\\operatorname{d}}", // differential
            N: "\\mathbb{N}", // Natural numbers
            Z: "\\mathbb{Z}", // Integers
            R: "\\mathbb{R}", // Reals
            C: "\\mathbb{C}", // Complex numbers
            Q: "\\mathbb{Q}", // Rational numbers
            K: "\\mathbb{K}", // Field
            I: "\\mathcal{I}", // Vanishing ideal
            V: "{\\mathcal{V}}", // Affine variety
            M: "{\\mathcal{M}}", // Fancy M
            m: "{\\mathfrak{m}}", // Fancy m (e.g. maximal ideal)
            n: "{\\mathfrak{n}}", // Fancy n (e.g. another maximal ideal)
            F: "{\\mathcal{F}}", // Fancy F
            G: "{\\mathfrak{G}}", // Fancy G
            A: "{\\mathfrak{A}}", // Fancy A
            a: "{\\mathfrak{a}}", // Fancy a
            H: "{\\mathcal H}", // Hausdorff measure
            S: "{\\Sigma}", // Capital sigma
            s: "{\\sigma}", // Lower case sigma
            Chi: "{\\mathcal{X}}", // Chi
            inner: ["{\\left\\langle #1, #2 \\right\\rangle}", 2], // Inner product
            toself: "{\\ \\mathbin{\\rlap{\\raise{0.2ex}{\\supset}}\\raise{1.13ex}{\\tiny\\blacktriangleleft}}} \\ ", // Arrow to self
            Hauseps: ["{\\H_\\varepsilon^{#1}}", 1], // Hausdorff measure approximation
            contradiction: "{\\ \\Rightarrow\\!\\Leftarrow}",
            tab: "{\\ \\ \\ \\ }",
            argmax: ["{\\underset{#1}{\\arg \\max}\\ }", 1],
            argmin: ["{\\underset{#1}{\\arg \\min}\\ }", 1]
        },
        environments: {
                rcases: ['\\left.\\begin{aligned}', '\\end{aligned}\\right\\rbrace', ''],
                cmatrix: ['\\left(\\begin{CD}', '\\end{CD}\\right)', ''],
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
