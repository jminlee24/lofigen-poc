!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Tone = e())
    : (t.Tone = e());
})("undefined" != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(s) {
      if (e[s]) return e[s].exports;
      var i = (e[s] = {
        i: s,
        l: !1,
        exports: {},
      });
      return t[s].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, s) {
        n.o(t, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: s,
          });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(t, "__esModule", {
            value: !0,
          });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (
          (n.r(s),
          Object.defineProperty(s, "default", {
            enumerable: !0,
            value: t,
          }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            n.d(
              s,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return s;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 684))
    );
  })([
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "d", function () {
          return r;
        }),
        n.d(e, "e", function () {
          return a;
        }),
        n.d(e, "f", function () {
          return c;
        }),
        n.d(e, "g", function () {
          return u;
        }),
        n.d(e, "i", function () {
          return h;
        }),
        n.d(e, "h", function () {
          return l;
        }),
        n.d(e, "j", function () {
          return d;
        }),
        n.d(e, "k", function () {
          return p;
        });
      const s = new WeakSet(),
        i = new WeakMap(),
        o = new WeakMap(),
        r = new WeakMap(),
        a = new WeakMap(),
        c = new WeakMap(),
        u = new WeakMap(),
        h = new WeakMap(),
        l = new WeakMap(),
        d = new WeakMap(),
        p = new WeakMap();
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(4);
      const i = (t, e) => {
        Object(s.a)(t, e, "channelCount"),
          Object(s.a)(t, e, "channelCountMode"),
          Object(s.a)(t, e, "channelInterpretation");
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "b", function () {
          return i;
        });
      const s = -34028234663852886e22,
        i = -s;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => t.context === e;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n) => {
        const s = e[n];
        void 0 !== s && s !== t[n] && (t[n] = s);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n) => {
        const s = e[n];
        void 0 !== s && s !== t[n].value && (t[n].value = s);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(0),
        i = n(9);
      const o = (t) => Object(i.a)(s.c, t);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = () => {
        try {
          return new DOMException("", "InvalidStateError");
        } catch (t) {
          return (t.code = 11), (t.name = "InvalidStateError"), t;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(0),
        i = n(9);
      const o = (t) => Object(i.a)(s.b, t);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => {
        const n = t.get(e);
        if (void 0 === n)
          throw new Error("A value with the given key could not be found.");
        return n;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = () => {
        try {
          return new DOMException("", "NotSupportedError");
        } catch (t) {
          return (t.code = 9), (t.name = "NotSupportedError"), t;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (
        (t.connect = e.connect.bind(e)),
        (t.disconnect = e.disconnect.bind(e)),
        t
      );
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => "inputs" in t;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "AudioContext", function () {
        return Oi;
      }),
        n.d(e, "AudioWorkletNode", function () {
          return qi;
        }),
        n.d(e, "OfflineAudioContext", function () {
          return Vi;
        }),
        n.d(e, "isAnyAudioContext", function () {
          return Ni;
        }),
        n.d(e, "isAnyAudioNode", function () {
          return Pi;
        }),
        n.d(e, "isAnyAudioParam", function () {
          return Li;
        }),
        n.d(e, "isAnyOfflineAudioContext", function () {
          return zi;
        }),
        n.d(e, "isSupported", function () {
          return Bi;
        });
      var s = n(18),
        i = n(516),
        o = n(517),
        r = n(518),
        a = n(667),
        c = n(519),
        u = n(520),
        h = n(521),
        l = n(522),
        d = n(523),
        p = n(524),
        f = n(525),
        _ = n(526),
        m = n(527),
        g = n(528),
        v = n(529),
        y = n(665),
        b = n(530),
        x = n(531),
        w = n(532),
        T = n(670),
        O = n(533),
        S = n(534),
        C = n(535),
        k = n(536),
        A = n(537),
        D = n(538),
        M = n(539),
        j = n(540),
        E = n(541),
        R = n(542),
        q = n(543),
        I = n(544),
        F = n(545),
        V = n(546),
        N = n(547),
        P = n(548),
        L = n(549),
        z = n(550),
        B = n(671),
        W = n(551),
        U = n(552),
        G = n(553),
        Y = n(554),
        Q = n(672),
        Z = n(555),
        X = n(556),
        H = n(557),
        $ = n(558),
        J = n(559),
        K = n(560),
        tt = n(561),
        et = n(562),
        nt = n(563),
        st = n(564),
        it = n(565),
        ot = n(566),
        rt = n(567),
        at = n(568),
        ct = n(569),
        ut = n(673),
        ht = n(570),
        lt = n(571),
        dt = n(15),
        pt = n(37),
        ft = n(7),
        _t = n(572),
        mt = n(573),
        gt = n(574),
        vt = n(575),
        yt = n(576),
        bt = n(577),
        xt = n(578),
        wt = n(579),
        Tt = n(580),
        Ot = n(581),
        St = n(582),
        Ct = n(583),
        kt = n(584),
        At = n(585),
        Dt = n(586),
        Mt = n(587),
        jt = n(588),
        Et = n(589),
        Rt = n(590),
        qt = n(668),
        It = n(591),
        Ft = n(669),
        Vt = n(592),
        Nt = n(593),
        Pt = n(594),
        Lt = n(595),
        zt = n(674),
        Bt = n(666),
        Wt = n(596),
        Ut = n(597),
        Gt = n(675),
        Yt = n(598),
        Qt = n(599),
        Zt = n(600),
        Xt = n(601),
        Ht = n(602),
        $t = n(603),
        Jt = n(604),
        Kt = n(605),
        te = n(606),
        ee = n(607),
        ne = n(608),
        se = n(609),
        ie = n(610),
        oe = n(611),
        re = n(612),
        ae = n(613),
        ce = n(614),
        ue = n(615),
        he = n(616),
        le = n(617),
        de = n(618),
        pe = n(619),
        fe = n(620),
        _e = n(10),
        me = n(621),
        ge = n(622),
        ve = n(623),
        ye = n(624),
        be = n(625),
        xe = n(626),
        we = n(627),
        Te = n(628),
        Oe = n(629),
        Se = n(630),
        Ce = n(631),
        ke = n(632),
        Ae = n(633),
        De = n(634),
        Me = n(635),
        je = n(636),
        Ee = n(637),
        Re = n(638),
        qe = n(639),
        Ie = n(640),
        Fe = n(641),
        Ve = n(642),
        Ne = n(643),
        Pe = n(644),
        Le = n(645),
        ze = n(646),
        Be = n(647),
        We = n(648),
        Ue = n(649),
        Ge = n(650),
        Ye = n(651),
        Qe = n(652),
        Ze = n(653),
        Xe = n(654),
        He = n(44),
        $e = n(655),
        Je = n(656),
        Ke = n(657),
        tn = n(658),
        en = n(659),
        nn = n(660),
        sn = n(661),
        on = n(662),
        rn = n(0),
        an = n(33),
        cn = n(34),
        un = n(8),
        hn = n(26),
        ln = n(6),
        dn = n(27),
        pn = n(9),
        fn = n(16),
        _n = n(23),
        mn = n(45),
        gn = n(19),
        vn = n(38),
        yn = n(32),
        bn = n(14),
        xn = n(663),
        wn = n(664),
        Tn = n(28);
      n(46), n(130);
      const On = Object(k.a)(new Map(), new WeakMap()),
        Sn = Object(Ke.a)(),
        Cn = Object(oe.a)(Sn),
        kn = Object(Tt.a)(Cn),
        An = Object(Vt.a)(Sn),
        Dn = Object(rt.a)(kn, An, Cn),
        Mn = Object(Pt.a)(Dn),
        jn = Object(qt.a)(On, dt.a, Mn),
        En = Object(it.a)(un.a),
        Rn = Object(Te.a)(un.a, En, gn.a),
        qn = Object(l.a)(jn, ln.a, Rn),
        In = new WeakMap(),
        Fn = Object(at.a)(rn.g),
        Vn = new WeakMap(),
        Nn = Object(K.a)(Tn.a),
        Pn = Object(yt.a)(An),
        Ln = Object(bt.a)(Sn),
        zn = Object(xt.a)(Sn),
        Bn = Object(y.a)(
          Object(o.a)(rn.b),
          In,
          On,
          Object(lt.a)(rn.h, cn.a, un.a, ln.a, dn.a, _n.a),
          dt.a,
          pt.a,
          _e.a,
          Object(W.a)(an.a, rn.h, un.a, ln.a, dn.a, Fn, _n.a, kn),
          Object(Q.a)(Vn, un.a, pn.a),
          Nn,
          Fn,
          Pn,
          Ln,
          zn,
          kn
        ),
        Wn = Object(h.a)(Bn, qn, dt.a, jn, Fn, kn),
        Un = new WeakSet(),
        Gn = Object(It.a)(Sn),
        Yn = Object(V.a)(new Uint32Array(1)),
        Qn = Object(tn.a)(Yn, dt.a),
        Zn = Object(en.a)(Yn),
        Xn = Object(d.a)(Un, On, _e.a, Gn, Cn, Object(De.a)(Gn), Qn, Zn),
        Hn = Object(Jt.a)(Mn),
        $n = Object(c.a)(Hn),
        Jn = Object(Pe.a)(Mn),
        Kn = Object(Le.a)(Mn),
        ts = Object(ze.a)(Mn),
        es = Object(sn.a)(Mn),
        ns = Object(Oe.a)(En, hn.a, gn.a),
        ss = Object(E.a)(ns),
        is = Object(Ft.a)(
          $n,
          On,
          Mn,
          Object(je.a)(Mn),
          Object(Ee.a)(Cn),
          Object(Re.a)(Mn),
          Object(qe.a)(Mn),
          Jn,
          Kn,
          ts,
          wn.a,
          Object(nn.a)(vn.a),
          es
        ),
        os = Object(we.a)(Object(ot.a)(hn.a), ns),
        rs = Object(f.a)(ss, is, ln.a, os, Rn),
        as = Object(b.a)(
          Object(r.a)(rn.d),
          Vn,
          rn.e,
          x.a,
          s.createCancelAndHoldAutomationEvent,
          s.createCancelScheduledValuesAutomationEvent,
          s.createExponentialRampToValueAutomationEvent,
          s.createLinearRampToValueAutomationEvent,
          s.createSetTargetAutomationEvent,
          s.createSetValueAutomationEvent,
          s.createSetValueCurveAutomationEvent,
          An
        ),
        cs = Object(p.a)(Bn, rs, as, ft.a, is, Fn, kn, Tn.a),
        us = Object(m.a)(
          Bn,
          g.a,
          dt.a,
          ft.a,
          Object(Nt.a)(Hn, vn.a),
          Fn,
          kn,
          Rn
        ),
        hs = Object(Wt.a)(Mn),
        ls = Object(C.a)(ss, hs, ln.a, os, Rn),
        ds = Object(S.a)(Bn, as, ls, pt.a, hs, Fn, kn),
        ps = Object(Rt.a)(fn.a, Ln),
        fs = Object(on.a)(ft.a, Mn, ps),
        _s = Object(Ut.a)(Mn, fs),
        ms = Object(D.a)(_s, ln.a, Rn),
        gs = Object(A.a)(Bn, ms, _s, Fn, kn),
        vs = Object(Gt.a)(Mn),
        ys = Object(j.a)(vs, ln.a, Rn),
        bs = Object(M.a)(Bn, ys, vs, Fn, kn),
        xs = Object(Qt.a)($n, is, Hn, ps),
        ws = Object(Yt.a)($n, On, Mn, xs, Jn, ts),
        Ts = Object(F.a)(ss, ws, ln.a, os, Rn),
        Os = Object(I.a)(Bn, as, Ts, ws, Fn, kn, Tn.a),
        Ss = Object(Xt.a)(Mn, Hn, ps),
        Cs = Object(Zt.a)(Mn, Ss, _e.a, vn.a),
        ks = Object(P.a)(Cs, ln.a, Rn),
        As = Object(N.a)(Bn, ks, Cs, Fn, kn),
        Ds = Object(Ht.a)(Mn),
        Ms = Object(G.a)(ss, Ds, ln.a, os, Rn),
        js = Object(U.a)(Bn, as, Ms, Ds, Fn, kn),
        Es = Object($t.a)(Mn, _e.a),
        Rs = Object(H.a)(ss, Es, ln.a, os, Rn),
        qs = Object(X.a)(Bn, as, Rs, Es, _e.a, Fn, kn),
        Is = Object(st.a)(ss, Hn, ln.a, os, Rn),
        Fs = Object(nt.a)(Bn, as, Is, Hn, Fn, kn),
        Vs = Object(he.a)(Mn),
        Ns = Object(te.a)(pt.a, ft.a, Vs, _e.a),
        Ps = Object(Se.a)(On, Hn, Vs, Object(Ze.a)(Hn, Cn)),
        Ls = Object(ht.a)(is, Mn, ln.a, Cn, Rn, Ps),
        zs = Object(Kt.a)(Mn, Ns),
        Bs = Object(ut.a)(Bn, zs, Ls, Fn, kn),
        Ws = Object(v.a)(as, _s, ws, Vs, kn),
        Us = new WeakMap(),
        Gs = Object(jt.a)(us, Ws, Nn, kn, Us, Tn.a),
        Ys = Object(re.a)($n, On, Mn, Jn, Kn, ts, es),
        Qs = Object(ve.a)(ss, Ys, ln.a, os, Rn),
        Zs = Object(ge.a)(Bn, as, ft.a, Ys, Qs, Fn, kn, Tn.a),
        Xs = Object(q.a)(is),
        Hs = Object(fe.a)(Xs, ft.a, Mn, Hn, mn.a, ps),
        $s = Object(pe.a)(Xs, ft.a, Mn, Hs, mn.a, ps, vn.a),
        Js = Object(ce.a)(an.a, ft.a, Mn, _s, Hn, Vs, $s, _e.a, cn.a, ps),
        Ks = Object(ae.a)(Mn, Js),
        ti = Object(be.a)(ss, _s, ws, Hn, Ks, ln.a, Cn, os, Rn, Ps),
        ei = Object(ye.a)(Bn, as, Ks, ti, Fn, kn),
        ni = Object(ue.a)(Dn),
        si = Object(xe.a)(ni, Fn, new WeakSet()),
        ii = Object(de.a)(_s, vs, Hn, $s, _e.a, ps),
        oi = Object(le.a)(Mn, ii, _e.a),
        ri = Object(Ae.a)(ss, oi, ln.a, os, Rn),
        ai = Object(ke.a)(Bn, as, oi, ri, Fn, kn),
        ci = Object(Je.a)($s, ln.a, Rn),
        ui = Object($e.a)(Bn, ft.a, $s, ci, Fn, kn),
        hi = Object(Ot.a)(Sn),
        li = Object(tt.a)(Sn),
        di = hi
          ? Object(a.a)(
              _e.a,
              Object(J.a)(Sn),
              li,
              Object(et.a)(i.a),
              Dn,
              Fn,
              new WeakMap(),
              new WeakMap(),
              Sn
            )
          : void 0,
        pi = Object(wt.a)(Pn, kn),
        fi = Object(B.a)(
          Un,
          On,
          z.a,
          $.a,
          new WeakSet(),
          Fn,
          pi,
          kn,
          Cn,
          yn.a,
          bn.a,
          Qn,
          Zn
        ),
        _i = Object(O.a)(
          di,
          Wn,
          Xn,
          cs,
          ds,
          gs,
          bs,
          Os,
          As,
          fi,
          js,
          qs,
          Fs,
          Bs,
          Gs,
          Zs,
          ei,
          si,
          ai,
          ui
        ),
        mi = Object(ee.a)(Mn),
        gi = Object(Ct.a)(Bn, mi, Fn, kn),
        vi = Object(ne.a)(Mn, _e.a),
        yi = Object(kt.a)(Bn, vi, Fn, kn),
        bi = Object(se.a)(Mn),
        xi = Object(At.a)(Bn, bi, Fn, kn),
        wi = Object(ie.a)(ft.a, Mn, kn),
        Ti = Object(Dt.a)(Bn, wi, Fn),
        Oi = Object(_.a)(_i, ft.a, _e.a, He.a, gi, yi, xi, Ti, An),
        Si = Object(ct.a)(Us),
        Ci = Object(u.a)(Si),
        ki = Object(R.a)(dt.a),
        Ai = Object(Y.a)(Si),
        Di = Object(Z.a)(dt.a),
        Mi = Object(Bt.a)(
          In,
          ki,
          dt.a,
          ft.a,
          _s,
          vs,
          ws,
          Hn,
          Vs,
          _e.a,
          Di,
          li,
          ps
        ),
        ji = Object(zt.a)(ft.a, Mn, Mi, Hn, _e.a, ps),
        Ei = Object(Lt.a)(Sn),
        Ri = Object(T.a)(
          ss,
          ki,
          is,
          _s,
          vs,
          ws,
          Hn,
          Ai,
          Di,
          li,
          ln.a,
          Ei,
          Cn,
          os,
          Rn,
          Ps
        ),
        qi = hi ? Object(w.a)(Ci, Bn, as, Ri, ji, Fn, kn, Ei, Tn.a) : void 0,
        Ii = (Object(Mt.a)(ft.a, _e.a, He.a, Gs, An), Object(L.a)(_e.a, Cn)),
        Fi = Object(Ce.a)(Un, On, En, Si, Ps, yn.a, Qn, Zn),
        Vi =
          (Object(Et.a)(On, ft.a, Ii, Gs, Fi),
          Object(me.a)(_i, On, ft.a, Ii, Fi)),
        Ni = Object(_t.a)(rn.g, Pn),
        Pi = Object(mt.a)(rn.c, Ln),
        Li = Object(gt.a)(rn.e, zn),
        zi = Object(vt.a)(rn.g, kn),
        Bi = () =>
          Object(St.a)(
            On,
            Object(Me.a)(Cn),
            Object(Ie.a)(An),
            Object(Fe.a)(Cn),
            Object(Ve.a)(An),
            Object(Ne.a)(Cn),
            Object(Be.a)(Ei, Cn),
            Object(We.a)(Mn, Cn),
            Object(Ue.a)(Mn, Cn),
            Object(Ge.a)(Cn),
            Object(Ye.a)(Sn),
            Object(Qe.a)(An),
            Object(Xe.a)(Cn),
            xn.a
          );
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => {
        const e = new Uint32Array([
          1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400,
          1048580, 1635017060, 4, 0,
        ]);
        try {
          const n = t.decodeAudioData(e.buffer, () => {});
          return void 0 !== n && (n.catch(() => {}), !0);
        } catch {}
        return !1;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = () => {
        try {
          return new DOMException("", "IndexSizeError");
        } catch (t) {
          return (t.code = 1), (t.name = "IndexSizeError"), t;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n, s) => {
        for (const e of t)
          if (n(e)) {
            if (s) return !1;
            throw Error("The set contains at least one similar element.");
          }
        return t.add(e), !0;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(0),
        i = n(20);
      const o = (t) => {
        if (s.a.has(t)) throw new Error("The AudioNode is already stored.");
        s.a.add(t), Object(i.a)(t).forEach((t) => t(!0));
      };
    },
    function (t, e, n) {
      !(function (t, e, n, s) {
        "use strict";
        (e =
          e && Object.prototype.hasOwnProperty.call(e, "default")
            ? e.default
            : e),
          (n =
            n && Object.prototype.hasOwnProperty.call(n, "default")
              ? n.default
              : n),
          (s =
            s && Object.prototype.hasOwnProperty.call(s, "default")
              ? s.default
              : s);
        var i = function (t, e, n) {
            return {
              endTime: e,
              insertTime: n,
              type: "exponentialRampToValue",
              value: t,
            };
          },
          o = function (t, e, n) {
            return {
              endTime: e,
              insertTime: n,
              type: "linearRampToValue",
              value: t,
            };
          },
          r = function (t, e) {
            return {
              startTime: e,
              type: "setValue",
              value: t,
            };
          },
          a = function (t, e, n) {
            return {
              duration: n,
              startTime: e,
              type: "setValueCurve",
              values: t,
            };
          },
          c = function (t, e, n) {
            var s = n.startTime,
              i = n.target,
              o = n.timeConstant;
            return i + (e - i) * Math.exp((s - t) / o);
          },
          u = function (t) {
            return "exponentialRampToValue" === t.type;
          },
          h = function (t) {
            return "linearRampToValue" === t.type;
          },
          l = function (t) {
            return u(t) || h(t);
          },
          d = function (t) {
            return "setValue" === t.type;
          },
          p = function (t) {
            return "setValueCurve" === t.type;
          },
          f = function t(e, n, s, i) {
            var o = e[n];
            return void 0 === o
              ? i
              : l(o) || d(o)
              ? o.value
              : p(o)
              ? o.values[o.values.length - 1]
              : c(s, t(e, n - 1, o.startTime, i), o);
          },
          _ = function (t, e, n, s, i) {
            return void 0 === n
              ? [s.insertTime, i]
              : l(n)
              ? [n.endTime, n.value]
              : d(n)
              ? [n.startTime, n.value]
              : p(n)
              ? [n.startTime + n.duration, n.values[n.values.length - 1]]
              : [n.startTime, f(t, e - 1, n.startTime, i)];
          },
          m = function (t) {
            return "cancelAndHold" === t.type;
          },
          g = function (t) {
            return "cancelScheduledValues" === t.type;
          },
          v = function (t) {
            return m(t) || g(t)
              ? t.cancelTime
              : u(t) || h(t)
              ? t.endTime
              : t.startTime;
          },
          y = function (t, e, n, s) {
            var i = s.endTime,
              o = s.value;
            return n === o
              ? o
              : (0 < n && 0 < o) || (n < 0 && o < 0)
              ? n * Math.pow(o / n, (t - e) / (i - e))
              : 0;
          },
          b = function (t, e, n, s) {
            return n + ((t - e) / (s.endTime - e)) * (s.value - n);
          },
          x = function (t, e) {
            var n = e.duration,
              s = e.startTime,
              i = e.values;
            return (function (t, e) {
              var n = Math.floor(e),
                s = Math.ceil(e);
              return n === s
                ? t[n]
                : (1 - (e - n)) * t[n] + (1 - (s - e)) * t[s];
            })(i, ((t - s) / n) * (i.length - 1));
          },
          w = function (t) {
            return "setTarget" === t.type;
          },
          T = (function () {
            function t(e) {
              n(this, t),
                (this._automationEvents = []),
                (this._currenTime = 0),
                (this._defaultValue = e);
            }
            return (
              s(t, [
                {
                  key: Symbol.iterator,
                  value: function () {
                    return this._automationEvents[Symbol.iterator]();
                  },
                },
                {
                  key: "add",
                  value: function (t) {
                    var e = v(t);
                    if (m(t) || g(t)) {
                      var n = this._automationEvents.findIndex(function (t) {
                          return v(t) >= e;
                        }),
                        s = this._automationEvents[n];
                      if (
                        (-1 !== n &&
                          (this._automationEvents =
                            this._automationEvents.slice(0, n)),
                        m(t))
                      ) {
                        var c =
                          this._automationEvents[
                            this._automationEvents.length - 1
                          ];
                        if (void 0 !== s && l(s)) {
                          if (w(c))
                            throw new Error("The internal list is malformed.");
                          var d = p(c) ? c.startTime + c.duration : v(c),
                            f = p(c) ? c.values[c.values.length - 1] : c.value,
                            _ = u(s) ? y(e, d, f, s) : b(e, d, f, s),
                            x = u(s)
                              ? i(_, e, this._currenTime)
                              : o(_, e, this._currenTime);
                          this._automationEvents.push(x);
                        }
                        void 0 !== c &&
                          w(c) &&
                          this._automationEvents.push(r(this.getValue(e), e)),
                          void 0 !== c &&
                            p(c) &&
                            c.startTime + c.duration > e &&
                            (this._automationEvents[
                              this._automationEvents.length - 1
                            ] = a(
                              new Float32Array([6, 7]),
                              c.startTime,
                              e - c.startTime
                            ));
                      }
                    } else {
                      var T = this._automationEvents.findIndex(function (t) {
                          return v(t) > e;
                        }),
                        O =
                          -1 === T
                            ? this._automationEvents[
                                this._automationEvents.length - 1
                              ]
                            : this._automationEvents[T - 1];
                      if (void 0 !== O && p(O) && v(O) + O.duration > e)
                        return !1;
                      var S = u(t)
                        ? i(t.value, t.endTime, this._currenTime)
                        : h(t)
                        ? o(t.value, e, this._currenTime)
                        : t;
                      if (-1 === T) this._automationEvents.push(S);
                      else {
                        if (
                          p(t) &&
                          e + t.duration > v(this._automationEvents[T])
                        )
                          return !1;
                        this._automationEvents.splice(T, 0, S);
                      }
                    }
                    return !0;
                  },
                },
                {
                  key: "flush",
                  value: function (t) {
                    var e = this._automationEvents.findIndex(function (e) {
                      return v(e) > t;
                    });
                    if (e > 1) {
                      var n = this._automationEvents.slice(e - 1),
                        s = n[0];
                      w(s) &&
                        n.unshift(
                          r(
                            f(
                              this._automationEvents,
                              e - 2,
                              s.startTime,
                              this._defaultValue
                            ),
                            s.startTime
                          )
                        ),
                        (this._automationEvents = n);
                    }
                  },
                },
                {
                  key: "getValue",
                  value: function (t) {
                    if (0 === this._automationEvents.length)
                      return this._defaultValue;
                    var n =
                        this._automationEvents[
                          this._automationEvents.length - 1
                        ],
                      s = this._automationEvents.findIndex(function (e) {
                        return v(e) > t;
                      }),
                      i = this._automationEvents[s],
                      o = v(n) <= t ? n : this._automationEvents[s - 1];
                    if (
                      void 0 !== o &&
                      w(o) &&
                      (void 0 === i || !l(i) || i.insertTime > t)
                    )
                      return c(
                        t,
                        f(
                          this._automationEvents,
                          s - 2,
                          o.startTime,
                          this._defaultValue
                        ),
                        o
                      );
                    if (void 0 !== o && d(o) && (void 0 === i || !l(i)))
                      return o.value;
                    if (
                      void 0 !== o &&
                      p(o) &&
                      (void 0 === i || !l(i) || o.startTime + o.duration > t)
                    )
                      return t < o.startTime + o.duration
                        ? x(t, o)
                        : o.values[o.values.length - 1];
                    if (void 0 !== o && l(o) && (void 0 === i || !l(i)))
                      return o.value;
                    if (void 0 !== i && u(i)) {
                      var r = _(
                          this._automationEvents,
                          s - 1,
                          o,
                          i,
                          this._defaultValue
                        ),
                        a = e(r, 2),
                        m = a[0],
                        g = a[1];
                      return y(t, m, g, i);
                    }
                    if (void 0 !== i && h(i)) {
                      var T = _(
                          this._automationEvents,
                          s - 1,
                          o,
                          i,
                          this._defaultValue
                        ),
                        O = e(T, 2),
                        S = O[0],
                        C = O[1];
                      return b(t, S, C, i);
                    }
                    return this._defaultValue;
                  },
                },
              ]),
              t
            );
          })();
        (t.AutomationEventList = T),
          (t.createCancelAndHoldAutomationEvent = function (t) {
            return {
              cancelTime: t,
              type: "cancelAndHold",
            };
          }),
          (t.createCancelScheduledValuesAutomationEvent = function (t) {
            return {
              cancelTime: t,
              type: "cancelScheduledValues",
            };
          }),
          (t.createExponentialRampToValueAutomationEvent = function (t, e) {
            return {
              endTime: e,
              type: "exponentialRampToValue",
              value: t,
            };
          }),
          (t.createLinearRampToValueAutomationEvent = function (t, e) {
            return {
              endTime: e,
              type: "linearRampToValue",
              value: t,
            };
          }),
          (t.createSetTargetAutomationEvent = function (t, e, n) {
            return {
              startTime: e,
              target: t,
              timeConstant: n,
              type: "setTarget",
            };
          }),
          (t.createSetValueAutomationEvent = r),
          (t.createSetValueCurveAutomationEvent = a),
          Object.defineProperty(t, "__esModule", {
            value: !0,
          });
      })(e, n(676), n(682), n(683));
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(0);
      const i = (t) => s.h.has(t);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(0),
        i = n(9);
      const o = (t) => Object(i.a)(s.i, t);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(0),
        i = n(20);
      const o = (t) => {
        if (!s.a.has(t)) throw new Error("The AudioNode is not stored.");
        s.a.delete(t), Object(i.a)(t).forEach((t) => t(!1));
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(24);
      const i = (t) => Object(s.a)(t[0]);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(0);
      const i = (t) => s.a.has(t);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => "context" in t;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => "context" in t;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(0),
        i = n(9);
      const o = (t) => Object(i.a)(s.d, t);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(0),
        i = n(9);
      const o = (t) => Object(i.a)(s.e, t);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n) => {
        const s = {
          value: t,
        };
        return (
          Object.defineProperties(n, {
            currentTarget: s,
            target: s,
          }),
          "function" == typeof e ? e.call(t, n) : e.handleEvent.call(t, n)
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(15);
      const i = (t) => {
        var e;
        t.getChannelData =
          ((e = t.getChannelData),
          (n) => {
            try {
              return e.call(t, n);
            } catch (t) {
              if (12 === t.code) throw Object(s.a)();
              throw t;
            }
          });
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => {
        var e;
        t.start =
          ((e = t.start),
          (n = 0, s = 0, i) => {
            if (("number" == typeof i && i < 0) || s < 0 || n < 0)
              throw new RangeError("The parameters can't be negative.");
            e.call(t, n, s, i);
          });
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => {
        var e;
        t.stop =
          ((e = t.stop),
          (n = 0) => {
            if (n < 0) throw new RangeError("The parameter can't be negative.");
            e.call(t, n);
          });
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => {
        try {
          t.copyToChannel(new Float32Array(1), 0, -1);
        } catch {
          return !1;
        }
        return !0;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(12);
      const i = (t, e, n, i) => {
        if (Object(s.a)(e)) {
          const s = e.inputs[i];
          return t.connect(s, n, 0), [s, n, 0];
        }
        return t.connect(e, n, i), [e, n, i];
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(12);
      const i = (t, e, n, i) => {
        Object(s.a)(e)
          ? t.disconnect(e.inputs[i], n, 0)
          : t.disconnect(e, n, i);
      };
    },
    function (t, e, n) {
      "use strict";
      function s(t, e, n, s, i) {
        if ("function" == typeof t.copyFromChannel)
          0 === e[n].byteLength && (e[n] = new Float32Array(128)),
            t.copyFromChannel(e[n], s, i);
        else {
          const o = t.getChannelData(s);
          if (0 === e[n].byteLength) e[n] = o.slice(i, i + 128);
          else {
            const t = new Float32Array(
              o.buffer,
              i * Float32Array.BYTES_PER_ELEMENT,
              128
            );
            e[n].set(t);
          }
        }
      }
      n.d(e, "a", function () {
        return s;
      });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => {
        const n = [];
        for (let s = 0; s < t; s += 1) {
          const t = [],
            i = "number" == typeof e ? e : e[s];
          for (let e = 0; e < i; e += 1) t.push(new Float32Array(128));
          n.push(t);
        }
        return n;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = () => {
        try {
          return new DOMException("", "InvalidAccessError");
        } catch (t) {
          return (t.code = 15), (t.name = "InvalidAccessError"), t;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n, s) => {
        let i = Object.getPrototypeOf(t);
        for (; !i.hasOwnProperty(e); ) i = Object.getPrototypeOf(i);
        const { get: o, set: r } = Object.getOwnPropertyDescriptor(i, e);
        Object.defineProperty(t, e, {
          get: n(o),
          set: s(r),
        });
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) =>
        void 0 === t ||
        "number" == typeof t ||
        ("string" == typeof t &&
          ("balanced" === t || "interactive" === t || "playback" === t));
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      class s {
        constructor(t) {
          this._map = new Map(t);
        }
        get size() {
          return this._map.size;
        }
        entries() {
          return this._map.entries();
        }
        forEach(t, e = null) {
          return this._map.forEach((n, s) => t.call(e, n, s, this));
        }
        get(t) {
          return this._map.get(t);
        }
        has(t) {
          return this._map.has(t);
        }
        keys() {
          return this._map.keys();
        }
        values() {
          return this._map.values();
        }
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n, s, i) => {
        "function" == typeof t.copyToChannel
          ? 0 !== e[n].byteLength && t.copyToChannel(e[n], s, i)
          : 0 !== e[n].byteLength && t.getChannelData(s).set(e[n], i);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n, s, i, o, r, a, c, u, h) => {
        const l = u.length;
        let d = a;
        for (let a = 0; a < l; a += 1) {
          let l = n[0] * u[a];
          for (let e = 1; e < i; e += 1) {
            const s = (d - e) & (c - 1);
            (l += n[e] * o[s]), (l -= t[e] * r[s]);
          }
          for (let t = i; t < s; t += 1) l += n[t] * o[(d - t) & (c - 1)];
          for (let n = i; n < e; n += 1) l -= t[n] * r[(d - n) & (c - 1)];
          (o[d] = u[a]), (r[d] = l), (d = (d + 1) & (c - 1)), (h[a] = l);
        }
        return d;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) =>
        null === t
          ? 512
          : Math.max(
              512,
              Math.min(16384, Math.pow(2, Math.round(Math.log2(t * e))))
            );
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = () => {
        try {
          return new DOMException("", "UnknownError");
        } catch (t) {
          return (t.name = "UnknownError"), t;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => {
        if (null === t) return !1;
        const e = t.length;
        return e % 2 != 0
          ? 0 !== t[Math.floor(e / 2)]
          : t[e / 2 - 1] + t[e / 2] !== 0;
      };
    },
    function (t, e, n) {
      "use strict";
      n(47),
        n(48),
        n(49),
        n(50),
        n(51),
        n(52),
        n(53),
        n(54),
        n(55),
        n(56),
        n(57),
        n(58),
        n(59),
        n(60),
        n(61),
        n(62),
        n(63),
        n(64),
        n(65),
        n(66),
        n(67),
        n(68),
        n(69),
        n(70),
        n(71),
        n(72),
        n(73),
        n(74),
        n(75),
        n(76),
        n(77),
        n(78),
        n(79),
        n(80),
        n(81),
        n(82),
        n(83),
        n(84),
        n(85),
        n(86),
        n(87),
        n(88),
        n(89),
        n(90),
        n(91),
        n(92),
        n(93),
        n(94),
        n(95),
        n(96),
        n(97),
        n(98),
        n(99),
        n(100),
        n(101),
        n(102),
        n(103),
        n(104),
        n(105),
        n(106),
        n(107),
        n(108),
        n(109),
        n(110),
        n(111),
        n(112),
        n(113),
        n(114),
        n(115),
        n(116),
        n(117),
        n(118),
        n(119),
        n(120),
        n(121),
        n(122),
        n(123),
        n(124),
        n(125),
        n(126),
        n(127),
        n(128),
        n(129);
    },
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e, n) {
      "use strict";
      n(131),
        n(132),
        n(133),
        n(134),
        n(135),
        n(136),
        n(137),
        n(138),
        n(139),
        n(140),
        n(141),
        n(142),
        n(143),
        n(144),
        n(145),
        n(146),
        n(147),
        n(148),
        n(149),
        n(150),
        n(151),
        n(152),
        n(153),
        n(154),
        n(155),
        n(156),
        n(157),
        n(158),
        n(159),
        n(160),
        n(161),
        n(162),
        n(163),
        n(164),
        n(165),
        n(166),
        n(167),
        n(168),
        n(169),
        n(170),
        n(171),
        n(172),
        n(173),
        n(174),
        n(175),
        n(176),
        n(177),
        n(178),
        n(179),
        n(180),
        n(181),
        n(182),
        n(183),
        n(184),
        n(185),
        n(186),
        n(187),
        n(188),
        n(189),
        n(190),
        n(191),
        n(192),
        n(193),
        n(194),
        n(195),
        n(196),
        n(197),
        n(198),
        n(199),
        n(200),
        n(201),
        n(202),
        n(203),
        n(204),
        n(205),
        n(206),
        n(207),
        n(208),
        n(209),
        n(210),
        n(211),
        n(212),
        n(213),
        n(214),
        n(215),
        n(216),
        n(217),
        n(218),
        n(219),
        n(220),
        n(221),
        n(222),
        n(223),
        n(224),
        n(225),
        n(226),
        n(227),
        n(228),
        n(229),
        n(230),
        n(231),
        n(232),
        n(233),
        n(234),
        n(235),
        n(236),
        n(237),
        n(238),
        n(239),
        n(240),
        n(241),
        n(242),
        n(243),
        n(244),
        n(245),
        n(246),
        n(247),
        n(248),
        n(249),
        n(250),
        n(251),
        n(252),
        n(253),
        n(254),
        n(255),
        n(256),
        n(257),
        n(258),
        n(259),
        n(260),
        n(261),
        n(262),
        n(263),
        n(264),
        n(265),
        n(266),
        n(267),
        n(268),
        n(269),
        n(270),
        n(271),
        n(272),
        n(273),
        n(274),
        n(275),
        n(276),
        n(277),
        n(278),
        n(279),
        n(280),
        n(281),
        n(282),
        n(283),
        n(284),
        n(285),
        n(286),
        n(287),
        n(288),
        n(289),
        n(290),
        n(291),
        n(292),
        n(293),
        n(294),
        n(295),
        n(296),
        n(297),
        n(298),
        n(299),
        n(300),
        n(301),
        n(302),
        n(303),
        n(304),
        n(305),
        n(306),
        n(307),
        n(308),
        n(309),
        n(310),
        n(311),
        n(312),
        n(313),
        n(314),
        n(315),
        n(316),
        n(317),
        n(318),
        n(319),
        n(320),
        n(321),
        n(322),
        n(323),
        n(324),
        n(325),
        n(326),
        n(327),
        n(328),
        n(329),
        n(330),
        n(331),
        n(332),
        n(333),
        n(334),
        n(335),
        n(336),
        n(337),
        n(338),
        n(339),
        n(340),
        n(341),
        n(342),
        n(343),
        n(344),
        n(345),
        n(346),
        n(347),
        n(348),
        n(349),
        n(350),
        n(351),
        n(352),
        n(353),
        n(354),
        n(355),
        n(356),
        n(357),
        n(358),
        n(359),
        n(360),
        n(361),
        n(362),
        n(363),
        n(364),
        n(365),
        n(366),
        n(367),
        n(368),
        n(369),
        n(370),
        n(371),
        n(372),
        n(373),
        n(374),
        n(375),
        n(376),
        n(377),
        n(378),
        n(379),
        n(380),
        n(381),
        n(382),
        n(383),
        n(384),
        n(385),
        n(386),
        n(387),
        n(388),
        n(389),
        n(390),
        n(391),
        n(392),
        n(393),
        n(394),
        n(395),
        n(396),
        n(397),
        n(398),
        n(399),
        n(400),
        n(401),
        n(402),
        n(403),
        n(404),
        n(405),
        n(406),
        n(407),
        n(408),
        n(409),
        n(410),
        n(411),
        n(412),
        n(413),
        n(414),
        n(415),
        n(416),
        n(417),
        n(418),
        n(419),
        n(420),
        n(421),
        n(422),
        n(423),
        n(424),
        n(425),
        n(426),
        n(427),
        n(428),
        n(429),
        n(430),
        n(431),
        n(432),
        n(433),
        n(434),
        n(435),
        n(436),
        n(437),
        n(438),
        n(439),
        n(440),
        n(441),
        n(442),
        n(443),
        n(444),
        n(445),
        n(446),
        n(447),
        n(448),
        n(449),
        n(450),
        n(451),
        n(452),
        n(453),
        n(454),
        n(455),
        n(456),
        n(457),
        n(458),
        n(459),
        n(460),
        n(461),
        n(462),
        n(463),
        n(464),
        n(465),
        n(466),
        n(467),
        n(468),
        n(469),
        n(470),
        n(471),
        n(472),
        n(473),
        n(474),
        n(475),
        n(476),
        n(477),
        n(478),
        n(479),
        n(480),
        n(481),
        n(482),
        n(483),
        n(484),
        n(485),
        n(486),
        n(487),
        n(488),
        n(489),
        n(490),
        n(491),
        n(492),
        n(493),
        n(494),
        n(495),
        n(496),
        n(497),
        n(498),
        n(499),
        n(500),
        n(501),
        n(502),
        n(503),
        n(504),
        n(505),
        n(506),
        n(507),
        n(508),
        n(509),
        n(510),
        n(511),
        n(512),
        n(513),
        n(514);
    },
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = () => {
        try {
          return new DOMException("", "AbortError");
        } catch (t) {
          return (t.code = 20), (t.name = "AbortError"), t;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n, s) => {
        const i = [];
        for (let t = 0; t < s.numberOfInputs; t += 1) i.push(new Set());
        t.set(e, {
          activeInputs: i,
          outputs: new Set(),
          passiveInputs: new WeakMap(),
          renderer: n,
        });
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n) => {
        t.set(e, {
          activeInputs: new Set(),
          passiveInputs: new WeakMap(),
          renderer: n,
        });
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n) => {
        const s = t(e, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          gain: 0,
        });
        n.connect(s).connect(s.context.destination);
        const i = () => {
          n.removeEventListener("ended", i), n.disconnect(s), s.disconnect();
        };
        n.addEventListener("ended", i);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n) => {
        t(e).add(n);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      const s = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          fftSize: 2048,
          maxDecibels: -30,
          minDecibels: -100,
          smoothingTimeConstant: 0.8,
        },
        i = (t, e, n, i, o, r) =>
          class extends t {
            constructor(t, n = s) {
              const a = o(t),
                c = {
                  ...s,
                  ...n,
                },
                u = i(a, c);
              super(t, !1, u, r(a) ? e() : null),
                (this._nativeAnalyserNode = u);
            }
            get fftSize() {
              return this._nativeAnalyserNode.fftSize;
            }
            set fftSize(t) {
              this._nativeAnalyserNode.fftSize = t;
            }
            get frequencyBinCount() {
              return this._nativeAnalyserNode.frequencyBinCount;
            }
            get maxDecibels() {
              return this._nativeAnalyserNode.maxDecibels;
            }
            set maxDecibels(t) {
              const e = this._nativeAnalyserNode.maxDecibels;
              if (
                ((this._nativeAnalyserNode.maxDecibels = t),
                !(t > this._nativeAnalyserNode.minDecibels))
              )
                throw ((this._nativeAnalyserNode.maxDecibels = e), n());
            }
            get minDecibels() {
              return this._nativeAnalyserNode.minDecibels;
            }
            set minDecibels(t) {
              const e = this._nativeAnalyserNode.minDecibels;
              if (
                ((this._nativeAnalyserNode.minDecibels = t),
                !(this._nativeAnalyserNode.maxDecibels > t))
              )
                throw ((this._nativeAnalyserNode.minDecibels = e), n());
            }
            get smoothingTimeConstant() {
              return this._nativeAnalyserNode.smoothingTimeConstant;
            }
            set smoothingTimeConstant(t) {
              this._nativeAnalyserNode.smoothingTimeConstant = t;
            }
            getByteFrequencyData(t) {
              this._nativeAnalyserNode.getByteFrequencyData(t);
            }
            getByteTimeDomainData(t) {
              this._nativeAnalyserNode.getByteTimeDomainData(t);
            }
            getFloatFrequencyData(t) {
              this._nativeAnalyserNode.getFloatFrequencyData(t);
            }
            getFloatTimeDomainData(t) {
              this._nativeAnalyserNode.getFloatTimeDomainData(t);
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(3);
      const i = (t, e, n) => () => {
        const i = new WeakMap();
        return {
          render(o, r, a) {
            const c = i.get(r);
            return void 0 !== c
              ? Promise.resolve(c)
              : (async (o, r, a) => {
                  let c = e(o);
                  if (!Object(s.a)(c, r)) {
                    const e = {
                      channelCount: c.channelCount,
                      channelCountMode: c.channelCountMode,
                      channelInterpretation: c.channelInterpretation,
                      fftSize: c.fftSize,
                      maxDecibels: c.maxDecibels,
                      minDecibels: c.minDecibels,
                      smoothingTimeConstant: c.smoothingTimeConstant,
                    };
                    c = t(r, e);
                  }
                  return i.set(r, c), await n(o, r, c, a), c;
                })(o, r, a);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n(32),
        i = n(29);
      const o = {
          numberOfChannels: 1,
        },
        r = (t, e, n, r, a, c, u, h) => {
          let l = null;
          return class d {
            constructor(d) {
              if (null === a)
                throw new Error(
                  "Missing the native OfflineAudioContext constructor."
                );
              const {
                length: p,
                numberOfChannels: f,
                sampleRate: _,
              } = {
                ...o,
                ...d,
              };
              null === l && (l = new a(1, 1, 44100));
              const m =
                null !== r && e(c, c)
                  ? new r({
                      length: p,
                      numberOfChannels: f,
                      sampleRate: _,
                    })
                  : l.createBuffer(f, p, _);
              if (0 === m.numberOfChannels) throw n();
              return (
                "function" != typeof m.copyFromChannel
                  ? (u(m), Object(i.a)(m))
                  : e(s.a, () => Object(s.a)(m)) || h(m),
                t.add(m),
                m
              );
            }
            static [Symbol.hasInstance](e) {
              return (
                (null !== e &&
                  "object" == typeof e &&
                  Object.getPrototypeOf(e) === d.prototype) ||
                t.has(e)
              );
            }
          };
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var s = n(2),
        i = n(17),
        o = n(21);
      const r = {
          buffer: null,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          loop: !1,
          loopEnd: 0,
          loopStart: 0,
          playbackRate: 1,
        },
        a = (t, e, n, a, c, u, h, l) =>
          class extends t {
            constructor(t, i = r) {
              const o = u(t),
                a = {
                  ...r,
                  ...i,
                },
                l = c(o, a),
                d = h(o),
                p = d ? e() : null;
              super(t, !1, l, p),
                (this._audioBufferSourceNodeRenderer = p),
                (this._isBufferNullified = !1),
                (this._isBufferSet = null !== i.buffer && void 0 !== i.buffer),
                (this._nativeAudioBufferSourceNode = l),
                (this._onended = null),
                (this._playbackRate = n(this, d, l.playbackRate, s.b, s.a));
            }
            get buffer() {
              return this._isBufferNullified
                ? null
                : this._nativeAudioBufferSourceNode.buffer;
            }
            set buffer(t) {
              try {
                this._nativeAudioBufferSourceNode.buffer = t;
              } catch (e) {
                if (null !== t || 17 !== e.code) throw e;
                if (null !== this._nativeAudioBufferSourceNode.buffer) {
                  const t = this._nativeAudioBufferSourceNode.buffer,
                    e = t.numberOfChannels;
                  for (let n = 0; n < e; n += 1) t.getChannelData(n).fill(0);
                  this._isBufferNullified = !0;
                }
              }
              if (null !== t) {
                if (this._isBufferSet) throw a();
                this._isBufferSet = !0;
              }
            }
            get loop() {
              return this._nativeAudioBufferSourceNode.loop;
            }
            set loop(t) {
              this._nativeAudioBufferSourceNode.loop = t;
            }
            get loopEnd() {
              return this._nativeAudioBufferSourceNode.loopEnd;
            }
            set loopEnd(t) {
              this._nativeAudioBufferSourceNode.loopEnd = t;
            }
            get loopStart() {
              return this._nativeAudioBufferSourceNode.loopStart;
            }
            set loopStart(t) {
              this._nativeAudioBufferSourceNode.loopStart = t;
            }
            get onended() {
              return this._onended;
            }
            set onended(t) {
              const e = "function" == typeof t ? l(this, t) : null;
              this._nativeAudioBufferSourceNode.onended = e;
              const n = this._nativeAudioBufferSourceNode.onended;
              this._onended = null !== n && n === e ? t : n;
            }
            get playbackRate() {
              return this._playbackRate;
            }
            start(t = 0, e = 0, n) {
              if (
                (this._nativeAudioBufferSourceNode.start(t, e, n),
                null !== this._audioBufferSourceNodeRenderer)
              )
                this._audioBufferSourceNodeRenderer.start =
                  void 0 === n ? [t, e] : [t, e, n];
              else {
                Object(i.a)(this);
                const t = () => {
                  this._nativeAudioBufferSourceNode.removeEventListener(
                    "ended",
                    t
                  ),
                    setTimeout(() => Object(o.a)(this), 1e3);
                };
                this._nativeAudioBufferSourceNode.addEventListener("ended", t);
              }
            }
            stop(t = 0) {
              this._nativeAudioBufferSourceNode.stop(t),
                null !== this._audioBufferSourceNodeRenderer &&
                  (this._audioBufferSourceNodeRenderer.stop = t);
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(3);
      const i = (t, e, n, i, o) => () => {
        const r = new WeakMap();
        let a = null,
          c = null;
        return {
          set start(t) {
            a = t;
          },
          set stop(t) {
            c = t;
          },
          render(u, h, l) {
            const d = r.get(h);
            return void 0 !== d
              ? Promise.resolve(d)
              : (async (u, h, l) => {
                  let d = n(u);
                  const p = Object(s.a)(d, h);
                  if (!p) {
                    const t = {
                      buffer: d.buffer,
                      channelCount: d.channelCount,
                      channelCountMode: d.channelCountMode,
                      channelInterpretation: d.channelInterpretation,
                      loop: d.loop,
                      loopEnd: d.loopEnd,
                      loopStart: d.loopStart,
                      playbackRate: d.playbackRate.value,
                    };
                    (d = e(h, t)),
                      null !== a && d.start(...a),
                      null !== c && d.stop(c);
                  }
                  return (
                    r.set(h, d),
                    p
                      ? await t(h, u.playbackRate, d.playbackRate, l)
                      : await i(h, u.playbackRate, d.playbackRate, l),
                    await o(u, h, d, l),
                    d
                  );
                })(u, h, l);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(39);
      const i = (t, e, n, i, o, r, a, c, u) =>
        class extends t {
          constructor(t = {}) {
            if (null === u)
              throw new Error("Missing the native AudioContext constructor.");
            const e = new u(t);
            if (null === e) throw i();
            if (!Object(s.a)(t.latencyHint))
              throw new TypeError(
                `The provided value '${t.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
              );
            if (void 0 !== t.sampleRate && e.sampleRate !== t.sampleRate)
              throw n();
            super(e, 2);
            const { latencyHint: o } = t,
              { sampleRate: r } = e;
            if (
              ((this._baseLatency =
                "number" == typeof e.baseLatency
                  ? e.baseLatency
                  : "balanced" === o
                  ? 512 / r
                  : "interactive" === o || void 0 === o
                  ? 256 / r
                  : "playback" === o
                  ? 1024 / r
                  : (128 *
                      Math.max(2, Math.min(128, Math.round((o * r) / 128)))) /
                    r),
              (this._nativeAudioContext = e),
              (this._state = null),
              "running" === e.state)
            ) {
              this._state = "suspended";
              const t = () => {
                "suspended" === this._state && (this._state = null),
                  e.removeEventListener("statechange", t);
              };
              e.addEventListener("statechange", t);
            }
          }
          get baseLatency() {
            return this._baseLatency;
          }
          get state() {
            return null !== this._state
              ? this._state
              : this._nativeAudioContext.state;
          }
          close() {
            return "closed" === this.state
              ? this._nativeAudioContext.close().then(() => {
                  throw e();
                })
              : ("suspended" === this._state && (this._state = null),
                this._nativeAudioContext.close());
          }
          createMediaElementSource(t) {
            return new o(this, {
              mediaElement: t,
            });
          }
          createMediaStreamDestination() {
            return new r(this);
          }
          createMediaStreamSource(t) {
            return new a(this, {
              mediaStream: t,
            });
          }
          createMediaStreamTrackSource(t) {
            return new c(this, {
              mediaStreamTrack: t,
            });
          }
          resume() {
            return "suspended" === this._state
              ? new Promise((t, e) => {
                  const n = () => {
                    this._nativeAudioContext.removeEventListener(
                      "statechange",
                      n
                    ),
                      "running" === this._nativeAudioContext.state
                        ? t()
                        : this.resume().then(t, e);
                  };
                  this._nativeAudioContext.addEventListener("statechange", n);
                })
              : this._nativeAudioContext.resume().catch((t) => {
                  if (void 0 === t || 15 === t.code) throw e();
                  throw t;
                });
          }
          suspend() {
            return this._nativeAudioContext.suspend().catch((t) => {
              if (void 0 === t) throw e();
              throw t;
            });
          }
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n, s, i, o, r, a) =>
        class extends t {
          constructor(t, n) {
            const s = o(t),
              c = r(s),
              u = i(s, n, c);
            super(t, !1, u, c ? e(a) : null),
              (this._isNodeOfNativeOfflineAudioContext = c),
              (this._nativeAudioDestinationNode = u);
          }
          get channelCount() {
            return this._nativeAudioDestinationNode.channelCount;
          }
          set channelCount(t) {
            if (this._isNodeOfNativeOfflineAudioContext) throw s();
            if (t > this._nativeAudioDestinationNode.maxChannelCount) throw n();
            this._nativeAudioDestinationNode.channelCount = t;
          }
          get channelCountMode() {
            return this._nativeAudioDestinationNode.channelCountMode;
          }
          set channelCountMode(t) {
            if (this._isNodeOfNativeOfflineAudioContext) throw s();
            this._nativeAudioDestinationNode.channelCountMode = t;
          }
          get maxChannelCount() {
            return this._nativeAudioDestinationNode.maxChannelCount;
          }
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => {
        let e = null;
        return {
          render: (n, s, i) => (
            null === e &&
              (e = (async (e, n, s) => {
                const i = n.destination;
                return await t(e, n, i, s), i;
              })(n, s, i)),
            e
          ),
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(2);
      const i = (t, e, n, i, o) => (r, a) => {
        const c = a.listener,
          {
            forwardX: u,
            forwardY: h,
            forwardZ: l,
            positionX: d,
            positionY: p,
            positionZ: f,
            upX: _,
            upY: m,
            upZ: g,
          } = void 0 === c.forwardX
            ? (() => {
                const u = e(a, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    numberOfInputs: 9,
                  }),
                  h = o(a),
                  l = i(a, 256, 9, 0),
                  d = (e, i) => {
                    const o = n(a, {
                      channelCount: 1,
                      channelCountMode: "explicit",
                      channelInterpretation: "discrete",
                      offset: i,
                    });
                    return (
                      o.connect(u, 0, e),
                      o.start(),
                      Object.defineProperty(o.offset, "defaultValue", {
                        get: () => i,
                      }),
                      t(
                        {
                          context: r,
                        },
                        h,
                        o.offset,
                        s.b,
                        s.a
                      )
                    );
                  };
                let p = [0, 0, -1, 0, 1, 0],
                  f = [0, 0, 0];
                return (
                  (l.onaudioprocess = ({ inputBuffer: t }) => {
                    const e = [
                      t.getChannelData(0)[0],
                      t.getChannelData(1)[0],
                      t.getChannelData(2)[0],
                      t.getChannelData(3)[0],
                      t.getChannelData(4)[0],
                      t.getChannelData(5)[0],
                    ];
                    e.some((t, e) => t !== p[e]) &&
                      (c.setOrientation(...e), (p = e));
                    const n = [
                      t.getChannelData(6)[0],
                      t.getChannelData(7)[0],
                      t.getChannelData(8)[0],
                    ];
                    n.some((t, e) => t !== f[e]) &&
                      (c.setPosition(...n), (f = n));
                  }),
                  u.connect(l),
                  {
                    forwardX: d(0, 0),
                    forwardY: d(1, 0),
                    forwardZ: d(2, -1),
                    positionX: d(6, 0),
                    positionY: d(7, 0),
                    positionZ: d(8, 0),
                    upX: d(3, 0),
                    upY: d(4, 1),
                    upZ: d(5, 0),
                  }
                );
              })()
            : c;
        return {
          get forwardX() {
            return u;
          },
          get forwardY() {
            return h;
          },
          get forwardZ() {
            return l;
          },
          get positionX() {
            return d;
          },
          get positionY() {
            return p;
          },
          get positionZ() {
            return f;
          },
          get upX() {
            return _;
          },
          get upY() {
            return m;
          },
          get upZ() {
            return g;
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(18);
      const i =
        (t, e, n, i, o, r, a, c, u, h, l, d) =>
        (p, f, _, m = null, g = null) => {
          const v = new s.AutomationEventList(_.defaultValue),
            y = f ? i(v) : null,
            b = {
              get defaultValue() {
                return _.defaultValue;
              },
              get maxValue() {
                return null === m ? _.maxValue : m;
              },
              get minValue() {
                return null === g ? _.minValue : g;
              },
              get value() {
                return _.value;
              },
              set value(t) {
                (_.value = t), b.setValueAtTime(t, p.context.currentTime);
              },
              cancelAndHoldAtTime(t) {
                if ("function" == typeof _.cancelAndHoldAtTime)
                  null === y && v.flush(p.context.currentTime),
                    v.add(o(t)),
                    _.cancelAndHoldAtTime(t);
                else {
                  const e = Array.from(v).pop();
                  null === y && v.flush(p.context.currentTime), v.add(o(t));
                  const n = Array.from(v).pop();
                  _.cancelScheduledValues(t),
                    e !== n &&
                      void 0 !== n &&
                      ("exponentialRampToValue" === n.type
                        ? _.exponentialRampToValueAtTime(n.value, n.endTime)
                        : "linearRampToValue" === n.type
                        ? _.linearRampToValueAtTime(n.value, n.endTime)
                        : "setValue" === n.type
                        ? _.setValueAtTime(n.value, n.startTime)
                        : "setValueCurve" === n.type &&
                          _.setValueCurveAtTime(
                            n.values,
                            n.startTime,
                            n.duration
                          ));
                }
                return b;
              },
              cancelScheduledValues: (t) => (
                null === y && v.flush(p.context.currentTime),
                v.add(r(t)),
                _.cancelScheduledValues(t),
                b
              ),
              exponentialRampToValueAtTime: (t, e) => (
                null === y && v.flush(p.context.currentTime),
                v.add(a(t, e)),
                _.exponentialRampToValueAtTime(t, e),
                b
              ),
              linearRampToValueAtTime: (t, e) => (
                null === y && v.flush(p.context.currentTime),
                v.add(c(t, e)),
                _.linearRampToValueAtTime(t, e),
                b
              ),
              setTargetAtTime: (t, e, n) => (
                null === y && v.flush(p.context.currentTime),
                v.add(u(t, e, n)),
                _.setTargetAtTime(t, e, n),
                b
              ),
              setValueAtTime: (t, e) => (
                null === y && v.flush(p.context.currentTime),
                v.add(h(t, e)),
                _.setValueAtTime(t, e),
                b
              ),
              setValueCurveAtTime(t, e, n) {
                if (null !== d && "webkitAudioContext" === d.name) {
                  const s = e + n,
                    i = p.context.sampleRate,
                    o = Math.ceil(e * i),
                    r = Math.floor(s * i),
                    a = r - o,
                    c = new Float32Array(a);
                  for (let s = 0; s < a; s += 1) {
                    const r = ((t.length - 1) / n) * ((o + s) / i - e),
                      a = Math.floor(r),
                      u = Math.ceil(r);
                    c[s] =
                      a === u
                        ? t[a]
                        : (1 - (r - a)) * t[a] + (1 - (u - r)) * t[u];
                  }
                  null === y && v.flush(p.context.currentTime),
                    v.add(l(c, e, n)),
                    _.setValueCurveAtTime(c, e, n);
                  const u = r / i;
                  u < s && b.setValueAtTime(c[c.length - 1], u),
                    b.setValueAtTime(t[t.length - 1], s);
                } else
                  null === y && v.flush(p.context.currentTime),
                    v.add(l(t, e, n)),
                    _.setValueCurveAtTime(t, e, n);
                return b;
              },
            };
          return n.set(b, _), e.set(b, p), t(b, y), b;
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => ({
        replay(e) {
          for (const n of t)
            if ("exponentialRampToValue" === n.type) {
              const { endTime: t, value: s } = n;
              e.exponentialRampToValueAtTime(s, t);
            } else if ("linearRampToValue" === n.type) {
              const { endTime: t, value: s } = n;
              e.linearRampToValueAtTime(s, t);
            } else if ("setTarget" === n.type) {
              const { startTime: t, target: s, timeConstant: i } = n;
              e.setTargetAtTime(s, t, i);
            } else if ("setValue" === n.type) {
              const { startTime: t, value: s } = n;
              e.setValueAtTime(s, t);
            } else {
              if ("setValueCurve" !== n.type)
                throw new Error("Can't apply an unknown automation.");
              {
                const { duration: t, startTime: s, values: i } = n;
                e.setValueCurveAtTime(i, s, t);
              }
            }
        },
      });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var s = n(0),
        i = n(40);
      const o = {
          channelCount: 2,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 1,
          numberOfOutputs: 1,
          outputChannelCount: void 0,
          parameterData: {},
          processorOptions: {},
        },
        r = (t) => {
          const e = [];
          for (let n = 0; n < t; n += 1) e.push(1);
          return e;
        },
        a = (t, e, n, a, c, u, h, l, d) =>
          class extends e {
            constructor(e, d, p = o) {
              const f = u(e),
                _ = h(f),
                m = ((t) => ({
                  ...t,
                  outputChannelCount:
                    void 0 !== t.outputChannelCount
                      ? t.outputChannelCount
                      : 1 === t.numberOfInputs && 1 === t.numberOfOutputs
                      ? [t.channelCount]
                      : r(t.numberOfOutputs),
                }))({
                  ...o,
                  ...p,
                }),
                g = s.j.get(f),
                v = void 0 === g ? void 0 : g.get(d),
                y = c(f, _ ? null : e.baseLatency, l, d, v, m);
              super(e, !0, y, _ ? a(d, m, v) : null);
              const b = [];
              y.parameters.forEach((t, e) => {
                const s = n(this, _, t);
                b.push([e, s]);
              }),
                (this._nativeAudioWorkletNode = y),
                (this._onprocessorerror = null),
                (this._parameters = new i.a(b)),
                _ && t(f, this);
            }
            get onprocessorerror() {
              return this._onprocessorerror;
            }
            set onprocessorerror(t) {
              const e = "function" == typeof t ? d(this, t) : null;
              this._nativeAudioWorkletNode.onprocessorerror = e;
              const n = this._nativeAudioWorkletNode.onprocessorerror;
              this._onprocessorerror = null !== n && n === e ? t : n;
            }
            get parameters() {
              return null === this._parameters
                ? this._nativeAudioWorkletNode.parameters
                : this._parameters;
            }
            get port() {
              return this._nativeAudioWorkletNode.port;
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n, s, i, o, r, a, c, u, h, l, d, p, f, _, m, g, v, y) =>
        class extends f {
          constructor(e, n) {
            super(e, n),
              (this._nativeContext = e),
              (this._audioWorklet =
                void 0 === t
                  ? void 0
                  : {
                      addModule: (e, n) => t(this, e, n),
                    });
          }
          get audioWorklet() {
            return this._audioWorklet;
          }
          createAnalyser() {
            return new e(this);
          }
          createBiquadFilter() {
            return new i(this);
          }
          createBuffer(t, e, s) {
            return new n({
              length: e,
              numberOfChannels: t,
              sampleRate: s,
            });
          }
          createBufferSource() {
            return new s(this);
          }
          createChannelMerger(t = 6) {
            return new o(this, {
              numberOfInputs: t,
            });
          }
          createChannelSplitter(t = 6) {
            return new r(this, {
              numberOfOutputs: t,
            });
          }
          createConstantSource() {
            return new a(this);
          }
          createConvolver() {
            return new c(this);
          }
          createDelay(t = 1) {
            return new h(this, {
              maxDelayTime: t,
            });
          }
          createDynamicsCompressor() {
            return new l(this);
          }
          createGain() {
            return new d(this);
          }
          createIIRFilter(t, e) {
            return new p(this, {
              feedback: e,
              feedforward: t,
            });
          }
          createOscillator() {
            return new _(this);
          }
          createPanner() {
            return new m(this);
          }
          createPeriodicWave(
            t,
            e,
            n = {
              disableNormalization: !1,
            }
          ) {
            return new g(this, {
              ...n,
              imag: e,
              real: t,
            });
          }
          createStereoPanner() {
            return new v(this);
          }
          createWaveShaper() {
            return new y(this);
          }
          decodeAudioData(t, e, n) {
            return u(this._nativeContext, t)
              .then((t) => ("function" == typeof e && e(t), t))
              .catch((t) => {
                throw ("function" == typeof n && n(t), t);
              });
          }
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(2);
      const i = {
          Q: 1,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          detune: 0,
          frequency: 350,
          gain: 0,
          type: "lowpass",
        },
        o = (t, e, n, o, r, a, c) =>
          class extends t {
            constructor(t, o = i) {
              const u = a(t),
                h = {
                  ...i,
                  ...o,
                },
                l = r(u, h),
                d = c(u);
              super(t, !1, l, d ? n() : null),
                (this._Q = e(this, d, l.Q, s.b, s.a)),
                (this._detune = e(
                  this,
                  d,
                  l.detune,
                  1200 * Math.log2(s.b),
                  -1200 * Math.log2(s.b)
                )),
                (this._frequency = e(
                  this,
                  d,
                  l.frequency,
                  t.sampleRate / 2,
                  0
                )),
                (this._gain = e(this, d, l.gain, 40 * Math.log10(s.b), s.a)),
                (this._nativeBiquadFilterNode = l);
            }
            get detune() {
              return this._detune;
            }
            get frequency() {
              return this._frequency;
            }
            get gain() {
              return this._gain;
            }
            get Q() {
              return this._Q;
            }
            get type() {
              return this._nativeBiquadFilterNode.type;
            }
            set type(t) {
              this._nativeBiquadFilterNode.type = t;
            }
            getFrequencyResponse(t, e, n) {
              if (
                (this._nativeBiquadFilterNode.getFrequencyResponse(t, e, n),
                t.length !== e.length || e.length !== n.length)
              )
                throw o();
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(3);
      const i = (t, e, n, i, o) => () => {
        const r = new WeakMap();
        return {
          render(a, c, u) {
            const h = r.get(c);
            return void 0 !== h
              ? Promise.resolve(h)
              : (async (a, c, u) => {
                  let h = n(a);
                  const l = Object(s.a)(h, c);
                  if (!l) {
                    const t = {
                      Q: h.Q.value,
                      channelCount: h.channelCount,
                      channelCountMode: h.channelCountMode,
                      channelInterpretation: h.channelInterpretation,
                      detune: h.detune.value,
                      frequency: h.frequency.value,
                      gain: h.gain.value,
                      type: h.type,
                    };
                    h = e(c, t);
                  }
                  return (
                    r.set(c, h),
                    l
                      ? (await t(c, a.Q, h.Q, u),
                        await t(c, a.detune, h.detune, u),
                        await t(c, a.frequency, h.frequency, u),
                        await t(c, a.gain, h.gain, u))
                      : (await i(c, a.Q, h.Q, u),
                        await i(c, a.detune, h.detune, u),
                        await i(c, a.frequency, h.frequency, u),
                        await i(c, a.gain, h.gain, u)),
                    await o(a, c, h, u),
                    h
                  );
                })(a, c, u);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n, s) => {
        const i = e.get(n);
        if (void 0 !== i) return i;
        const o = t.get(n);
        if (void 0 !== o) return o;
        try {
          const i = s();
          return i instanceof Promise
            ? (t.set(n, i),
              i.catch(() => !1).then((s) => (t.delete(n), e.set(n, s), s)))
            : (e.set(n, i), i);
        } catch {
          return e.set(n, !1), !1;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      const s = {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 6,
        },
        i = (t, e, n, i, o) =>
          class extends t {
            constructor(t, r = s) {
              const a = i(t),
                c = {
                  ...s,
                  ...r,
                };
              super(t, !1, n(a, c), o(a) ? e() : null);
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(3);
      const i = (t, e, n) => () => {
        const i = new WeakMap();
        return {
          render(o, r, a) {
            const c = i.get(r);
            return void 0 !== c
              ? Promise.resolve(c)
              : (async (o, r, a) => {
                  let c = e(o);
                  if (!Object(s.a)(c, r)) {
                    const e = {
                      channelCount: c.channelCount,
                      channelCountMode: c.channelCountMode,
                      channelInterpretation: c.channelInterpretation,
                      numberOfInputs: c.numberOfInputs,
                    };
                    c = t(r, e);
                  }
                  return i.set(r, c), await n(o, r, c, a), c;
                })(o, r, a);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      const s = {
          channelCount: 6,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          numberOfOutputs: 6,
        },
        i = (t, e, n, i, o) =>
          class extends t {
            constructor(t, r = s) {
              const a = i(t),
                c = ((t) => ({
                  ...t,
                  channelCount: t.numberOfOutputs,
                }))({
                  ...s,
                  ...r,
                });
              super(t, !1, n(a, c), o(a) ? e() : null);
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(3);
      const i = (t, e, n) => () => {
        const i = new WeakMap();
        return {
          render(o, r, a) {
            const c = i.get(r);
            return void 0 !== c
              ? Promise.resolve(c)
              : (async (o, r, a) => {
                  let c = e(o);
                  if (!Object(s.a)(c, r)) {
                    const e = {
                      channelCount: c.channelCount,
                      channelCountMode: c.channelCountMode,
                      channelInterpretation: c.channelInterpretation,
                      numberOfOutputs: c.numberOfOutputs,
                    };
                    c = t(r, e);
                  }
                  return i.set(r, c), await n(o, r, c, a), c;
                })(o, r, a);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n, s, i) => t(n, e, s, i);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(25);
      const i =
        (t) =>
        (e, n, i = 0, o = 0) => {
          const r = e[i];
          if (void 0 === r) throw t();
          return Object(s.a)(n) ? r.connect(n, 0, o) : r.connect(n, 0);
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n) => {
        const s = t(e),
          i = e.createBuffer(1, 2, e.sampleRate);
        return (
          (s.buffer = i),
          (s.loop = !0),
          s.connect(n),
          s.start(),
          () => {
            s.stop(), s.disconnect(n);
          }
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var s = n(2),
        i = n(17),
        o = n(21);
      const r = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          offset: 1,
        },
        a = (t, e, n, a, c, u, h) =>
          class extends t {
            constructor(t, i = r) {
              const o = c(t),
                h = {
                  ...r,
                  ...i,
                },
                l = a(o, h),
                d = u(o),
                p = d ? n() : null;
              super(t, !1, l, p),
                (this._constantSourceNodeRenderer = p),
                (this._nativeConstantSourceNode = l),
                (this._offset = e(this, d, l.offset, s.b, s.a)),
                (this._onended = null);
            }
            get offset() {
              return this._offset;
            }
            get onended() {
              return this._onended;
            }
            set onended(t) {
              const e = "function" == typeof t ? h(this, t) : null;
              this._nativeConstantSourceNode.onended = e;
              const n = this._nativeConstantSourceNode.onended;
              this._onended = null !== n && n === e ? t : n;
            }
            start(t = 0) {
              if (
                (this._nativeConstantSourceNode.start(t),
                null !== this._constantSourceNodeRenderer)
              )
                this._constantSourceNodeRenderer.start = t;
              else {
                Object(i.a)(this);
                const t = () => {
                  this._nativeConstantSourceNode.removeEventListener(
                    "ended",
                    t
                  ),
                    setTimeout(() => Object(o.a)(this), 1e3);
                };
                this._nativeConstantSourceNode.addEventListener("ended", t);
              }
            }
            stop(t = 0) {
              this._nativeConstantSourceNode.stop(t),
                null !== this._constantSourceNodeRenderer &&
                  (this._constantSourceNodeRenderer.stop = t);
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(3);
      const i = (t, e, n, i, o) => () => {
        const r = new WeakMap();
        let a = null,
          c = null;
        return {
          set start(t) {
            a = t;
          },
          set stop(t) {
            c = t;
          },
          render(u, h, l) {
            const d = r.get(h);
            return void 0 !== d
              ? Promise.resolve(d)
              : (async (u, h, l) => {
                  let d = n(u);
                  const p = Object(s.a)(d, h);
                  if (!p) {
                    const t = {
                      channelCount: d.channelCount,
                      channelCountMode: d.channelCountMode,
                      channelInterpretation: d.channelInterpretation,
                      offset: d.offset.value,
                    };
                    (d = e(h, t)),
                      null !== a && d.start(a),
                      null !== c && d.stop(c);
                  }
                  return (
                    r.set(h, d),
                    p
                      ? await t(h, u.offset, d.offset, l)
                      : await i(h, u.offset, d.offset, l),
                    await o(u, h, d, l),
                    d
                  );
                })(u, h, l);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => ((t[0] = e), t[0]);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      const s = {
          buffer: null,
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          disableNormalization: !1,
        },
        i = (t, e, n, i, o) =>
          class extends t {
            constructor(t, r = s) {
              const a = i(t),
                c = {
                  ...s,
                  ...r,
                },
                u = n(a, c);
              super(t, !1, u, o(a) ? e() : null),
                (this._isBufferNullified = !1),
                (this._nativeConvolverNode = u);
            }
            get buffer() {
              return this._isBufferNullified
                ? null
                : this._nativeConvolverNode.buffer;
            }
            set buffer(t) {
              if (
                ((this._nativeConvolverNode.buffer = t),
                null === t && null !== this._nativeConvolverNode.buffer)
              ) {
                const t = this._nativeConvolverNode.context;
                (this._nativeConvolverNode.buffer = t.createBuffer(
                  1,
                  1,
                  t.sampleRate
                )),
                  (this._isBufferNullified = !0);
              } else this._isBufferNullified = !1;
            }
            get normalize() {
              return this._nativeConvolverNode.normalize;
            }
            set normalize(t) {
              this._nativeConvolverNode.normalize = t;
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(12),
        i = n(3);
      const o = (t, e, n) => () => {
        const o = new WeakMap();
        return {
          render(r, a, c) {
            const u = o.get(a);
            return void 0 !== u
              ? Promise.resolve(u)
              : (async (r, a, c) => {
                  let u = e(r);
                  if (!Object(i.a)(u, a)) {
                    const e = {
                      buffer: u.buffer,
                      channelCount: u.channelCount,
                      channelCountMode: u.channelCountMode,
                      channelInterpretation: u.channelInterpretation,
                      disableNormalization: !u.normalize,
                    };
                    u = t(a, e);
                  }
                  return (
                    o.set(a, u),
                    Object(s.a)(u)
                      ? await n(r, a, u.inputs[0], c)
                      : await n(r, a, u, c),
                    u
                  );
                })(r, a, c);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n, s, i) => {
        if (null === e)
          throw new Error(
            "Missing the native OfflineAudioContext constructor."
          );
        try {
          return new e(n, s, i);
        } catch (e) {
          if ("IndexSizeError" === e.name || "SyntaxError" === e.name)
            throw t();
          throw e;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = () => {
        try {
          return new DOMException("", "DataCloneError");
        } catch (t) {
          return (t.code = 25), (t.name = "DataCloneError"), t;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(22);
      const i = (t, e, n, i, o, r, a, c) => (u, h) => {
        const l = e.get(u);
        if (void 0 === l) throw new Error("Missing the expected cycle count.");
        const d = r(u.context),
          p = c(d);
        if (l === h) {
          if ((e.delete(u), !p && a(u))) {
            const e = i(u),
              { outputs: r } = n(u);
            for (const n of r)
              if (Object(s.a)(n)) {
                const s = i(n[0]);
                t(e, s, n[1], n[2]);
              } else {
                const t = o(n[0]);
                e.connect(t, n[1]);
              }
          }
        } else e.set(u, l - h);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      const s = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          delayTime: 0,
          maxDelayTime: 1,
        },
        i = (t, e, n, i, o, r) =>
          class extends t {
            constructor(t, a = s) {
              const c = o(t),
                u = {
                  ...s,
                  ...a,
                },
                h = i(c, u),
                l = r(c);
              super(t, !1, h, l ? n(u.maxDelayTime) : null),
                (this._delayTime = e(this, l, h.delayTime, u.maxDelayTime, 0));
            }
            get delayTime() {
              return this._delayTime;
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(3);
      const i = (t, e, n, i, o) => (r) => {
        const a = new WeakMap();
        return {
          render(c, u, h) {
            const l = a.get(u);
            return void 0 !== l
              ? Promise.resolve(l)
              : (async (c, u, h) => {
                  let l = n(c);
                  const d = Object(s.a)(l, u);
                  if (!d) {
                    const t = {
                      channelCount: l.channelCount,
                      channelCountMode: l.channelCountMode,
                      channelInterpretation: l.channelInterpretation,
                      delayTime: l.delayTime.value,
                      maxDelayTime: r,
                    };
                    l = e(u, t);
                  }
                  return (
                    a.set(u, l),
                    d
                      ? await t(u, c.delayTime, l.delayTime, h)
                      : await i(u, c.delayTime, l.delayTime, h),
                    await o(c, u, l, h),
                    l
                  );
                })(c, u, h);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n) => {
        t(e).delete(n);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(25);
      const i = (t, e, n) => {
          const s = e[n];
          if (void 0 === s) throw t();
          return s;
        },
        o =
          (t) =>
          (e, n, o, r = 0) =>
            void 0 === n
              ? e.forEach((t) => t.disconnect())
              : "number" == typeof n
              ? i(t, e, n).disconnect()
              : Object(s.a)(n)
              ? void 0 === o
                ? e.forEach((t) => t.disconnect(n))
                : void 0 === r
                ? i(t, e, o).disconnect(n, 0)
                : i(t, e, o).disconnect(n, 0, r)
              : void 0 === o
              ? e.forEach((t) => t.disconnect(n))
              : i(t, e, o).disconnect(n, 0);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      const s = {
          attack: 0.003,
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          knee: 30,
          ratio: 12,
          release: 0.25,
          threshold: -24,
        },
        i = (t, e, n, i, o, r, a) =>
          class extends t {
            constructor(t, o = s) {
              const c = r(t),
                u = {
                  ...s,
                  ...o,
                },
                h = i(c, u),
                l = a(c);
              super(t, !1, h, l ? n() : null),
                (this._attack = e(this, l, h.attack, 1, 0)),
                (this._knee = e(this, l, h.knee, 40, 0)),
                (this._nativeDynamicsCompressorNode = h),
                (this._ratio = e(this, l, h.ratio, 20, 1)),
                (this._release = e(this, l, h.release, 1, 0)),
                (this._threshold = e(this, l, h.threshold, 0, -100));
            }
            get attack() {
              return this._attack;
            }
            get channelCount() {
              return this._nativeDynamicsCompressorNode.channelCount;
            }
            set channelCount(t) {
              const e = this._nativeDynamicsCompressorNode.channelCount;
              if (
                ((this._nativeDynamicsCompressorNode.channelCount = t), t > 2)
              )
                throw (
                  ((this._nativeDynamicsCompressorNode.channelCount = e), o())
                );
            }
            get channelCountMode() {
              return this._nativeDynamicsCompressorNode.channelCountMode;
            }
            set channelCountMode(t) {
              const e = this._nativeDynamicsCompressorNode.channelCountMode;
              if (
                ((this._nativeDynamicsCompressorNode.channelCountMode = t),
                "max" === t)
              )
                throw (
                  ((this._nativeDynamicsCompressorNode.channelCountMode = e),
                  o())
                );
            }
            get knee() {
              return this._knee;
            }
            get ratio() {
              return this._ratio;
            }
            get reduction() {
              return "number" ==
                typeof this._nativeDynamicsCompressorNode.reduction.value
                ? this._nativeDynamicsCompressorNode.reduction.value
                : this._nativeDynamicsCompressorNode.reduction;
            }
            get release() {
              return this._release;
            }
            get threshold() {
              return this._threshold;
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(3);
      const i = (t, e, n, i, o) => () => {
        const r = new WeakMap();
        return {
          render(a, c, u) {
            const h = r.get(c);
            return void 0 !== h
              ? Promise.resolve(h)
              : (async (a, c, u) => {
                  let h = n(a);
                  const l = Object(s.a)(h, c);
                  if (!l) {
                    const t = {
                      attack: h.attack.value,
                      channelCount: h.channelCount,
                      channelCountMode: h.channelCountMode,
                      channelInterpretation: h.channelInterpretation,
                      knee: h.knee.value,
                      ratio: h.ratio.value,
                      release: h.release.value,
                      threshold: h.threshold.value,
                    };
                    h = e(c, t);
                  }
                  return (
                    r.set(c, h),
                    l
                      ? (await t(c, a.attack, h.attack, u),
                        await t(c, a.knee, h.knee, u),
                        await t(c, a.ratio, h.ratio, u),
                        await t(c, a.release, h.release, u),
                        await t(c, a.threshold, h.threshold, u))
                      : (await i(c, a.attack, h.attack, u),
                        await i(c, a.knee, h.knee, u),
                        await i(c, a.ratio, h.ratio, u),
                        await i(c, a.release, h.release, u),
                        await i(c, a.threshold, h.threshold, u)),
                    await o(a, c, h, u),
                    h
                  );
                })(a, c, u);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = () => {
        try {
          return new DOMException("", "EncodingError");
        } catch (t) {
          return (t.code = 0), (t.name = "EncodingError"), t;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) =>
        new Promise((n, s) => {
          if (null === t) return void s(new SyntaxError());
          const i = t.document.head;
          if (null === i) s(new SyntaxError());
          else {
            const o = t.document.createElement("script"),
              r = new Blob([e], {
                type: "application/javascript",
              }),
              a = URL.createObjectURL(r),
              c = t.onerror,
              u = () => {
                (t.onerror = c), URL.revokeObjectURL(a);
              };
            (t.onerror = (e, n, i, o, r) =>
              n === a || (n === t.location.href && 1 === i && 1 === o)
                ? (u(), s(r), !1)
                : null !== c
                ? c(e, n, i, o, r)
                : void 0),
              (o.onerror = () => {
                u(), s(new SyntaxError());
              }),
              (o.onload = () => {
                u(), n();
              }),
              (o.src = a),
              (o.type = "module"),
              i.appendChild(o);
          }
        });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) =>
        class {
          constructor(t) {
            (this._nativeEventTarget = t), (this._listeners = new WeakMap());
          }
          addEventListener(e, n, s) {
            if (null !== n) {
              let i = this._listeners.get(n);
              void 0 === i &&
                ((i = t(this, n)),
                "function" == typeof n && this._listeners.set(n, i)),
                this._nativeEventTarget.addEventListener(e, i, s);
            }
          }
          dispatchEvent(t) {
            return this._nativeEventTarget.dispatchEvent(t);
          }
          removeEventListener(t, e, n) {
            const s = null === e ? void 0 : this._listeners.get(e);
            this._nativeEventTarget.removeEventListener(
              t,
              void 0 === s ? null : s,
              n
            );
          }
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n, s) => {
        Object.defineProperties(t, {
          currentFrame: {
            configurable: !0,
            get: () => Math.round(e * n),
          },
          currentTime: {
            configurable: !0,
            get: () => e,
          },
        });
        try {
          return s();
        } finally {
          null !== t && (delete t.currentFrame, delete t.currentTime);
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => async (e) => {
        try {
          const t = await fetch(e);
          if (t.ok) return t.text();
        } catch {}
        throw t();
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(2);
      const i = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          gain: 1,
        },
        o = (t, e, n, o, r, a) =>
          class extends t {
            constructor(t, c = i) {
              const u = r(t),
                h = {
                  ...i,
                  ...c,
                },
                l = o(u, h),
                d = a(u);
              super(t, !1, l, d ? n() : null),
                (this._gain = e(this, d, l.gain, s.b, s.a));
            }
            get gain() {
              return this._gain;
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(3);
      const i = (t, e, n, i, o) => () => {
        const r = new WeakMap();
        return {
          render(a, c, u) {
            const h = r.get(c);
            return void 0 !== h
              ? Promise.resolve(h)
              : (async (a, c, u) => {
                  let h = n(a);
                  const l = Object(s.a)(h, c);
                  if (!l) {
                    const t = {
                      channelCount: h.channelCount,
                      channelCountMode: h.channelCountMode,
                      channelInterpretation: h.channelInterpretation,
                      gain: h.gain.value,
                    };
                    h = e(c, t);
                  }
                  return (
                    r.set(c, h),
                    l
                      ? await t(c, a.gain, h.gain, u)
                      : await i(c, a.gain, h.gain, u),
                    await o(a, c, h, u),
                    h
                  );
                })(a, c, u);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => {
        const n = t(e);
        if (null === n.renderer)
          throw new Error(
            "Missing the renderer of the given AudioNode in the audio graph."
          );
        return n.renderer;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => {
        const n = t(e);
        if (null === n.renderer)
          throw new Error(
            "Missing the renderer of the given AudioParam in the audio graph."
          );
        return n.renderer;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(0);
      const i = (t, e, n) => (i) => {
        if (
          "closed" === i.state &&
          null !== e &&
          "webkitAudioContext" !== e.name
        ) {
          if (!t(i)) {
            const t = s.f.get(i);
            if (void 0 !== t) return t;
            const n = new e();
            return s.f.set(i, n), n;
          }
          {
            const t = s.f.get(i);
            if (void 0 !== t) return t;
            if (null !== n) {
              const t = new n(1, 1, 44100);
              return s.f.set(i, t), t;
            }
          }
        }
        return null;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(7);
      const i = (t) => (e) => {
        const n = t.get(e);
        if (void 0 === n) throw Object(s.a)();
        return n;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => {
        const n = t.get(e);
        if (void 0 === n)
          throw new Error("The context has no set of AudioWorkletNodes.");
        return n;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(42),
        i = n(3);
      const o = (t, e, n, o, r, a) => (c, u) => {
        const h = new WeakMap();
        let l = null;
        const d = async (d, p, f) => {
          let _ = null,
            m = n(d);
          const g = Object(i.a)(m, p);
          if (
            (void 0 === p.createIIRFilter
              ? (_ = t(p))
              : g || (m = e(p, (t) => t.createIIRFilter(u, c))),
            h.set(p, null === _ ? m : _),
            null !== _)
          ) {
            if (null === l) {
              if (null === o)
                throw new Error(
                  "Missing the native OfflineAudioContext constructor."
                );
              const t = new o(
                d.context.destination.channelCount,
                d.context.length,
                p.sampleRate
              );
              l = (async () => (
                await r(d, t, t.destination, f),
                ((t, e, n, i) => {
                  const o = n.length,
                    r = i.length,
                    a = Math.min(o, r);
                  if (1 !== n[0]) {
                    for (let t = 0; t < o; t += 1) i[t] /= n[0];
                    for (let t = 1; t < r; t += 1) n[t] /= n[0];
                  }
                  const c = new Float32Array(32),
                    u = new Float32Array(32),
                    h = e.createBuffer(
                      t.numberOfChannels,
                      t.length,
                      t.sampleRate
                    ),
                    l = t.numberOfChannels;
                  for (let e = 0; e < l; e += 1) {
                    const l = t.getChannelData(e),
                      d = h.getChannelData(e);
                    c.fill(0),
                      u.fill(0),
                      Object(s.a)(n, o, i, r, a, c, u, 0, 32, l, d);
                  }
                  return h;
                })(await a(t), p, c, u)
              ))();
            }
            const t = await l;
            return (_.buffer = t), _.start(0), _;
          }
          return await r(d, p, m, f), m;
        };
        return {
          render(t, e, n) {
            const s = h.get(e);
            return void 0 !== s ? Promise.resolve(s) : d(t, e, n);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(22);
      const i = (t, e, n, i, o, r) => (a) => (c, u) => {
        const h = t.get(c);
        if (void 0 === h) {
          if (!a && r(c)) {
            const t = i(c),
              { outputs: r } = n(c);
            for (const n of r)
              if (Object(s.a)(n)) {
                const s = i(n[0]);
                e(t, s, n[1], n[2]);
              } else {
                const e = o(n[0]);
                t.disconnect(e, n[1]);
              }
          }
          t.set(c, u);
        } else t.set(c, h + u);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n) => {
        const s = t.get(n);
        return e(s) || e(n);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n) => t.has(n) || e(n);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n) => t.has(n) || e(n);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n) => {
        const s = t.get(n);
        return e(s) || e(n);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => null !== t && e instanceof t;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) =>
        null !== t &&
        "function" == typeof t.AudioNode &&
        e instanceof t.AudioNode;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) =>
        null !== t &&
        "function" == typeof t.AudioParam &&
        e instanceof t.AudioParam;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n) => t(n) || e(n);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => null !== t && e instanceof t;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => null !== t && t.isSecureContext;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = async (t, e, n, s, i, o, r, a, c, u, h, l, d, p) => {
        if (
          t(e, e) &&
          t(n, n) &&
          t(i, i) &&
          t(o, o) &&
          t(a, a) &&
          t(c, c) &&
          t(u, u) &&
          t(h, h) &&
          t(l, l)
        ) {
          return (
            await Promise.all([t(s, s), t(r, r), t(d, d), t(p, p)])
          ).every((t) => t);
        }
        return !1;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n, s) =>
        class extends t {
          constructor(t, i) {
            const o = n(t),
              r = e(o, i);
            if (s(o)) throw TypeError();
            super(t, !0, r, null),
              (this._mediaElement = i.mediaElement),
              (this._nativeMediaElementAudioSourceNode = r);
          }
          get mediaElement() {
            return void 0 ===
              this._nativeMediaElementAudioSourceNode.mediaElement
              ? this._mediaElement
              : this._nativeMediaElementAudioSourceNode.mediaElement;
          }
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      const s = {
          channelCount: 2,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
        },
        i = (t, e, n, i) =>
          class extends t {
            constructor(t, o = s) {
              const r = n(t);
              if (i(r)) throw new TypeError();
              const a = {
                  ...s,
                  ...o,
                },
                c = e(r, a);
              super(t, !1, c, null),
                (this._nativeMediaStreamAudioDestinationNode = c);
            }
            get stream() {
              return this._nativeMediaStreamAudioDestinationNode.stream;
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n, s) =>
        class extends t {
          constructor(t, i) {
            const o = n(t),
              r = e(o, i);
            if (s(o)) throw new TypeError();
            super(t, !0, r, null), (this._nativeMediaStreamAudioSourceNode = r);
          }
          get mediaStream() {
            return this._nativeMediaStreamAudioSourceNode.mediaStream;
          }
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n) =>
        class extends t {
          constructor(t, s) {
            const i = n(t);
            super(t, !0, e(i, s), null);
          }
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(39);
      const i = (t, e, n, i, o) =>
        class extends i {
          constructor(t = {}) {
            if (null === o)
              throw new Error("Missing the native AudioContext constructor.");
            const i = new o(t);
            if (null === i) throw n();
            if (!Object(s.a)(t.latencyHint))
              throw new TypeError(
                `The provided value '${t.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
              );
            if (void 0 !== t.sampleRate && i.sampleRate !== t.sampleRate)
              throw e();
            super(i, 2);
            const { latencyHint: r } = t,
              { sampleRate: a } = i;
            if (
              ((this._baseLatency =
                "number" == typeof i.baseLatency
                  ? i.baseLatency
                  : "balanced" === r
                  ? 512 / a
                  : "interactive" === r || void 0 === r
                  ? 256 / a
                  : "playback" === r
                  ? 1024 / a
                  : (128 *
                      Math.max(2, Math.min(128, Math.round((r * a) / 128)))) /
                    a),
              (this._nativeAudioContext = i),
              (this._state = null),
              "running" === i.state)
            ) {
              this._state = "suspended";
              const t = () => {
                "suspended" === this._state && (this._state = null),
                  i.removeEventListener("statechange", t);
              };
              i.addEventListener("statechange", t);
            }
          }
          get baseLatency() {
            return this._baseLatency;
          }
          get state() {
            return null !== this._state
              ? this._state
              : this._nativeAudioContext.state;
          }
          close() {
            return "closed" === this.state
              ? this._nativeAudioContext.close().then(() => {
                  throw t();
                })
              : ("suspended" === this._state && (this._state = null),
                this._nativeAudioContext.close());
          }
          resume() {
            return "suspended" === this._state
              ? new Promise((t, e) => {
                  const n = () => {
                    this._nativeAudioContext.removeEventListener(
                      "statechange",
                      n
                    ),
                      "running" === this._nativeAudioContext.state
                        ? t()
                        : this.resume().then(t, e);
                  };
                  this._nativeAudioContext.addEventListener("statechange", n);
                })
              : this._nativeAudioContext.resume().catch((e) => {
                  if (void 0 === e || 15 === e.code) throw t();
                  throw e;
                });
          }
          suspend() {
            return this._nativeAudioContext.suspend().catch((e) => {
              if (void 0 === e) throw t();
              throw e;
            });
          }
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(0);
      const i = (t, e, n, i, o, r) =>
        class extends n {
          constructor(n, r) {
            super(n), (this._nativeContext = n), s.g.set(this, n);
            const a = n.sampleRate;
            Object.defineProperty(n, "sampleRate", {
              get: () => a,
            }),
              i(n) && o.set(n, new Set()),
              (this._destination = new t(this, r)),
              (this._listener = e(this, n)),
              (this._onstatechange = null);
          }
          get currentTime() {
            return this._nativeContext.currentTime;
          }
          get destination() {
            return this._destination;
          }
          get listener() {
            return this._listener;
          }
          get onstatechange() {
            return this._onstatechange;
          }
          set onstatechange(t) {
            const e = "function" == typeof t ? r(this, t) : null;
            this._nativeContext.onstatechange = e;
            const n = this._nativeContext.onstatechange;
            this._onstatechange = null !== n && n === e ? t : n;
          }
          get sampleRate() {
            return this._nativeContext.sampleRate;
          }
          get state() {
            return this._nativeContext.state;
          }
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(14);
      const i = {
          numberOfChannels: 1,
        },
        o = (t, e, n, o, r) =>
          class extends o {
            constructor(e) {
              const {
                  length: o,
                  numberOfChannels: r,
                  sampleRate: a,
                } = {
                  ...i,
                  ...e,
                },
                c = n(r, o, a);
              t(s.a, () => Object(s.a)(c)) ||
                c.addEventListener(
                  "statechange",
                  (() => {
                    let t = 0;
                    const e = (n) => {
                      "running" === this._state &&
                        (t > 0
                          ? (c.removeEventListener("statechange", e),
                            n.stopImmediatePropagation(),
                            this._waitForThePromiseToSettle(n))
                          : (t += 1));
                    };
                    return e;
                  })()
                ),
                super(c, r),
                (this._length = o),
                (this._nativeOfflineAudioContext = c),
                (this._state = null);
            }
            get length() {
              return void 0 === this._nativeOfflineAudioContext.length
                ? this._length
                : this._nativeOfflineAudioContext.length;
            }
            get state() {
              return null === this._state
                ? this._nativeOfflineAudioContext.state
                : this._state;
            }
            startRendering() {
              return "running" === this._state
                ? Promise.reject(e())
                : ((this._state = "running"),
                  r(this.destination, this._nativeOfflineAudioContext)
                    .then((t) => ((this._state = null), t))
                    .catch((t) => {
                      throw ((this._state = null), t);
                    }));
            }
            _waitForThePromiseToSettle(t) {
              null === this._state
                ? this._nativeOfflineAudioContext.dispatchEvent(t)
                : setTimeout(() => this._waitForThePromiseToSettle(t));
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n, s, i) => {
        const o = new Set();
        var r, a;
        return (
          (n.connect =
            ((r = n.connect),
            (i, a = 0, c = 0) => {
              const u = 0 === o.size;
              if (e(i))
                return (
                  r.call(n, i, a, c),
                  t(
                    o,
                    [i, a, c],
                    (t) => t[0] === i && t[1] === a && t[2] === c,
                    !0
                  ),
                  u && s(),
                  i
                );
              r.call(n, i, a),
                t(o, [i, a], (t) => t[0] === i && t[1] === a, !0),
                u && s();
            })),
          (n.disconnect =
            ((a = n.disconnect),
            (t, s, r) => {
              const c = o.size > 0;
              if (void 0 === t) a.apply(n), o.clear();
              else if ("number" == typeof t) {
                a.call(n, t);
                for (const e of o) e[1] === t && o.delete(e);
              } else {
                e(t) ? a.call(n, t, s, r) : a.call(n, t, s);
                for (const e of o)
                  e[0] !== t ||
                    (void 0 !== s && e[1] !== s) ||
                    (void 0 !== r && e[2] !== r) ||
                    o.delete(e);
              }
              const u = 0 === o.size;
              c && u && i();
            })),
          n
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) =>
        null === t
          ? null
          : t.hasOwnProperty("AudioBuffer")
          ? t.AudioBuffer
          : null;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) =>
        null === t
          ? null
          : t.hasOwnProperty("AudioContext")
          ? t.AudioContext
          : t.hasOwnProperty("webkitAudioContext")
          ? t.webkitAudioContext
          : null;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n, s, i) => {
        const o = n.destination;
        if (o.channelCount !== s)
          try {
            o.channelCount = s;
          } catch {}
        i &&
          "explicit" !== o.channelCountMode &&
          (o.channelCountMode = "explicit"),
          0 === o.maxChannelCount &&
            Object.defineProperty(o, "maxChannelCount", {
              value: s,
            });
        const r = t(n, {
          channelCount: s,
          channelCountMode: o.channelCountMode,
          channelInterpretation: o.channelInterpretation,
          gain: 1,
        });
        return (
          e(
            r,
            "channelCount",
            (t) => () => t.call(r),
            (t) => (e) => {
              t.call(r, e);
              try {
                o.channelCount = e;
              } catch (t) {
                if (e > o.maxChannelCount) throw t;
              }
            }
          ),
          e(
            r,
            "channelCountMode",
            (t) => () => t.call(r),
            (t) => (e) => {
              t.call(r, e), (o.channelCountMode = e);
            }
          ),
          e(
            r,
            "channelInterpretation",
            (t) => () => t.call(r),
            (t) => (e) => {
              t.call(r, e), (o.channelInterpretation = e);
            }
          ),
          Object.defineProperty(r, "maxChannelCount", {
            get: () => o.maxChannelCount,
          }),
          r.connect(o),
          r
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n) => {
        const s = t(e);
        return n(null !== s ? s : e);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) =>
        null === t
          ? null
          : t.hasOwnProperty("AudioWorkletNode")
          ? t.AudioWorkletNode
          : null;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n(5),
        i = n(4),
        o = n(1);
      const r = (t) => (e, n) => {
        const r = t(e, (t) => t.createBiquadFilter());
        return (
          Object(o.a)(r, n),
          Object(s.a)(r, n, "Q"),
          Object(s.a)(r, n, "detune"),
          Object(s.a)(r, n, "frequency"),
          Object(s.a)(r, n, "gain"),
          Object(i.a)(r, n, "type"),
          r
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(1);
      const i = (t, e) => (n, i) => {
        const o = t(n, (t) => t.createChannelMerger(i.numberOfInputs));
        return (
          1 !== o.channelCount && "explicit" !== o.channelCountMode && e(n, o),
          Object(s.a)(o, i),
          o
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var s = n(5),
        i = n(1),
        o = n(30),
        r = n(31);
      const a = (t, e, n, a, c, u) => (h, l) => {
        if (void 0 === h.createConstantSource) return a(h, l);
        const d = n(h, (t) => t.createConstantSource());
        return (
          Object(i.a)(d, l),
          Object(s.a)(d, l, "offset"),
          e(c, () => c(h)) || Object(o.a)(d),
          e(u, () => u(h)) || Object(r.a)(d),
          t(h, d),
          d
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(11);
      const i =
        (t, e, n, i) =>
        (o, { offset: r, ...a }) => {
          const c = o.createBuffer(1, 2, o.sampleRate),
            u = e(o),
            h = n(o, {
              ...a,
              gain: r,
            }),
            l = c.getChannelData(0);
          (l[0] = 1), (l[1] = 1), (u.buffer = c), (u.loop = !0);
          const d = {
            get bufferSize() {},
            get channelCount() {
              return h.channelCount;
            },
            set channelCount(t) {
              h.channelCount = t;
            },
            get channelCountMode() {
              return h.channelCountMode;
            },
            set channelCountMode(t) {
              h.channelCountMode = t;
            },
            get channelInterpretation() {
              return h.channelInterpretation;
            },
            set channelInterpretation(t) {
              h.channelInterpretation = t;
            },
            get context() {
              return h.context;
            },
            get inputs() {
              return [];
            },
            get numberOfInputs() {
              return u.numberOfInputs;
            },
            get numberOfOutputs() {
              return h.numberOfOutputs;
            },
            get offset() {
              return h.gain;
            },
            get onended() {
              return u.onended;
            },
            set onended(t) {
              u.onended = t;
            },
            addEventListener: (...t) => u.addEventListener(t[0], t[1], t[2]),
            dispatchEvent: (...t) => u.dispatchEvent(t[0]),
            removeEventListener: (...t) =>
              u.removeEventListener(t[0], t[1], t[2]),
            start(t = 0) {
              u.start.call(u, t);
            },
            stop(t = 0) {
              u.stop.call(u, t);
            },
          };
          return (
            t(o, u),
            i(
              Object(s.a)(d, h),
              () => u.connect(h),
              () => u.disconnect(h)
            )
          );
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(4),
        i = n(1);
      const o = (t, e, n, o) => (r, a) => {
        const c = t(r, (t) => t.createConvolver());
        try {
          c.channelCount = 1;
        } catch (t) {
          return e(r, a);
        }
        if (
          (Object(i.a)(c, a),
          a.disableNormalization === c.normalize &&
            (c.normalize = !a.disableNormalization),
          Object(s.a)(c, a, "buffer"),
          a.channelCount > 2)
        )
          throw n();
        if (
          (o(
            c,
            "channelCount",
            (t) => () => t.call(c),
            (t) => (e) => {
              if (e > 2) throw n();
              return t.call(c, e);
            }
          ),
          "max" === a.channelCountMode)
        )
          throw n();
        return (
          o(
            c,
            "channelCountMode",
            (t) => () => t.call(c),
            (t) => (e) => {
              if ("max" === e) throw n();
              return t.call(c, e);
            }
          ),
          c
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(1),
        i = n(11);
      const o =
        (t, e, n) =>
        (
          o,
          {
            buffer: r,
            channelCount: a,
            channelCountMode: c,
            channelInterpretation: u,
            disableNormalization: h,
          }
        ) => {
          const l = t(o, (t) => t.createConvolver());
          Object(s.a)(l, {
            channelCount: Math.max(a, 2),
            channelCountMode: "max" === c ? c : "clamped-max",
            channelInterpretation: u,
          });
          const d = e(o, {
              channelCount: a,
              channelCountMode: c,
              channelInterpretation: u,
              gain: 1,
            }),
            p = {
              get buffer() {
                return l.buffer;
              },
              set buffer(t) {
                l.buffer = t;
              },
              get bufferSize() {},
              get channelCount() {
                return d.channelCount;
              },
              set channelCount(t) {
                t > 2 && (l.channelCount = t), (d.channelCount = t);
              },
              get channelCountMode() {
                return d.channelCountMode;
              },
              set channelCountMode(t) {
                "max" === t && (l.channelCountMode = t),
                  (d.channelCountMode = t);
              },
              get channelInterpretation() {
                return l.channelInterpretation;
              },
              set channelInterpretation(t) {
                (l.channelInterpretation = t), (d.channelInterpretation = t);
              },
              get context() {
                return l.context;
              },
              get inputs() {
                return [l];
              },
              get numberOfInputs() {
                return l.numberOfInputs;
              },
              get numberOfOutputs() {
                return l.numberOfOutputs;
              },
              get normalize() {
                return l.normalize;
              },
              set normalize(t) {
                l.normalize = t;
              },
              addEventListener: (...t) => l.addEventListener(t[0], t[1], t[2]),
              dispatchEvent: (...t) => l.dispatchEvent(t[0]),
              removeEventListener: (...t) =>
                l.removeEventListener(t[0], t[1], t[2]),
            };
          h === p.normalize && (p.normalize = !h),
            r !== p.buffer && (p.buffer = r);
          return n(
            Object(i.a)(p, d),
            () => l.connect(d),
            () => l.disconnect(d)
          );
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(5),
        i = n(1);
      const o = (t) => (e, n) => {
        const o = t(e, (t) => t.createDelay(n.maxDelayTime));
        return Object(i.a)(o, n), Object(s.a)(o, n, "delayTime"), o;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(5),
        i = n(1);
      const o = (t, e) => (n, o) => {
        const r = t(n, (t) => t.createDynamicsCompressor());
        if ((Object(i.a)(r, o), o.channelCount > 2)) throw e();
        if ("max" === o.channelCountMode) throw e();
        return (
          Object(s.a)(r, o, "attack"),
          Object(s.a)(r, o, "knee"),
          Object(s.a)(r, o, "ratio"),
          Object(s.a)(r, o, "release"),
          Object(s.a)(r, o, "threshold"),
          r
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(5),
        i = n(1);
      const o = (t) => (e, n) => {
        const o = t(e, (t) => t.createGain());
        return Object(i.a)(o, n), Object(s.a)(o, n, "gain"), o;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(1);
      const i = (t, e) => (n, i, o) => {
        if (void 0 === n.createIIRFilter) return e(n, i, o);
        const r = t(n, (t) => t.createIIRFilter(o.feedforward, o.feedback));
        return Object(s.a)(r, o), r;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var s = n(43),
        i = n(42),
        o = n(11);
      function r(t, e) {
        const n = e[0] * e[0] + e[1] * e[1];
        return [
          (t[0] * e[0] + t[1] * e[1]) / n,
          (t[1] * e[0] - t[0] * e[1]) / n,
        ];
      }
      function a(t, e) {
        let n = [0, 0];
        for (let o = t.length - 1; o >= 0; o -= 1)
          (i = e),
            (n = [(s = n)[0] * i[0] - s[1] * i[1], s[0] * i[1] + s[1] * i[0]]),
            (n[0] += t[o]);
        var s, i;
        return n;
      }
      const c =
        (t, e, n, c) =>
        (
          u,
          h,
          {
            channelCount: l,
            channelCountMode: d,
            channelInterpretation: p,
            feedback: f,
            feedforward: _,
          }
        ) => {
          const m = Object(s.a)(h, u.sampleRate),
            g = f.length,
            v = _.length,
            y = Math.min(g, v);
          if (0 === f.length || f.length > 20) throw c();
          if (0 === f[0]) throw e();
          if (0 === _.length || _.length > 20) throw c();
          if (0 === _[0]) throw e();
          if (1 !== f[0]) {
            for (let t = 0; t < v; t += 1) _[t] /= f[0];
            for (let t = 1; t < g; t += 1) f[t] /= f[0];
          }
          const b = n(u, m, l, l);
          (b.channelCount = l),
            (b.channelCountMode = d),
            (b.channelInterpretation = p);
          const x = [],
            w = [],
            T = [];
          for (let t = 0; t < l; t += 1) {
            x.push(0);
            const t = new Float32Array(32),
              e = new Float32Array(32);
            t.fill(0), e.fill(0), w.push(t), T.push(e);
          }
          b.onaudioprocess = (t) => {
            const e = t.inputBuffer,
              n = t.outputBuffer,
              s = e.numberOfChannels;
            for (let t = 0; t < s; t += 1) {
              const s = e.getChannelData(t),
                o = n.getChannelData(t);
              x[t] = Object(i.a)(f, g, _, v, y, w[t], T[t], x[t], 32, s, o);
            }
          };
          const O = u.sampleRate / 2,
            S = {
              get bufferSize() {
                return m;
              },
              get channelCount() {
                return b.channelCount;
              },
              set channelCount(t) {
                b.channelCount = t;
              },
              get channelCountMode() {
                return b.channelCountMode;
              },
              set channelCountMode(t) {
                b.channelCountMode = t;
              },
              get channelInterpretation() {
                return b.channelInterpretation;
              },
              set channelInterpretation(t) {
                b.channelInterpretation = t;
              },
              get context() {
                return b.context;
              },
              get inputs() {
                return [b];
              },
              get numberOfInputs() {
                return b.numberOfInputs;
              },
              get numberOfOutputs() {
                return b.numberOfOutputs;
              },
              addEventListener: (...t) => b.addEventListener(t[0], t[1], t[2]),
              dispatchEvent: (...t) => b.dispatchEvent(t[0]),
              getFrequencyResponse(e, n, s) {
                if (e.length !== n.length || n.length !== s.length) throw t();
                const i = e.length;
                for (let t = 0; t < i; t += 1) {
                  const i = -Math.PI * (e[t] / O),
                    o = [Math.cos(i), Math.sin(i)],
                    c = r(a(_, o), a(f, o));
                  (n[t] = Math.sqrt(c[0] * c[0] + c[1] * c[1])),
                    (s[t] = Math.atan2(c[1], c[0]));
                }
              },
              removeEventListener: (...t) =>
                b.removeEventListener(t[0], t[1], t[2]),
            };
          return Object(o.a)(S, b);
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n) =>
        t(e, (t) => t.createMediaElementSource(n.mediaElement));
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(1);
      const i = (t, e) => (n, i) => {
        if (void 0 === n.createMediaStreamDestination) throw e();
        const o = t(n, (t) => t.createMediaStreamDestination());
        return (
          Object(s.a)(o, i),
          1 === o.numberOfOutputs &&
            Object.defineProperty(o, "numberOfOutputs", {
              get: () => 0,
            }),
          o
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s =
        (t) =>
        (e, { mediaStream: n }) => {
          const s = n.getAudioTracks(),
            i = t(e, (t) => {
              const e = s
                .sort((t, e) => (t.id < e.id ? -1 : t.id > e.id ? 1 : 0))
                .slice(0, 1);
              return t.createMediaStreamSource(new MediaStream(e));
            });
          return (
            Object.defineProperty(i, "mediaStream", {
              value: n,
            }),
            i
          );
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s =
        (t, e, n) =>
        (s, { mediaStreamTrack: i }) =>
          "function" == typeof s.createMediaStreamTrackSource
            ? e(s, (t) => t.createMediaStreamTrackSource(i))
            : e(s, (e) => {
                const s = new MediaStream([i]),
                  o = e.createMediaStreamSource(s);
                if ("audio" !== i.kind) throw t();
                if (n(e)) throw new TypeError();
                return o;
              });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) =>
        null === t
          ? null
          : t.hasOwnProperty("OfflineAudioContext")
          ? t.OfflineAudioContext
          : t.hasOwnProperty("webkitOfflineAudioContext")
          ? t.webkitOfflineAudioContext
          : null;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var s = n(5),
        i = n(4),
        o = n(1),
        r = n(30),
        a = n(31);
      const c = (t, e, n, c, u, h, l) => (d, p) => {
        const f = n(d, (t) => t.createOscillator());
        return (
          Object(o.a)(f, p),
          Object(s.a)(f, p, "detune"),
          Object(s.a)(f, p, "frequency"),
          void 0 !== p.periodicWave
            ? f.setPeriodicWave(p.periodicWave)
            : Object(i.a)(f, p, "type"),
          e(c, () => c(d)) || Object(r.a)(f),
          e(u, () => u(d)) || l(f, d),
          e(h, () => h(d)) || Object(a.a)(f),
          t(d, f),
          f
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n(5),
        i = n(4),
        o = n(1);
      const r = (t, e) => (n, r) => {
        const a = t(n, (t) => t.createPanner());
        return void 0 === a.orientationX
          ? e(n, r)
          : (Object(o.a)(a, r),
            Object(s.a)(a, r, "orientationX"),
            Object(s.a)(a, r, "orientationY"),
            Object(s.a)(a, r, "orientationZ"),
            Object(s.a)(a, r, "positionX"),
            Object(s.a)(a, r, "positionY"),
            Object(s.a)(a, r, "positionZ"),
            Object(i.a)(a, r, "coneInnerAngle"),
            Object(i.a)(a, r, "coneOuterAngle"),
            Object(i.a)(a, r, "coneOuterGain"),
            Object(i.a)(a, r, "distanceModel"),
            Object(i.a)(a, r, "maxDistance"),
            Object(i.a)(a, r, "panningModel"),
            Object(i.a)(a, r, "refDistance"),
            Object(i.a)(a, r, "rolloffFactor"),
            a);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(1),
        i = n(11);
      const o =
        (t, e, n, o, r, a, c, u, h, l) =>
        (
          d,
          {
            coneInnerAngle: p,
            coneOuterAngle: f,
            coneOuterGain: _,
            distanceModel: m,
            maxDistance: g,
            orientationX: v,
            orientationY: y,
            orientationZ: b,
            panningModel: x,
            positionX: w,
            positionY: T,
            positionZ: O,
            refDistance: S,
            rolloffFactor: C,
            ...k
          }
        ) => {
          const A = n(d, (t) => t.createPanner());
          if (k.channelCount > 2) throw u();
          if ("max" === k.channelCountMode) throw u();
          Object(s.a)(A, k);
          const D = {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
            },
            M = o(d, {
              ...D,
              channelInterpretation: "speakers",
              numberOfInputs: 6,
            }),
            j = r(d, {
              ...k,
              gain: 1,
            }),
            E = r(d, {
              ...D,
              gain: 1,
            }),
            R = r(d, {
              ...D,
              gain: 0,
            }),
            q = r(d, {
              ...D,
              gain: 0,
            }),
            I = r(d, {
              ...D,
              gain: 0,
            }),
            F = r(d, {
              ...D,
              gain: 0,
            }),
            V = r(d, {
              ...D,
              gain: 0,
            }),
            N = a(d, 256, 6, 1),
            P = c(d, {
              ...D,
              curve: new Float32Array([1, 1]),
              oversample: "none",
            });
          let L = [v, y, b],
            z = [w, T, O];
          (N.onaudioprocess = ({ inputBuffer: t }) => {
            const e = [
              t.getChannelData(0)[0],
              t.getChannelData(1)[0],
              t.getChannelData(2)[0],
            ];
            e.some((t, e) => t !== L[e]) && (A.setOrientation(...e), (L = e));
            const n = [
              t.getChannelData(3)[0],
              t.getChannelData(4)[0],
              t.getChannelData(5)[0],
            ];
            n.some((t, e) => t !== z[e]) && (A.setPosition(...n), (z = n));
          }),
            Object.defineProperty(R.gain, "defaultValue", {
              get: () => 0,
            }),
            Object.defineProperty(q.gain, "defaultValue", {
              get: () => 0,
            }),
            Object.defineProperty(I.gain, "defaultValue", {
              get: () => 0,
            }),
            Object.defineProperty(F.gain, "defaultValue", {
              get: () => 0,
            }),
            Object.defineProperty(V.gain, "defaultValue", {
              get: () => 0,
            });
          const B = {
            get bufferSize() {},
            get channelCount() {
              return A.channelCount;
            },
            set channelCount(t) {
              if (t > 2) throw u();
              (j.channelCount = t), (A.channelCount = t);
            },
            get channelCountMode() {
              return A.channelCountMode;
            },
            set channelCountMode(t) {
              if ("max" === t) throw u();
              (j.channelCountMode = t), (A.channelCountMode = t);
            },
            get channelInterpretation() {
              return A.channelInterpretation;
            },
            set channelInterpretation(t) {
              (j.channelInterpretation = t), (A.channelInterpretation = t);
            },
            get coneInnerAngle() {
              return A.coneInnerAngle;
            },
            set coneInnerAngle(t) {
              A.coneInnerAngle = t;
            },
            get coneOuterAngle() {
              return A.coneOuterAngle;
            },
            set coneOuterAngle(t) {
              A.coneOuterAngle = t;
            },
            get coneOuterGain() {
              return A.coneOuterGain;
            },
            set coneOuterGain(t) {
              if (t < 0 || t > 1) throw e();
              A.coneOuterGain = t;
            },
            get context() {
              return A.context;
            },
            get distanceModel() {
              return A.distanceModel;
            },
            set distanceModel(t) {
              A.distanceModel = t;
            },
            get inputs() {
              return [j];
            },
            get maxDistance() {
              return A.maxDistance;
            },
            set maxDistance(t) {
              if (t < 0) throw new RangeError();
              A.maxDistance = t;
            },
            get numberOfInputs() {
              return A.numberOfInputs;
            },
            get numberOfOutputs() {
              return A.numberOfOutputs;
            },
            get orientationX() {
              return E.gain;
            },
            get orientationY() {
              return R.gain;
            },
            get orientationZ() {
              return q.gain;
            },
            get panningModel() {
              return A.panningModel;
            },
            set panningModel(t) {
              if (((A.panningModel = t), A.panningModel !== t && "HRTF" === t))
                throw u();
            },
            get positionX() {
              return I.gain;
            },
            get positionY() {
              return F.gain;
            },
            get positionZ() {
              return V.gain;
            },
            get refDistance() {
              return A.refDistance;
            },
            set refDistance(t) {
              if (t < 0) throw new RangeError();
              A.refDistance = t;
            },
            get rolloffFactor() {
              return A.rolloffFactor;
            },
            set rolloffFactor(t) {
              if (t < 0) throw new RangeError();
              A.rolloffFactor = t;
            },
            addEventListener: (...t) => j.addEventListener(t[0], t[1], t[2]),
            dispatchEvent: (...t) => j.dispatchEvent(t[0]),
            removeEventListener: (...t) =>
              j.removeEventListener(t[0], t[1], t[2]),
          };
          p !== B.coneInnerAngle && (B.coneInnerAngle = p),
            f !== B.coneOuterAngle && (B.coneOuterAngle = f),
            _ !== B.coneOuterGain && (B.coneOuterGain = _),
            m !== B.distanceModel && (B.distanceModel = m),
            g !== B.maxDistance && (B.maxDistance = g),
            v !== B.orientationX.value && (B.orientationX.value = v),
            y !== B.orientationY.value && (B.orientationY.value = y),
            b !== B.orientationZ.value && (B.orientationZ.value = b),
            x !== B.panningModel && (B.panningModel = x),
            w !== B.positionX.value && (B.positionX.value = w),
            T !== B.positionY.value && (B.positionY.value = T),
            O !== B.positionZ.value && (B.positionZ.value = O),
            S !== B.refDistance && (B.refDistance = S),
            C !== B.rolloffFactor && (B.rolloffFactor = C),
            (1 === L[0] && 0 === L[1] && 0 === L[2]) || A.setOrientation(...L),
            (0 === z[0] && 0 === z[1] && 0 === z[2]) || A.setPosition(...z);
          return l(
            Object(i.a)(B, A),
            () => {
              j.connect(A),
                t(j, P, 0, 0),
                P.connect(E).connect(M, 0, 0),
                P.connect(R).connect(M, 0, 1),
                P.connect(q).connect(M, 0, 2),
                P.connect(I).connect(M, 0, 3),
                P.connect(F).connect(M, 0, 4),
                P.connect(V).connect(M, 0, 5),
                M.connect(N).connect(d.destination);
            },
            () => {
              j.disconnect(A),
                h(j, P, 0, 0),
                P.disconnect(E),
                E.disconnect(M),
                P.disconnect(R),
                R.disconnect(M),
                P.disconnect(q),
                q.disconnect(M),
                P.disconnect(I),
                I.disconnect(M),
                P.disconnect(F),
                F.disconnect(M),
                P.disconnect(V),
                V.disconnect(M),
                M.disconnect(N),
                N.disconnect(d.destination);
            }
          );
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s =
        (t) =>
        (e, { disableNormalization: n, imag: s, real: i }) => {
          const o = t(e),
            r = new Float32Array(s),
            a = new Float32Array(i);
          return null !== o
            ? o.createPeriodicWave(a, r, {
                disableNormalization: n,
              })
            : e.createPeriodicWave(a, r, {
                disableNormalization: n,
              });
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n, s, i) =>
        t(e, (t) => t.createScriptProcessor(n, s, i));
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(5),
        i = n(1);
      const o = (t, e, n) => (o, r) =>
        t(o, (t) => {
          const a = r.channelCountMode;
          if ("clamped-max" === a) throw n();
          if (void 0 === o.createStereoPanner) return e(o, r);
          const c = t.createStereoPanner();
          return (
            Object(i.a)(c, r),
            Object(s.a)(c, r, "pan"),
            Object.defineProperty(c, "channelCountMode", {
              get: () => a,
              set: (t) => {
                if (t !== a) throw n();
              },
            }),
            c
          );
        });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(11);
      const i = (t, e, n, i, o, r) => {
        const a = new Float32Array([1, 1]),
          c = Math.PI / 2,
          u = {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
          },
          h = {
            ...u,
            oversample: "none",
          },
          l = (t, s, r, l, d) => {
            if (1 === s)
              return ((t, e, s, o) => {
                const r = new Float32Array(16385),
                  l = new Float32Array(16385);
                for (let t = 0; t < 16385; t += 1) {
                  const e = (t / 16384) * c;
                  (r[t] = Math.cos(e)), (l[t] = Math.sin(e));
                }
                const d = n(t, {
                    ...u,
                    gain: 0,
                  }),
                  p = i(t, {
                    ...h,
                    curve: r,
                  }),
                  f = i(t, {
                    ...h,
                    curve: a,
                  }),
                  _ = n(t, {
                    ...u,
                    gain: 0,
                  }),
                  m = i(t, {
                    ...h,
                    curve: l,
                  });
                return {
                  connectGraph() {
                    e.connect(d),
                      e.connect(f.inputs[0]),
                      e.connect(_),
                      f.connect(s),
                      s.connect(p.inputs[0]),
                      s.connect(m.inputs[0]),
                      p.connect(d.gain),
                      m.connect(_.gain),
                      d.connect(o, 0, 0),
                      _.connect(o, 0, 1);
                  },
                  disconnectGraph() {
                    e.disconnect(d),
                      e.disconnect(f.inputs[0]),
                      e.disconnect(_),
                      f.disconnect(s),
                      s.disconnect(p.inputs[0]),
                      s.disconnect(m.inputs[0]),
                      p.disconnect(d.gain),
                      m.disconnect(_.gain),
                      d.disconnect(o, 0, 0),
                      _.disconnect(o, 0, 1);
                  },
                };
              })(t, r, l, d);
            if (2 === s)
              return ((t, s, o, r) => {
                const l = new Float32Array(16385),
                  d = new Float32Array(16385),
                  p = new Float32Array(16385),
                  f = new Float32Array(16385),
                  _ = Math.floor(8192.5);
                for (let t = 0; t < 16385; t += 1)
                  if (t > _) {
                    const e = ((t - _) / (16384 - _)) * c;
                    (l[t] = Math.cos(e)),
                      (d[t] = Math.sin(e)),
                      (p[t] = 0),
                      (f[t] = 1);
                  } else {
                    const e = (t / (16384 - _)) * c;
                    (l[t] = 1),
                      (d[t] = 0),
                      (p[t] = Math.cos(e)),
                      (f[t] = Math.sin(e));
                  }
                const m = e(t, {
                    channelCount: 2,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    numberOfOutputs: 2,
                  }),
                  g = n(t, {
                    ...u,
                    gain: 0,
                  }),
                  v = i(t, {
                    ...h,
                    curve: l,
                  }),
                  y = n(t, {
                    ...u,
                    gain: 0,
                  }),
                  b = i(t, {
                    ...h,
                    curve: d,
                  }),
                  x = i(t, {
                    ...h,
                    curve: a,
                  }),
                  w = n(t, {
                    ...u,
                    gain: 0,
                  }),
                  T = i(t, {
                    ...h,
                    curve: p,
                  }),
                  O = n(t, {
                    ...u,
                    gain: 0,
                  }),
                  S = i(t, {
                    ...h,
                    curve: f,
                  });
                return {
                  connectGraph() {
                    s.connect(m),
                      s.connect(x.inputs[0]),
                      m.connect(g, 1),
                      m.connect(y, 1),
                      m.connect(w, 1),
                      m.connect(O, 1),
                      x.connect(o),
                      o.connect(v.inputs[0]),
                      o.connect(b.inputs[0]),
                      o.connect(T.inputs[0]),
                      o.connect(S.inputs[0]),
                      v.connect(g.gain),
                      b.connect(y.gain),
                      T.connect(w.gain),
                      S.connect(O.gain),
                      g.connect(r, 0, 0),
                      w.connect(r, 0, 0),
                      y.connect(r, 0, 1),
                      O.connect(r, 0, 1);
                  },
                  disconnectGraph() {
                    s.disconnect(m),
                      s.disconnect(x.inputs[0]),
                      m.disconnect(g, 1),
                      m.disconnect(y, 1),
                      m.disconnect(w, 1),
                      m.disconnect(O, 1),
                      x.disconnect(o),
                      o.disconnect(v.inputs[0]),
                      o.disconnect(b.inputs[0]),
                      o.disconnect(T.inputs[0]),
                      o.disconnect(S.inputs[0]),
                      v.disconnect(g.gain),
                      b.disconnect(y.gain),
                      T.disconnect(w.gain),
                      S.disconnect(O.gain),
                      g.disconnect(r, 0, 0),
                      w.disconnect(r, 0, 0),
                      y.disconnect(r, 0, 1),
                      O.disconnect(r, 0, 1);
                  },
                };
              })(t, r, l, d);
            throw o();
          };
        return (e, { channelCount: i, channelCountMode: a, pan: c, ...u }) => {
          if ("max" === a) throw o();
          const h = t(e, {
              ...u,
              channelCount: 1,
              channelCountMode: a,
              numberOfInputs: 2,
            }),
            d = n(e, {
              ...u,
              channelCount: i,
              channelCountMode: a,
              gain: 1,
            }),
            p = n(e, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: c,
            });
          let { connectGraph: f, disconnectGraph: _ } = l(e, i, d, p, h);
          Object.defineProperty(p.gain, "defaultValue", {
            get: () => 0,
          });
          const m = {
            get bufferSize() {},
            get channelCount() {
              return d.channelCount;
            },
            set channelCount(t) {
              d.channelCount !== t &&
                (g && _(),
                ({ connectGraph: f, disconnectGraph: _ } = l(e, t, d, p, h)),
                g && f()),
                (d.channelCount = t);
            },
            get channelCountMode() {
              return d.channelCountMode;
            },
            set channelCountMode(t) {
              if ("clamped-max" === t || "max" === t) throw o();
              d.channelCountMode = t;
            },
            get channelInterpretation() {
              return d.channelInterpretation;
            },
            set channelInterpretation(t) {
              d.channelInterpretation = t;
            },
            get context() {
              return d.context;
            },
            get inputs() {
              return [d];
            },
            get numberOfInputs() {
              return d.numberOfInputs;
            },
            get numberOfOutputs() {
              return d.numberOfOutputs;
            },
            get pan() {
              return p.gain;
            },
            addEventListener: (...t) => d.addEventListener(t[0], t[1], t[2]),
            dispatchEvent: (...t) => d.dispatchEvent(t[0]),
            removeEventListener: (...t) =>
              d.removeEventListener(t[0], t[1], t[2]),
          };
          let g = !1;
          return r(
            Object(s.a)(m, h),
            () => {
              f(), (g = !0);
            },
            () => {
              _(), (g = !1);
            }
          );
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(4),
        i = n(1);
      const o = (t, e, n, o, r, a, c) => (u, h) => {
        const l = n(u, (t) => t.createWaveShaper());
        try {
          return (l.curve = new Float32Array([1])), o(u, h);
        } catch {}
        Object(i.a)(l, h);
        const d = h.curve;
        if (null !== d && d.length < 2) throw e();
        Object(s.a)(l, h, "curve"), Object(s.a)(l, h, "oversample");
        let p = null,
          f = !1;
        c(
          l,
          "curve",
          (t) => () => t.call(l),
          (e) => (n) => (
            e.call(l, n),
            f &&
              (r(n) && null === p
                ? (p = t(u, l))
                : r(n) || null === p || (p(), (p = null))),
            n
          )
        );
        return a(
          l,
          () => {
            (f = !0), r(l.curve) && (p = t(u, l));
          },
          () => {
            (f = !1), null !== p && (p(), (p = null));
          }
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(1),
        i = n(11);
      const o =
        (t, e, n, o, r, a) =>
        (c, { curve: u, oversample: h, ...l }) => {
          const d = n(c, (t) => t.createWaveShaper()),
            p = n(c, (t) => t.createWaveShaper());
          Object(s.a)(d, l), Object(s.a)(p, l);
          const f = o(c, {
              ...l,
              gain: 1,
            }),
            _ = o(c, {
              ...l,
              gain: -1,
            }),
            m = o(c, {
              ...l,
              gain: 1,
            }),
            g = o(c, {
              ...l,
              gain: -1,
            });
          let v = null,
            y = !1,
            b = null;
          const x = {
            get bufferSize() {},
            get channelCount() {
              return d.channelCount;
            },
            set channelCount(t) {
              (f.channelCount = t),
                (_.channelCount = t),
                (d.channelCount = t),
                (m.channelCount = t),
                (p.channelCount = t),
                (g.channelCount = t);
            },
            get channelCountMode() {
              return d.channelCountMode;
            },
            set channelCountMode(t) {
              (f.channelCountMode = t),
                (_.channelCountMode = t),
                (d.channelCountMode = t),
                (m.channelCountMode = t),
                (p.channelCountMode = t),
                (g.channelCountMode = t);
            },
            get channelInterpretation() {
              return d.channelInterpretation;
            },
            set channelInterpretation(t) {
              (f.channelInterpretation = t),
                (_.channelInterpretation = t),
                (d.channelInterpretation = t),
                (m.channelInterpretation = t),
                (p.channelInterpretation = t),
                (g.channelInterpretation = t);
            },
            get context() {
              return d.context;
            },
            get curve() {
              return b;
            },
            set curve(n) {
              if (null !== u && u.length < 2) throw e();
              if (null === n) (d.curve = n), (p.curve = n);
              else {
                const t = n.length,
                  e = new Float32Array(t + 2 - (t % 2)),
                  s = new Float32Array(t + 2 - (t % 2));
                (e[0] = n[0]), (s[0] = -n[t - 1]);
                const i = Math.ceil((t + 1) / 2),
                  o = (t + 1) / 2 - 1;
                for (let r = 1; r < i; r += 1) {
                  const a = (r / i) * o,
                    c = Math.floor(a),
                    u = Math.ceil(a);
                  (e[r] =
                    c === u
                      ? n[c]
                      : (1 - (a - c)) * n[c] + (1 - (u - a)) * n[u]),
                    (s[r] =
                      c === u
                        ? -n[t - 1 - c]
                        : -(1 - (a - c)) * n[t - 1 - c] -
                          (1 - (u - a)) * n[t - 1 - u]);
                }
                (e[i] = t % 2 == 1 ? n[i - 1] : (n[i - 2] + n[i - 1]) / 2),
                  (d.curve = e),
                  (p.curve = s);
              }
              (b = n),
                y &&
                  (r(b) && null === v
                    ? (v = t(c, f))
                    : null !== v && (v(), (v = null)));
            },
            get inputs() {
              return [f];
            },
            get numberOfInputs() {
              return d.numberOfInputs;
            },
            get numberOfOutputs() {
              return d.numberOfOutputs;
            },
            get oversample() {
              return d.oversample;
            },
            set oversample(t) {
              (d.oversample = t), (p.oversample = t);
            },
            addEventListener: (...t) => f.addEventListener(t[0], t[1], t[2]),
            dispatchEvent: (...t) => f.dispatchEvent(t[0]),
            removeEventListener: (...t) =>
              f.removeEventListener(t[0], t[1], t[2]),
          };
          u !== x.curve && (x.curve = u),
            h !== x.oversample && (x.oversample = h);
          return a(
            Object(i.a)(x, m),
            () => {
              f.connect(d).connect(m),
                f.connect(_).connect(p).connect(g).connect(m),
                (y = !0),
                r(b) && (v = t(c, f));
            },
            () => {
              f.disconnect(d),
                d.disconnect(m),
                f.disconnect(_),
                _.disconnect(p),
                p.disconnect(g),
                g.disconnect(m),
                (y = !1),
                null !== v && (v(), (v = null));
            }
          );
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(14);
      const i = {
          numberOfChannels: 1,
        },
        o = (t, e, n, o, r) =>
          class extends t {
            constructor(t, n, r) {
              let a;
              if ("number" == typeof t && void 0 !== n && void 0 !== r)
                a = {
                  length: n,
                  numberOfChannels: t,
                  sampleRate: r,
                };
              else {
                if ("object" != typeof t)
                  throw new Error("The given parameters are not valid.");
                a = t;
              }
              const {
                  length: c,
                  numberOfChannels: u,
                  sampleRate: h,
                } = {
                  ...i,
                  ...a,
                },
                l = o(u, c, h);
              e(s.a, () => Object(s.a)(l)) ||
                l.addEventListener(
                  "statechange",
                  (() => {
                    let t = 0;
                    const e = (n) => {
                      "running" === this._state &&
                        (t > 0
                          ? (l.removeEventListener("statechange", e),
                            n.stopImmediatePropagation(),
                            this._waitForThePromiseToSettle(n))
                          : (t += 1));
                    };
                    return e;
                  })()
                ),
                super(l, u),
                (this._length = c),
                (this._nativeOfflineAudioContext = l),
                (this._state = null);
            }
            get length() {
              return void 0 === this._nativeOfflineAudioContext.length
                ? this._length
                : this._nativeOfflineAudioContext.length;
            }
            get state() {
              return null === this._state
                ? this._nativeOfflineAudioContext.state
                : this._state;
            }
            startRendering() {
              return "running" === this._state
                ? Promise.reject(n())
                : ((this._state = "running"),
                  r(this.destination, this._nativeOfflineAudioContext)
                    .then((t) => ((this._state = null), t))
                    .catch((t) => {
                      throw ((this._state = null), t);
                    }));
            }
            _waitForThePromiseToSettle(t) {
              null === this._state
                ? this._nativeOfflineAudioContext.dispatchEvent(t)
                : setTimeout(() => this._waitForThePromiseToSettle(t));
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n(17),
        i = n(21);
      const o = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          detune: 0,
          frequency: 440,
          type: "sine",
        },
        r = (t, e, n, r, a, c, u, h) =>
          class extends t {
            constructor(t, n = o) {
              const s = c(t),
                i = {
                  ...o,
                  ...n,
                },
                h = r(s, i),
                l = u(s),
                d = l ? a() : null,
                p = t.sampleRate / 2;
              super(t, !1, h, d),
                (this._detune = e(this, l, h.detune, 153600, -153600)),
                (this._frequency = e(this, l, h.frequency, p, -p)),
                (this._nativeOscillatorNode = h),
                (this._onended = null),
                (this._oscillatorNodeRenderer = d),
                null !== this._oscillatorNodeRenderer &&
                  void 0 !== i.periodicWave &&
                  (this._oscillatorNodeRenderer.periodicWave = i.periodicWave);
            }
            get detune() {
              return this._detune;
            }
            get frequency() {
              return this._frequency;
            }
            get onended() {
              return this._onended;
            }
            set onended(t) {
              const e = "function" == typeof t ? h(this, t) : null;
              this._nativeOscillatorNode.onended = e;
              const n = this._nativeOscillatorNode.onended;
              this._onended = null !== n && n === e ? t : n;
            }
            get type() {
              return this._nativeOscillatorNode.type;
            }
            set type(t) {
              if (((this._nativeOscillatorNode.type = t), "custom" === t))
                throw n();
              null !== this._oscillatorNodeRenderer &&
                (this._oscillatorNodeRenderer.periodicWave = null);
            }
            setPeriodicWave(t) {
              this._nativeOscillatorNode.setPeriodicWave(t),
                null !== this._oscillatorNodeRenderer &&
                  (this._oscillatorNodeRenderer.periodicWave = t);
            }
            start(t = 0) {
              if (
                (this._nativeOscillatorNode.start(t),
                null !== this._oscillatorNodeRenderer)
              )
                this._oscillatorNodeRenderer.start = t;
              else {
                Object(s.a)(this);
                const t = () => {
                  this._nativeOscillatorNode.removeEventListener("ended", t),
                    setTimeout(() => Object(i.a)(this), 1e3);
                };
                this._nativeOscillatorNode.addEventListener("ended", t);
              }
            }
            stop(t = 0) {
              this._nativeOscillatorNode.stop(t),
                null !== this._oscillatorNodeRenderer &&
                  (this._oscillatorNodeRenderer.stop = t);
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(3);
      const i = (t, e, n, i, o) => () => {
        const r = new WeakMap();
        let a = null,
          c = null,
          u = null;
        return {
          set periodicWave(t) {
            a = t;
          },
          set start(t) {
            c = t;
          },
          set stop(t) {
            u = t;
          },
          render(h, l, d) {
            const p = r.get(l);
            return void 0 !== p
              ? Promise.resolve(p)
              : (async (h, l, d) => {
                  let p = n(h);
                  const f = Object(s.a)(p, l);
                  if (!f) {
                    const t = {
                      channelCount: p.channelCount,
                      channelCountMode: p.channelCountMode,
                      channelInterpretation: p.channelInterpretation,
                      detune: p.detune.value,
                      frequency: p.frequency.value,
                      periodicWave: null === a ? void 0 : a,
                      type: p.type,
                    };
                    (p = e(l, t)),
                      null !== c && p.start(c),
                      null !== u && p.stop(u);
                  }
                  return (
                    r.set(l, p),
                    f
                      ? (await t(l, h.detune, p.detune, d),
                        await t(l, h.frequency, p.frequency, d))
                      : (await i(l, h.detune, p.detune, d),
                        await i(l, h.frequency, p.frequency, d)),
                    await o(h, l, p, d),
                    p
                  );
                })(h, l, d);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(2);
      const i = {
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          coneInnerAngle: 360,
          coneOuterAngle: 360,
          coneOuterGain: 0,
          distanceModel: "inverse",
          maxDistance: 1e4,
          orientationX: 1,
          orientationY: 0,
          orientationZ: 0,
          panningModel: "equalpower",
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          refDistance: 1,
          rolloffFactor: 1,
        },
        o = (t, e, n, o, r, a) =>
          class extends t {
            constructor(t, c = i) {
              const u = r(t),
                h = {
                  ...i,
                  ...c,
                },
                l = n(u, h),
                d = a(u);
              super(t, !1, l, d ? o() : null),
                (this._nativePannerNode = l),
                (this._orientationX = e(this, d, l.orientationX, s.b, s.a)),
                (this._orientationY = e(this, d, l.orientationY, s.b, s.a)),
                (this._orientationZ = e(this, d, l.orientationZ, s.b, s.a)),
                (this._positionX = e(this, d, l.positionX, s.b, s.a)),
                (this._positionY = e(this, d, l.positionY, s.b, s.a)),
                (this._positionZ = e(this, d, l.positionZ, s.b, s.a));
            }
            get coneInnerAngle() {
              return this._nativePannerNode.coneInnerAngle;
            }
            set coneInnerAngle(t) {
              this._nativePannerNode.coneInnerAngle = t;
            }
            get coneOuterAngle() {
              return this._nativePannerNode.coneOuterAngle;
            }
            set coneOuterAngle(t) {
              this._nativePannerNode.coneOuterAngle = t;
            }
            get coneOuterGain() {
              return this._nativePannerNode.coneOuterGain;
            }
            set coneOuterGain(t) {
              this._nativePannerNode.coneOuterGain = t;
            }
            get distanceModel() {
              return this._nativePannerNode.distanceModel;
            }
            set distanceModel(t) {
              this._nativePannerNode.distanceModel = t;
            }
            get maxDistance() {
              return this._nativePannerNode.maxDistance;
            }
            set maxDistance(t) {
              this._nativePannerNode.maxDistance = t;
            }
            get orientationX() {
              return this._orientationX;
            }
            get orientationY() {
              return this._orientationY;
            }
            get orientationZ() {
              return this._orientationZ;
            }
            get panningModel() {
              return this._nativePannerNode.panningModel;
            }
            set panningModel(t) {
              this._nativePannerNode.panningModel = t;
            }
            get positionX() {
              return this._positionX;
            }
            get positionY() {
              return this._positionY;
            }
            get positionZ() {
              return this._positionZ;
            }
            get refDistance() {
              return this._nativePannerNode.refDistance;
            }
            set refDistance(t) {
              this._nativePannerNode.refDistance = t;
            }
            get rolloffFactor() {
              return this._nativePannerNode.rolloffFactor;
            }
            set rolloffFactor(t) {
              this._nativePannerNode.rolloffFactor = t;
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(12),
        i = n(3);
      const o = (t, e, n, o, r, a, c, u, h, l) => () => {
        const d = new WeakMap();
        let p = null;
        return {
          render(f, _, m) {
            const g = d.get(_);
            return void 0 !== g
              ? Promise.resolve(g)
              : (async (f, _, m) => {
                  let g = null,
                    v = a(f);
                  const y = {
                      channelCount: v.channelCount,
                      channelCountMode: v.channelCountMode,
                      channelInterpretation: v.channelInterpretation,
                    },
                    b = {
                      ...y,
                      coneInnerAngle: v.coneInnerAngle,
                      coneOuterAngle: v.coneOuterAngle,
                      coneOuterGain: v.coneOuterGain,
                      distanceModel: v.distanceModel,
                      maxDistance: v.maxDistance,
                      panningModel: v.panningModel,
                      refDistance: v.refDistance,
                      rolloffFactor: v.rolloffFactor,
                    },
                    x = Object(i.a)(v, _);
                  if ("bufferSize" in v)
                    g = o(_, {
                      ...y,
                      gain: 1,
                    });
                  else if (!x) {
                    const t = {
                      ...b,
                      orientationX: v.orientationX.value,
                      orientationY: v.orientationY.value,
                      orientationZ: v.orientationZ.value,
                      positionX: v.positionX.value,
                      positionY: v.positionY.value,
                      positionZ: v.positionZ.value,
                    };
                    v = r(_, t);
                  }
                  if ((d.set(_, null === g ? v : g), null !== g)) {
                    if (null === p) {
                      if (null === c)
                        throw new Error(
                          "Missing the native OfflineAudioContext constructor."
                        );
                      const t = new c(6, f.context.length, _.sampleRate),
                        s = e(t, {
                          channelCount: 1,
                          channelCountMode: "explicit",
                          channelInterpretation: "speakers",
                          numberOfInputs: 6,
                        });
                      s.connect(t.destination),
                        (p = (async () => {
                          const e = await Promise.all(
                            [
                              f.orientationX,
                              f.orientationY,
                              f.orientationZ,
                              f.positionX,
                              f.positionY,
                              f.positionZ,
                            ].map(async (e, s) => {
                              const i = n(t, {
                                channelCount: 1,
                                channelCountMode: "explicit",
                                channelInterpretation: "discrete",
                                offset: 0 === s ? 1 : 0,
                              });
                              return await u(t, e, i.offset, m), i;
                            })
                          );
                          for (let t = 0; t < 6; t += 1)
                            e[t].connect(s, 0, t), e[t].start(0);
                          return l(t);
                        })());
                    }
                    const t = await p,
                      s = o(_, {
                        ...y,
                        gain: 1,
                      });
                    await h(f, _, s, m);
                    const i = [];
                    for (let e = 0; e < t.numberOfChannels; e += 1)
                      i.push(t.getChannelData(e));
                    let a = [i[0][0], i[1][0], i[2][0]],
                      d = [i[3][0], i[4][0], i[5][0]],
                      v = o(_, {
                        ...y,
                        gain: 1,
                      }),
                      x = r(_, {
                        ...b,
                        orientationX: a[0],
                        orientationY: a[1],
                        orientationZ: a[2],
                        positionX: d[0],
                        positionY: d[1],
                        positionZ: d[2],
                      });
                    s.connect(v).connect(x.inputs[0]), x.connect(g);
                    for (let e = 128; e < t.length; e += 128) {
                      const t = [i[0][e], i[1][e], i[2][e]],
                        n = [i[3][e], i[4][e], i[5][e]];
                      if (
                        t.some((t, e) => t !== a[e]) ||
                        n.some((t, e) => t !== d[e])
                      ) {
                        (a = t), (d = n);
                        const i = e / _.sampleRate;
                        v.gain.setValueAtTime(0, i),
                          (v = o(_, {
                            ...y,
                            gain: 0,
                          })),
                          (x = r(_, {
                            ...b,
                            orientationX: a[0],
                            orientationY: a[1],
                            orientationZ: a[2],
                            positionX: d[0],
                            positionY: d[1],
                            positionZ: d[2],
                          })),
                          v.gain.setValueAtTime(1, i),
                          s.connect(v).connect(x.inputs[0]),
                          x.connect(g);
                      }
                    }
                    return g;
                  }
                  return (
                    x
                      ? (await t(_, f.orientationX, v.orientationX, m),
                        await t(_, f.orientationY, v.orientationY, m),
                        await t(_, f.orientationZ, v.orientationZ, m),
                        await t(_, f.positionX, v.positionX, m),
                        await t(_, f.positionY, v.positionY, m),
                        await t(_, f.positionZ, v.positionZ, m))
                      : (await u(_, f.orientationX, v.orientationX, m),
                        await u(_, f.orientationY, v.orientationY, m),
                        await u(_, f.orientationZ, v.orientationZ, m),
                        await u(_, f.positionX, v.positionX, m),
                        await u(_, f.positionY, v.positionY, m),
                        await u(_, f.positionZ, v.positionZ, m)),
                    Object(s.a)(v)
                      ? await h(f, _, v.inputs[0], m)
                      : await h(f, _, v, m),
                    v
                  );
                })(f, _, m);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      const s = {
          disableNormalization: !1,
        },
        i = (t, e, n) =>
          class i {
            constructor(i, o) {
              const r = e(i),
                a = {
                  ...s,
                  ...o,
                },
                c = t(r, a);
              return n.add(c), c;
            }
            static [Symbol.hasInstance](t) {
              return (
                (null !== t &&
                  "object" == typeof t &&
                  Object.getPrototypeOf(t) === i.prototype) ||
                n.has(t)
              );
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n, s, i, o) => (t(s).replay(i), e(s, n, i, o));
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n) => async (s, i, o, r) => {
        const a = t(s),
          c = [...r, s];
        await Promise.all(
          a.activeInputs
            .map((t, r) =>
              Array.from(t)
                .filter(([t]) => !c.includes(t))
                .map(async ([t, a]) => {
                  const u = e(t),
                    h = await u.render(t, i, c),
                    l = s.context.destination;
                  n(t) || (s === l && n(s)) || h.connect(o, a, r);
                })
            )
            .reduce((t, e) => [...t, ...e], [])
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n) => async (s, i, o, r) => {
        const a = e(s);
        await Promise.all(
          Array.from(a.activeInputs).map(async ([e, s]) => {
            const a = t(e),
              c = await a.render(e, i, r);
            n(e) || c.connect(o, s);
          })
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(14);
      const i = (t, e, n, i) => (o) =>
        t(s.a, () => Object(s.a)(o))
          ? Promise.resolve(t(i, i)).then((t) => {
              if (!t) {
                const t = n(o, 512, 0, 1);
                (o.oncomplete = () => {
                  (t.onaudioprocess = null), t.disconnect();
                }),
                  (t.onaudioprocess = () => o.currentTime),
                  t.connect(o.destination);
              }
              return o.startRendering();
            })
          : new Promise((t) => {
              const n = e(o, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                gain: 0,
              });
              (o.oncomplete = (e) => {
                n.disconnect(), t(e.renderedBuffer);
              }),
                n.connect(o.destination),
                o.startRendering();
            });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(29);
      const i = (t, e, n, i, o, r, a, c) => {
        const u = [];
        return (h, l) =>
          n(h)
            .render(h, l, u)
            .then(() =>
              Promise.all(Array.from(i(l)).map((t) => n(t).render(t, l, u)))
            )
            .then(() => o(l))
            .then(
              (n) => (
                "function" != typeof n.copyFromChannel
                  ? (a(n), Object(s.a)(n))
                  : e(r, () => r(n)) || c(n),
                t.add(n),
                n
              )
            );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      const s = {
          channelCount: 2,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          pan: 0,
        },
        i = (t, e, n, i, o, r) =>
          class extends t {
            constructor(t, a = s) {
              const c = o(t),
                u = {
                  ...s,
                  ...a,
                },
                h = n(c, u),
                l = r(c);
              super(t, !1, h, l ? i() : null),
                (this._pan = e(this, l, h.pan, 1, -1));
            }
            get pan() {
              return this._pan;
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(12),
        i = n(3);
      const o = (t, e, n, o, r) => () => {
        const a = new WeakMap();
        return {
          render(c, u, h) {
            const l = a.get(u);
            return void 0 !== l
              ? Promise.resolve(l)
              : (async (c, u, h) => {
                  let l = n(c);
                  const d = Object(i.a)(l, u);
                  if (!d) {
                    const t = {
                      channelCount: l.channelCount,
                      channelCountMode: l.channelCountMode,
                      channelInterpretation: l.channelInterpretation,
                      pan: l.pan.value,
                    };
                    l = e(u, t);
                  }
                  return (
                    a.set(u, l),
                    d
                      ? await t(u, c.pan, l.pan, h)
                      : await o(u, c.pan, l.pan, h),
                    Object(s.a)(l)
                      ? await r(c, u, l.inputs[0], h)
                      : await r(c, u, l, h),
                    l
                  );
                })(c, u, h);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => () => {
        if (null === t) return !1;
        try {
          new t({
            length: 1,
            sampleRate: 44100,
          });
        } catch {
          return !1;
        }
        return !0;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => () => {
        if (null === t) return !1;
        const e = new t(1, 1, 44100).createBuffer(1, 1, 44100);
        if (void 0 === e.copyToChannel) return !0;
        const n = new Float32Array(2);
        try {
          e.copyFromChannel(n, 0, 0);
        } catch {
          return !1;
        }
        return !0;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => {
        const n = t(e, (t) => t.createBufferSource());
        n.start();
        try {
          n.start();
        } catch {
          return !0;
        }
        return !1;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => () => {
        if (null === t) return Promise.resolve(!1);
        const e = new t(1, 1, 44100),
          n = e.createBuffer(1, 1, e.sampleRate),
          s = e.createBufferSource();
        return (
          (n.getChannelData(0)[0] = 1),
          (s.buffer = n),
          s.start(0, 0, 0),
          s.connect(e.destination),
          new Promise((t) => {
            (e.oncomplete = ({ renderedBuffer: e }) => {
              t(0 === e.getChannelData(0)[0]);
            }),
              e.startRendering();
          })
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => {
        const n = t(e, (t) => t.createBufferSource()),
          s = e.createBuffer(1, 1, 44100);
        n.buffer = s;
        try {
          n.start(0, 1);
        } catch {
          return !1;
        }
        return !0;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => {
        const n = t(e, (t) => t.createBufferSource());
        n.start();
        try {
          n.stop();
        } catch {
          return !1;
        }
        return !0;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => () => {
        if (null === t) return !1;
        if (void 0 !== t.prototype && void 0 !== t.prototype.close) return !0;
        const e = new t(),
          n = void 0 !== e.close;
        try {
          e.close();
        } catch {}
        return n;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => () => {
        if (null === t) return Promise.resolve(!1);
        const e = new t(1, 1, 44100);
        return new Promise((t) => {
          let n = !0;
          const s = (s) => {
            n && ((n = !1), e.startRendering(), t(s instanceof TypeError));
          };
          let i;
          try {
            i = e.decodeAudioData(null, () => {}, s);
          } catch (t) {
            s(t);
          }
          void 0 !== i && i.catch(s);
        });
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => () => {
        if (null === t) return !1;
        let e;
        try {
          e = new t({
            latencyHint: "balanced",
          });
        } catch {
          return !1;
        }
        return e.close(), !0;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => () => {
        if (null === t) return !1;
        const e = new t(1, 1, 44100).createGain(),
          n = e.connect(e) === e;
        return e.disconnect(e), n;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => {
        const n = t(e, (t) => t.createOscillator());
        try {
          n.start(-1);
        } catch (t) {
          return t instanceof RangeError;
        }
        return !1;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => {
        const n = e.createBuffer(1, 1, 44100),
          s = t(e, (t) => t.createBufferSource());
        (s.buffer = n), s.start(), s.stop();
        try {
          return s.stop(), !0;
        } catch {
          return !1;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => {
        const n = t(e, (t) => t.createOscillator());
        try {
          n.stop(-1);
        } catch (t) {
          return t instanceof RangeError;
        }
        return !1;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => async () => {
        if (null === t) return !0;
        if (null === e) return !1;
        const n = new Blob(
            [
              'class A extends AudioWorkletProcessor{process(){this.port.postMessage(0)}}registerProcessor("a",A)',
            ],
            {
              type: "application/javascript; charset=utf-8",
            }
          ),
          s = new e(1, 128, 3200),
          i = URL.createObjectURL(n);
        let o = !1;
        try {
          await s.audioWorklet.addModule(i);
          const e = s.createGain(),
            n = new t(s, "a", {
              numberOfOutputs: 0,
            });
          (n.port.onmessage = () => (o = !0)),
            e.connect(n),
            await s.startRendering();
        } catch {
        } finally {
          URL.revokeObjectURL(i);
        }
        return o;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => () => {
        if (null === e) return !1;
        const n = new e(1, 1, 44100),
          s = t(n, (t) => t.createChannelMerger());
        try {
          s.channelCount = 2;
        } catch {
          return !0;
        }
        return !1;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => () => {
        if (null === e) return !1;
        const n = new e(1, 1, 44100);
        return (
          void 0 === n.createConstantSource ||
          t(n, (t) => t.createConstantSource()).offset.maxValue !==
            Number.POSITIVE_INFINITY
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => () => {
        if (null === t) return !1;
        const e = new t(1, 1, 44100),
          n = e.createConvolver();
        n.buffer = e.createBuffer(1, 1, e.sampleRate);
        try {
          n.buffer = e.createBuffer(1, 1, e.sampleRate);
        } catch {
          return !1;
        }
        return !0;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => () => null !== t && t.hasOwnProperty("isSecureContext");
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => () => {
        if (null === t) return !1;
        const e = new t();
        try {
          return e.createMediaStreamSource(new MediaStream()), !1;
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => () => {
        if (null === e) return Promise.resolve(!1);
        const n = new e(1, 1, 44100),
          s = t(n, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0,
          });
        return new Promise((t) => {
          (n.oncomplete = () => {
            s.disconnect(), t(0 !== n.currentTime);
          }),
            n.startRendering();
        });
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => () => {
        if (null === t) return Promise.resolve(!1);
        const e = new t(1, 1, 44100);
        if (void 0 === e.createStereoPanner) return Promise.resolve(!0);
        if (void 0 === e.createConstantSource) return Promise.resolve(!0);
        const n = e.createConstantSource(),
          s = e.createStereoPanner();
        return (
          (n.channelCount = 1),
          (n.offset.value = 1),
          (s.channelCount = 1),
          n.start(),
          n.connect(s).connect(e.destination),
          e.startRendering().then((t) => 1 !== t.getChannelData(0)[0])
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      const s = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          curve: null,
          oversample: "none",
        },
        i = (t, e, n, i, o, r) =>
          class extends t {
            constructor(t, e = s) {
              const a = o(t),
                c = {
                  ...s,
                  ...e,
                },
                u = n(a, c);
              super(t, !0, u, r(a) ? i() : null),
                (this._isCurveNullified = !1),
                (this._nativeWaveShaperNode = u);
            }
            get curve() {
              return this._isCurveNullified
                ? null
                : this._nativeWaveShaperNode.curve;
            }
            set curve(t) {
              if (null === t)
                (this._isCurveNullified = !0),
                  (this._nativeWaveShaperNode.curve = new Float32Array([0, 0]));
              else {
                if (t.length < 2) throw e();
                (this._isCurveNullified = !1),
                  (this._nativeWaveShaperNode.curve = t);
              }
            }
            get oversample() {
              return this._nativeWaveShaperNode.oversample;
            }
            set oversample(t) {
              this._nativeWaveShaperNode.oversample = t;
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(12),
        i = n(3);
      const o = (t, e, n) => () => {
        const o = new WeakMap();
        return {
          render(r, a, c) {
            const u = o.get(a);
            return void 0 !== u
              ? Promise.resolve(u)
              : (async (r, a, c) => {
                  let u = e(r);
                  if (!Object(i.a)(u, a)) {
                    const e = {
                      channelCount: u.channelCount,
                      channelCountMode: u.channelCountMode,
                      channelInterpretation: u.channelInterpretation,
                      curve: u.curve,
                      oversample: u.oversample,
                    };
                    u = t(a, e);
                  }
                  return (
                    o.set(a, u),
                    Object(s.a)(u)
                      ? await n(r, a, u.inputs[0], c)
                      : await n(r, a, u, c),
                    u
                  );
                })(r, a, c);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = () => ("undefined" == typeof window ? null : window);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e) => (n) => {
        (n.copyFromChannel = (s, i, o = 0) => {
          const r = t(o),
            a = t(i);
          if (a >= n.numberOfChannels) throw e();
          const c = n.length,
            u = n.getChannelData(a),
            h = s.length;
          for (let t = r < 0 ? -r : 0; t + r < c && t < h; t += 1)
            s[t] = u[t + r];
        }),
          (n.copyToChannel = (s, i, o = 0) => {
            const r = t(o),
              a = t(i);
            if (a >= n.numberOfChannels) throw e();
            const c = n.length,
              u = n.getChannelData(a),
              h = s.length;
            for (let t = r < 0 ? -r : 0; t + r < c && t < h; t += 1)
              u[t + r] = s[t];
          });
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => {
        var n, s;
        (e.copyFromChannel =
          ((n = e.copyFromChannel),
          (s, i, o = 0) => {
            const r = t(o),
              a = t(i);
            if (r < e.length) return n.call(e, s, a, r);
          })),
          (e.copyToChannel =
            ((s = e.copyToChannel),
            (n, i, o = 0) => {
              const r = t(o),
                a = t(i);
              if (r < e.length) return s.call(e, n, a, r);
            }));
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e, n) => {
        const s = n.createBuffer(1, 1, n.sampleRate);
        null === e.buffer && (e.buffer = s),
          t(
            e,
            "buffer",
            (t) => () => {
              const n = t.call(e);
              return n === s ? null : n;
            },
            (t) => (n) => t.call(e, null === n ? s : n)
          );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(11);
      const i = (t) => (e, n) => {
        const i = t(n, (t) => t.createGain());
        e.connect(i);
        const o =
          ((r = e.disconnect),
          () => {
            r.call(e, i), e.removeEventListener("ended", o);
          });
        var r;
        e.addEventListener("ended", o),
          Object(s.a)(e, i),
          (e.stop = ((t) => {
            let n = !1;
            return (s = 0) => {
              if (n)
                try {
                  t.call(e, s);
                } catch {
                  i.gain.setValueAtTime(0, s);
                }
              else t.call(e, s), (n = !0);
            };
          })(e.stop));
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n) => (s, i) => {
        (i.channelCount = 1),
          (i.channelCountMode = "explicit"),
          Object.defineProperty(i, "channelCount", {
            get: () => 1,
            set: () => {
              throw t();
            },
          }),
          Object.defineProperty(i, "channelCountMode", {
            get: () => "explicit",
            set: () => {
              throw t();
            },
          });
        const o = e(s, (t) => t.createBufferSource());
        n(
          i,
          () => {
            const t = i.numberOfInputs;
            for (let e = 0; e < t; e += 1) o.connect(i, 0, e);
          },
          () => o.disconnect(i)
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = () =>
        new Promise((t) => {
          const e = new ArrayBuffer(0),
            { port1: n, port2: s } = new MessageChannel();
          (n.onmessage = ({ data: e }) => t(null !== e)), s.postMessage(e, [e]);
        });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => {
        var e;
        t.start =
          ((e = t.start),
          (n = 0, s = 0, i) => {
            const o = t.buffer,
              r = null === o ? s : Math.min(o.duration, s);
            null !== o && r > o.duration - 0.5 / t.context.sampleRate
              ? e.call(t, n, 0, 0)
              : e.call(t, n, r, i);
          });
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return N;
      });
      var s = n(0),
        i = n(24),
        o = n(22);
      const r = (t) => "port" in t;
      var a = n(33),
        c = n(20);
      const u = (t, e) => {
        if (!Object(c.a)(t).delete(e))
          throw new Error("Missing the expected event listener.");
      };
      var h = n(34),
        l = n(8),
        d = n(26),
        p = n(6),
        f = n(27),
        _ = n(9),
        m = n(16),
        g = n(23),
        v = n(19);
      const y = (t) => !s.a.has(t),
        b = (t, e) => {
          const n = Array.from(t).filter(e);
          if (n.length > 1) throw Error("More than one element was found.");
          if (0 === n.length) throw Error("No element was found.");
          const [s] = n;
          return t.delete(s), s;
        };
      var x = n(17),
        w = n(21);
      const T = (t, e) => {
          !r(t) && e.every((t) => 0 === t.size) && Object(w.a)(t);
        },
        O = (t) =>
          new Promise((e) => {
            const n = t.createScriptProcessor(256, 1, 1),
              s = t.createGain(),
              i = t.createBuffer(1, 2, 44100),
              o = i.getChannelData(0);
            (o[0] = 1), (o[1] = 1);
            const r = t.createBufferSource();
            (r.buffer = i),
              (r.loop = !0),
              r.connect(n).connect(t.destination),
              r.connect(s),
              r.disconnect(s),
              (n.onaudioprocess = (s) => {
                const i = s.inputBuffer.getChannelData(0);
                Array.prototype.some.call(i, (t) => 1 === t) ? e(!0) : e(!1),
                  r.stop(),
                  (n.onaudioprocess = null),
                  r.disconnect(n),
                  n.disconnect(t.destination);
              }),
              r.start();
          }),
        S = (t, e) => {
          const n = new Map();
          for (const e of t)
            for (const t of e) {
              const e = n.get(t);
              n.set(t, void 0 === e ? 1 : e + 1);
            }
          n.forEach((t, n) => e(n, t));
        };
      var C = n(25);
      const k = (t, e, [n, s, i], o) => {
          Object(m.a)(t[s], [e, n, i], (t) => t[0] === e && t[1] === n, o);
        },
        A = (t, e, [n, s], i) => {
          Object(m.a)(t, [e, n, s], (t) => t[0] === e && t[1] === n, i);
        },
        D = (t, e, [n, s, i], o) => {
          const r = t.get(n);
          void 0 === r
            ? t.set(n, new Set([[s, e, i]]))
            : Object(m.a)(r, [s, e, i], (t) => t[0] === s && t[1] === e, o);
        },
        M = (t, [e, n, s], i) => {
          const o = t.get(e);
          void 0 === o
            ? t.set(e, new Set([[n, s]]))
            : Object(m.a)(o, [n, s], (t) => t[0] === n, i);
        },
        j = (t, e, n, s) => {
          const i = Object(_.a)(t, e),
            o = b(i, (t) => t[0] === n && t[1] === s);
          return 0 === i.size && t.delete(e), o;
        },
        E = (t, e, n) => {
          const s = Object(_.a)(t, e),
            i = b(s, (t) => t[0] === n);
          return 0 === s.size && t.delete(e), i;
        },
        R = (t, e, n, s) => {
          const { activeInputs: i, passiveInputs: o } = Object(l.a)(e),
            { outputs: r } = Object(l.a)(t),
            u = Object(c.a)(t),
            d = (r) => {
              const c = Object(p.a)(e),
                u = Object(p.a)(t);
              if (r) {
                const r = j(o, t, n, s);
                k(i, t, r, !1),
                  Object(v.a)(t) || Object(a.a)(u, c, n, s),
                  y(e) && Object(x.a)(e);
              } else {
                const r = ((t, e, n, s) =>
                  b(t[s], (t) => t[0] === e && t[1] === n))(i, t, n, s);
                D(o, s, r, !1),
                  Object(v.a)(t) || Object(h.a)(u, c, n, s),
                  Object(g.a)(e) && T(e, i);
              }
            };
          return (
            !!Object(m.a)(
              r,
              [e, n, s],
              (t) => t[0] === e && t[1] === n && t[2] === s,
              !0
            ) &&
            (u.add(d),
            Object(g.a)(t) ? k(i, t, [n, s, d], !0) : D(o, s, [t, n, d], !0),
            !0)
          );
        },
        q = (t, e, n) => {
          const { activeInputs: s, passiveInputs: i } = Object(d.a)(e),
            { outputs: o } = Object(l.a)(t),
            r = Object(c.a)(t),
            a = (o) => {
              const r = Object(p.a)(t),
                a = Object(f.a)(e);
              if (o) {
                const e = E(i, t, n);
                A(s, t, e, !1), Object(v.a)(t) || r.connect(a, n);
              } else {
                const e = ((t, e, n) => b(t, (t) => t[0] === e && t[1] === n))(
                  s,
                  t,
                  n
                );
                M(i, e, !1), Object(v.a)(t) || r.disconnect(a, n);
              }
            };
          return (
            !!Object(m.a)(o, [e, n], (t) => t[0] === e && t[1] === n, !0) &&
            (r.add(a),
            Object(g.a)(t) ? A(s, t, [n, a], !0) : M(i, [t, n, a], !0),
            !0)
          );
        },
        I = (t, e, n) => {
          for (const s of t)
            if (s[0] === e && s[1] === n) return t.delete(s), s;
          return null;
        },
        F = (t, e, n, s) => {
          const [i, o] = ((t, e, n, s) => {
            const { activeInputs: i, passiveInputs: o } = Object(l.a)(e),
              r = I(i[s], t, n);
            if (null === r) {
              return [j(o, t, n, s)[2], !1];
            }
            return [r[2], !0];
          })(t, e, n, s);
          if (
            (null !== i &&
              (u(t, i),
              o &&
                !Object(v.a)(t) &&
                Object(h.a)(Object(p.a)(t), Object(p.a)(e), n, s)),
            Object(g.a)(e))
          ) {
            const { activeInputs: t } = Object(l.a)(e);
            T(e, t);
          }
        },
        V = (t, e, n) => {
          const [s, i] = ((t, e, n) => {
            const { activeInputs: s, passiveInputs: i } = Object(d.a)(e),
              o = I(s, t, n);
            if (null === o) {
              return [E(i, t, n)[1], !1];
            }
            return [o[2], !0];
          })(t, e, n);
          null !== s &&
            (u(t, s),
            i &&
              !Object(v.a)(t) &&
              Object(p.a)(t).disconnect(Object(f.a)(e), n));
        },
        N = (t, e, n, c, u, h, _, g, v, b, w, T, D, M, j) =>
          class extends b {
            constructor(e, i, o, r) {
              super(o), (this._context = e), (this._nativeAudioNode = o);
              const a = w(e);
              T(a) &&
                !0 !== n(O, () => O(a)) &&
                ((t) => {
                  const e = new Map();
                  var n, s;
                  (t.connect =
                    ((n = t.connect.bind(t)),
                    (t, s = 0, i = 0) => {
                      const o = Object(C.a)(t) ? n(t, s, i) : n(t, s),
                        r = e.get(t);
                      return (
                        void 0 === r
                          ? e.set(t, [
                              {
                                input: i,
                                output: s,
                              },
                            ])
                          : r.every((t) => t.input !== i || t.output !== s) &&
                            r.push({
                              input: i,
                              output: s,
                            }),
                        o
                      );
                    })),
                    (t.disconnect =
                      ((s = t.disconnect),
                      (n, i, o) => {
                        if ((s.apply(t), void 0 === n)) e.clear();
                        else if ("number" == typeof n)
                          for (const [t, s] of e) {
                            const i = s.filter((t) => t.output !== n);
                            0 === i.length ? e.delete(t) : e.set(t, i);
                          }
                        else if (e.has(n))
                          if (void 0 === i) e.delete(n);
                          else {
                            const t = e.get(n);
                            if (void 0 !== t) {
                              const s = t.filter(
                                (t) =>
                                  t.output !== i &&
                                  (t.input !== o || void 0 === o)
                              );
                              0 === s.length ? e.delete(n) : e.set(n, s);
                            }
                          }
                        for (const [n, s] of e)
                          s.forEach((e) => {
                            Object(C.a)(n)
                              ? t.connect(n, e.output, e.input)
                              : t.connect(n, e.output);
                          });
                      }));
                })(o),
                s.c.set(this, o),
                s.i.set(this, new Set()),
                i && Object(x.a)(this),
                t(this, r, o);
            }
            get channelCount() {
              return this._nativeAudioNode.channelCount;
            }
            set channelCount(t) {
              this._nativeAudioNode.channelCount = t;
            }
            get channelCountMode() {
              return this._nativeAudioNode.channelCountMode;
            }
            set channelCountMode(t) {
              this._nativeAudioNode.channelCountMode = t;
            }
            get channelInterpretation() {
              return this._nativeAudioNode.channelInterpretation;
            }
            set channelInterpretation(t) {
              this._nativeAudioNode.channelInterpretation = t;
            }
            get context() {
              return this._context;
            }
            get numberOfInputs() {
              return this._nativeAudioNode.numberOfInputs;
            }
            get numberOfOutputs() {
              return this._nativeAudioNode.numberOfOutputs;
            }
            connect(t, n = 0, s = 0) {
              if (n < 0 || n >= this._nativeAudioNode.numberOfOutputs)
                throw u();
              const o = w(this._context),
                g = j(o);
              if (D(t) || M(t)) throw h();
              if (Object(i.a)(t)) {
                const i = Object(p.a)(t);
                try {
                  const c = Object(a.a)(this._nativeAudioNode, i, n, s);
                  if (
                    (g || y(this)
                      ? this._nativeAudioNode.disconnect(...c)
                      : y(t) && Object(x.a)(t),
                    r(t))
                  ) {
                    const t = e.get(i);
                    if (void 0 === t) {
                      const t = o.createGain();
                      t.connect(c[0], 0, c[2]), e.set(i, new Map([[s, t]]));
                    } else if (void 0 === t.get(s)) {
                      const e = o.createGain();
                      e.connect(c[0], 0, c[2]), t.set(s, e);
                    }
                  }
                } catch (t) {
                  if (12 === t.code) throw h();
                  throw t;
                }
                if (
                  g
                    ? ((t, e, n, s) => {
                        const { outputs: i } = Object(l.a)(t);
                        if (
                          Object(m.a)(
                            i,
                            [e, n, s],
                            (t) => t[0] === e && t[1] === n && t[2] === s,
                            !0
                          )
                        ) {
                          const { activeInputs: i } = Object(l.a)(e);
                          return k(i, t, [n, s, null], !0), !0;
                        }
                        return !1;
                      })(this, t, n, s)
                    : R(this, t, n, s)
                ) {
                  const e = v([this], t);
                  S(e, c(g));
                }
                return t;
              }
              const b = Object(f.a)(t);
              if ("playbackRate" === b.name) throw _();
              try {
                this._nativeAudioNode.connect(b, n),
                  (g || y(this)) && this._nativeAudioNode.disconnect(b, n);
              } catch (t) {
                if (12 === t.code) throw h();
                throw t;
              }
              if (
                g
                  ? ((t, e, n) => {
                      const { outputs: s } = Object(l.a)(t);
                      if (
                        Object(m.a)(
                          s,
                          [e, n],
                          (t) => t[0] === e && t[1] === n,
                          !0
                        )
                      ) {
                        const { activeInputs: s } = Object(d.a)(e);
                        return A(s, t, [n, null], !0), !0;
                      }
                      return !1;
                    })(this, t, n)
                  : q(this, t, n)
              ) {
                const e = v([this], t);
                S(e, c(g));
              }
            }
            disconnect(t, e, n) {
              let s;
              if (void 0 === t)
                s = ((t) => {
                  const e = Object(l.a)(t),
                    n = [];
                  for (const s of e.outputs)
                    Object(o.a)(s) ? F(t, ...s) : V(t, ...s), n.push(s[0]);
                  return e.outputs.clear(), n;
                })(this);
              else if ("number" == typeof t) {
                if (t < 0 || t >= this.numberOfOutputs) throw u();
                s = ((t, e) => {
                  const n = Object(l.a)(t),
                    s = [];
                  for (const i of n.outputs)
                    i[1] === e &&
                      (Object(o.a)(i) ? F(t, ...i) : V(t, ...i),
                      s.push(i[0]),
                      n.outputs.delete(i));
                  return s;
                })(this, t);
              } else {
                if (void 0 !== e && (e < 0 || e >= this.numberOfOutputs))
                  throw u();
                if (
                  Object(i.a)(t) &&
                  void 0 !== n &&
                  (n < 0 || n >= t.numberOfInputs)
                )
                  throw u();
                if (
                  ((s = ((t, e, n, s) => {
                    const i = Object(l.a)(t);
                    return Array.from(i.outputs)
                      .filter(
                        (t) =>
                          !(
                            t[0] !== e ||
                            (void 0 !== n && t[1] !== n) ||
                            (void 0 !== s && t[2] !== s)
                          )
                      )
                      .map(
                        (e) => (
                          Object(o.a)(e) ? F(t, ...e) : V(t, ...e),
                          i.outputs.delete(e),
                          e[0]
                        )
                      );
                  })(this, t, e, n)),
                  0 === s.length)
                )
                  throw h();
              }
              for (const t of s) {
                const e = v([this], t);
                S(e, g);
              }
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var s = n(2),
        i = n(43),
        o = n(35),
        r = n(41),
        a = n(0);
      const c = async (t, e) =>
        new t(
          await ((t) =>
            new Promise((e, n) => {
              const { port1: s, port2: i } = new MessageChannel();
              (s.onmessage = ({ data: t }) => {
                s.close(), i.close(), e(t);
              }),
                (s.onmessageerror = ({ data: t }) => {
                  s.close(), i.close(), n(t);
                }),
                i.postMessage(t);
            }))(e)
        );
      var u = n(36),
        h = n(40);
      const l = (t, e, n, l, d, p, f, _, m, g, v, y, b) => (x, w, T, O) => {
        if (0 === O.numberOfInputs && 0 === O.numberOfOutputs) throw g();
        if (void 0 !== O.outputChannelCount) {
          if (O.outputChannelCount.some((t) => t < 1)) throw g();
          if (O.outputChannelCount.length !== O.numberOfOutputs) throw n();
        }
        if ("explicit" !== O.channelCountMode) throw g();
        const S = O.channelCount * O.numberOfInputs,
          C = O.outputChannelCount.reduce((t, e) => t + e, 0),
          k =
            void 0 === T.parameterDescriptors
              ? 0
              : T.parameterDescriptors.length;
        if (S + k > 6 || C > 6) throw g();
        const A = new MessageChannel(),
          D = [],
          M = [];
        for (let t = 0; t < O.numberOfInputs; t += 1)
          D.push(
            _(x, {
              channelCount: O.channelCount,
              channelCountMode: O.channelCountMode,
              channelInterpretation: O.channelInterpretation,
              gain: 1,
            })
          ),
            M.push(
              p(x, {
                channelCount: O.channelCount,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                numberOfOutputs: O.channelCount,
              })
            );
        const j = [];
        if (void 0 !== T.parameterDescriptors)
          for (const {
            defaultValue: t,
            maxValue: e,
            minValue: n,
            name: i,
          } of T.parameterDescriptors) {
            const o = f(x, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              offset:
                void 0 !== O.parameterData[i]
                  ? O.parameterData[i]
                  : void 0 === t
                  ? 0
                  : t,
            });
            Object.defineProperties(o.offset, {
              defaultValue: {
                get: () => (void 0 === t ? 0 : t),
              },
              maxValue: {
                get: () => (void 0 === e ? s.b : e),
              },
              minValue: {
                get: () => (void 0 === n ? s.a : n),
              },
            }),
              j.push(o);
          }
        const E = d(x, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: Math.max(1, S + k),
          }),
          R = Object(i.a)(w, x.sampleRate),
          q = m(x, R, S + k, Math.max(1, C)),
          I = p(x, {
            channelCount: Math.max(1, C),
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: Math.max(1, C),
          }),
          F = [];
        for (let t = 0; t < O.numberOfOutputs; t += 1)
          F.push(
            d(x, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: O.outputChannelCount[t],
            })
          );
        for (let t = 0; t < O.numberOfInputs; t += 1) {
          D[t].connect(M[t]);
          for (let e = 0; e < O.channelCount; e += 1)
            M[t].connect(E, e, t * O.channelCount + e);
        }
        const V = new h.a(
          void 0 === T.parameterDescriptors
            ? []
            : T.parameterDescriptors.map(({ name: t }, e) => {
                const n = j[e];
                return n.connect(E, 0, S + e), n.start(0), [t, n.offset];
              })
        );
        E.connect(q);
        let N = O.channelInterpretation,
          P = null;
        const L = 0 === O.numberOfOutputs ? [q] : F,
          z = {
            get bufferSize() {
              return R;
            },
            get channelCount() {
              return O.channelCount;
            },
            set channelCount(t) {
              throw l();
            },
            get channelCountMode() {
              return O.channelCountMode;
            },
            set channelCountMode(t) {
              throw l();
            },
            get channelInterpretation() {
              return N;
            },
            set channelInterpretation(t) {
              for (const e of D) e.channelInterpretation = t;
              N = t;
            },
            get context() {
              return q.context;
            },
            get inputs() {
              return D;
            },
            get numberOfInputs() {
              return O.numberOfInputs;
            },
            get numberOfOutputs() {
              return O.numberOfOutputs;
            },
            get onprocessorerror() {
              return P;
            },
            set onprocessorerror(t) {
              "function" == typeof P &&
                z.removeEventListener("processorerror", P),
                (P = "function" == typeof t ? t : null),
                "function" == typeof P &&
                  z.addEventListener("processorerror", P);
            },
            get parameters() {
              return V;
            },
            get port() {
              return A.port2;
            },
            addEventListener: (...t) => q.addEventListener(t[0], t[1], t[2]),
            connect: e.bind(null, L),
            disconnect: v.bind(null, L),
            dispatchEvent: (...t) => q.dispatchEvent(t[0]),
            removeEventListener: (...t) =>
              q.removeEventListener(t[0], t[1], t[2]),
          },
          B = new Map();
        var W, U;
        (A.port1.addEventListener =
          ((W = A.port1.addEventListener),
          (...t) => {
            if ("message" === t[0]) {
              const e =
                "function" == typeof t[1]
                  ? t[1]
                  : "object" == typeof t[1] &&
                    null !== t[1] &&
                    "function" == typeof t[1].handleEvent
                  ? t[1].handleEvent
                  : null;
              if (null !== e) {
                const n = B.get(t[1]);
                void 0 !== n
                  ? (t[1] = n)
                  : ((t[1] = (t) => {
                      y(x.currentTime, x.sampleRate, () => e(t));
                    }),
                    B.set(e, t[1]));
              }
            }
            return W.call(A.port1, t[0], t[1], t[2]);
          })),
          (A.port1.removeEventListener =
            ((U = A.port1.removeEventListener),
            (...t) => {
              if ("message" === t[0]) {
                const e = B.get(t[1]);
                void 0 !== e && (B.delete(t[1]), (t[1] = e));
              }
              return U.call(A.port1, t[0], t[1], t[2]);
            }));
        let G = null;
        Object.defineProperty(A.port1, "onmessage", {
          get: () => G,
          set: (t) => {
            "function" == typeof G && A.port1.removeEventListener("message", G),
              (G = "function" == typeof t ? t : null),
              "function" == typeof G &&
                (A.port1.addEventListener("message", G), A.port1.start());
          },
        }),
          (T.prototype.port = A.port1);
        let Y = null;
        ((t, e, n, s) => {
          let i = a.k.get(t);
          void 0 === i && ((i = new WeakMap()), a.k.set(t, i));
          const o = c(n, s);
          return i.set(e, o), o;
        })(x, z, T, O).then((t) => (Y = t));
        const Q = Object(u.a)(O.numberOfInputs, O.channelCount),
          Z = Object(u.a)(O.numberOfOutputs, O.outputChannelCount),
          X =
            void 0 === T.parameterDescriptors
              ? []
              : T.parameterDescriptors.reduce(
                  (t, { name: e }) => ({
                    ...t,
                    [e]: new Float32Array(128),
                  }),
                  {}
                );
        let H = !0;
        const $ = () => {
          O.numberOfOutputs > 0 && q.disconnect(I);
          for (let t = 0, e = 0; t < O.numberOfOutputs; t += 1) {
            const n = F[t];
            for (let s = 0; s < O.outputChannelCount[t]; s += 1)
              I.disconnect(n, e + s, s);
            e += O.outputChannelCount[t];
          }
        };
        q.onaudioprocess = ({ inputBuffer: e, outputBuffer: n }) => {
          if (null !== Y)
            for (let s = 0; s < R; s += 128) {
              for (let t = 0; t < O.numberOfInputs; t += 1)
                for (let n = 0; n < O.channelCount; n += 1)
                  Object(o.a)(e, Q[t], n, n, s);
              void 0 !== T.parameterDescriptors &&
                T.parameterDescriptors.forEach(({ name: t }, n) => {
                  Object(o.a)(e, X, t, S + n, s);
                });
              for (let t = 0; t < O.numberOfInputs; t += 1)
                for (let e = 0; e < O.outputChannelCount[t]; e += 1)
                  0 === Z[t][e].byteLength && (Z[t][e] = new Float32Array(128));
              try {
                const e = Q.map((e, n) => {
                    const s = t.get(z);
                    return void 0 === s || void 0 === s.get(n) ? [] : e;
                  }),
                  i = y(x.currentTime + s / x.sampleRate, x.sampleRate, () =>
                    Y.process(e, Z, X)
                  );
                H = i;
                for (let t = 0, e = 0; t < O.numberOfOutputs; t += 1) {
                  for (let i = 0; i < O.outputChannelCount[t]; i += 1)
                    Object(r.a)(n, Z[t], i, e + i, s);
                  e += O.outputChannelCount[t];
                }
              } catch (t) {
                (H = !1),
                  z.dispatchEvent(
                    new ErrorEvent("processorerror", {
                      error: t,
                    })
                  );
              }
              if (!H) {
                for (let t = 0; t < O.numberOfInputs; t += 1) {
                  D[t].disconnect(M[t]);
                  for (let e = 0; e < O.channelCount; e += 1)
                    M[s].disconnect(E, e, t * O.channelCount + e);
                }
                if (void 0 !== T.parameterDescriptors) {
                  const t = T.parameterDescriptors.length;
                  for (let e = 0; e < t; e += 1) {
                    const t = j[e];
                    t.disconnect(E, 0, S + e), t.stop();
                  }
                }
                E.disconnect(q), (q.onaudioprocess = null), J ? $() : et();
                break;
              }
            }
        };
        let J = !1;
        const K = _(x, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0,
          }),
          tt = () => q.connect(K).connect(K.context.destination),
          et = () => {
            q.disconnect(K), K.disconnect();
          };
        return (
          tt(),
          b(
            z,
            () => {
              if (H) {
                et(), O.numberOfOutputs > 0 && q.connect(I);
                for (let t = 0, e = 0; t < O.numberOfOutputs; t += 1) {
                  const n = F[t];
                  for (let s = 0; s < O.outputChannelCount[t]; s += 1)
                    I.connect(n, e + s, s);
                  e += O.outputChannelCount[t];
                }
              }
              J = !0;
            },
            () => {
              H && (tt(), $()), (J = !1);
            }
          )
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var s = n(0);
      const i = {
          construct: () => i,
        },
        o =
          /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
        r = (t, e) => {
          const n = [];
          let s = t.replace(/^[\s]+/, ""),
            i = s.match(o);
          for (; null !== i; ) {
            const t = i[1].slice(1, -1),
              r = i[0]
                .replace(/([\s]+)?;?$/, "")
                .replace(t, new URL(t, e).toString());
            n.push(r),
              (s = s.slice(i[0].length).replace(/^[\s]+/, "")),
              (i = s.match(o));
          }
          return [n.join(";"), s];
        },
        a = (t) => {
          if (void 0 !== t && !Array.isArray(t))
            throw new TypeError(
              "The parameterDescriptors property of given value for processorCtor is not an array."
            );
        },
        c = (t) => {
          if (
            !((t) => {
              try {
                new new Proxy(t, i)();
              } catch {
                return !1;
              }
              return !0;
            })(t)
          )
            throw new TypeError(
              "The given value for processorCtor should be a constructor."
            );
          if (null === t.prototype || "object" != typeof t.prototype)
            throw new TypeError(
              "The given value for processorCtor should have a prototype."
            );
        },
        u =
          (t, e, n, i, o, u, h, l, d) =>
          (
            p,
            f,
            _ = {
              credentials: "omit",
            }
          ) => {
            const m = u(p),
              g = new URL(f, d.location.href).toString();
            if (void 0 !== m.audioWorklet)
              return i(f).then((t) => {
                const [e, n] = r(t, g),
                  s = new Blob(
                    [
                      `${e};(registerProcessor=>{${n}\n})((n,p)=>registerProcessor(n,class extends p{process(i,o,p){return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}))`,
                    ],
                    {
                      type: "application/javascript; charset=utf-8",
                    }
                  ),
                  i = URL.createObjectURL(s),
                  a = o(m);
                return (null !== a ? a : m).audioWorklet
                  .addModule(i, _)
                  .then(() => URL.revokeObjectURL(i))
                  .catch((t) => {
                    throw (
                      (URL.revokeObjectURL(i),
                      (void 0 !== t.code && "SyntaxError" !== t.name) ||
                        (t.code = 12),
                      t)
                    );
                  });
              });
            const v = l.get(p);
            if (void 0 !== v && v.has(f)) return Promise.resolve();
            const y = h.get(p);
            if (void 0 !== y) {
              const t = y.get(f);
              if (void 0 !== t) return t;
            }
            const b = i(f)
              .then((t) => {
                const [n, s] = r(t, g);
                return e(
                  `${n};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${s}\n})})(window,'_AWGS')`
                );
              })
              .then(() => {
                const e = d._AWGS.pop();
                if (void 0 === e) throw new SyntaxError();
                n(m.currentTime, m.sampleRate, () =>
                  e(
                    class {},
                    void 0,
                    (e, n) => {
                      if ("" === e.trim()) throw t();
                      const i = s.j.get(m);
                      if (void 0 !== i) {
                        if (i.has(e)) throw t();
                        c(n), a(n.parameterDescriptors), i.set(e, n);
                      } else
                        c(n),
                          a(n.parameterDescriptors),
                          s.j.set(m, new Map([[e, n]]));
                    },
                    m.sampleRate,
                    void 0,
                    void 0
                  )
                );
              })
              .catch((t) => {
                throw (
                  ((void 0 !== t.code && "SyntaxError" !== t.name) ||
                    (t.code = 12),
                  t)
                );
              });
            return (
              void 0 === y ? h.set(p, new Map([[f, b]])) : y.set(f, b),
              b
                .then(() => {
                  const t = l.get(p);
                  void 0 === t ? l.set(p, new Set([f])) : t.add(f);
                })
                .catch(() => {})
                .then(() => {
                  const t = h.get(p);
                  void 0 !== t && t.delete(f);
                }),
              b
            );
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n(4),
        i = n(1);
      const o = (t) => "function" == typeof t.getFloatTimeDomainData,
        r = (t, e, n) => (r, a) => {
          const c = n(r, (t) => t.createAnalyser());
          if ((Object(i.a)(c, a), !(a.maxDecibels > a.minDecibels))) throw e();
          return (
            Object(s.a)(c, a, "fftSize"),
            Object(s.a)(c, a, "maxDecibels"),
            Object(s.a)(c, a, "minDecibels"),
            Object(s.a)(c, a, "smoothingTimeConstant"),
            t(o, () => o(c)) ||
              ((t) => {
                t.getFloatTimeDomainData = (e) => {
                  const n = new Uint8Array(e.length);
                  t.getByteTimeDomainData(n);
                  const s = Math.max(n.length, t.fftSize);
                  for (let t = 0; t < s; t += 1)
                    e[t] = 0.0078125 * (n[t] - 128);
                  return e;
                };
              })(c),
            c
          );
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var s = n(5),
        i = n(4),
        o = n(1),
        r = n(7);
      var a = n(30),
        c = n(31);
      const u =
        (t, e, n, u, h, l, d, p, f, _, m, g, v) =>
        (y, b = {}) => {
          const x = n(y, (t) => t.createBufferSource());
          return (
            Object(o.a)(x, b),
            Object(s.a)(x, b, "playbackRate"),
            Object(i.a)(x, b, "buffer"),
            Object(i.a)(x, b, "loop"),
            Object(i.a)(x, b, "loopEnd"),
            Object(i.a)(x, b, "loopStart"),
            e(u, () => u(y)) ||
              ((t) => {
                t.start = ((e) => {
                  let n = !1;
                  return (s = 0, i = 0, o) => {
                    if (n) throw Object(r.a)();
                    e.call(t, s, i, o), (n = !0);
                  };
                })(t.start);
              })(x),
            e(h, h) ||
              ((t, e) => {
                let n = Number.POSITIVE_INFINITY,
                  s = Number.POSITIVE_INFINITY;
                var i, o;
                (t.start =
                  ((i = t.start),
                  (o = t.stop),
                  (r = 0, a = 0, c = Number.POSITIVE_INFINITY) => {
                    if (
                      (i.call(t, r, a), c >= 0 && c < Number.POSITIVE_INFINITY)
                    ) {
                      const i = Math.max(r, e.currentTime),
                        a = c / t.playbackRate.value;
                      (n = i + a), o.call(t, Math.min(n, s));
                    }
                  })),
                  (t.stop = (
                    (i) =>
                    (o = 0) => {
                      (s = Math.max(o, e.currentTime)),
                        i.call(t, Math.min(n, s));
                    }
                  )(t.stop));
              })(x, y),
            e(l, () => l(y)) || m(x),
            e(d, () => d(y)) || g(x, y),
            e(p, () => p(y)) || Object(a.a)(x),
            e(f, () => f(y)) || v(x, y),
            e(_, () => _(y)) || Object(c.a)(x),
            t(y, x),
            x
          );
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return d;
      });
      var s = n(35),
        i = n(41),
        o = n(36),
        r = n(8),
        a = n(0),
        c = n(6),
        u = n(9);
      var h = n(3);
      const l = async (t, e, n, h, l, d) => {
          const p =
              null === e ? 128 * Math.ceil(t.context.length / 128) : e.length,
            f = h.channelCount * h.numberOfInputs,
            _ = h.outputChannelCount.reduce((t, e) => t + e, 0),
            m = 0 === _ ? null : n.createBuffer(_, p, n.sampleRate);
          if (void 0 === l)
            throw new Error("Missing the processor constructor.");
          const g = Object(r.a)(t),
            v = await ((t, e) => {
              const n = Object(u.a)(a.k, t),
                s = Object(c.a)(e);
              return Object(u.a)(n, s);
            })(n, t),
            y = Object(o.a)(h.numberOfInputs, h.channelCount),
            b = Object(o.a)(h.numberOfOutputs, h.outputChannelCount),
            x = Array.from(t.parameters.keys()).reduce(
              (t, e) => ({
                ...t,
                [e]: new Float32Array(128),
              }),
              {}
            );
          for (let o = 0; o < p; o += 128) {
            if (h.numberOfInputs > 0 && null !== e)
              for (let t = 0; t < h.numberOfInputs; t += 1)
                for (let n = 0; n < h.channelCount; n += 1)
                  Object(s.a)(e, y[t], n, n, o);
            void 0 !== l.parameterDescriptors &&
              null !== e &&
              l.parameterDescriptors.forEach(({ name: t }, n) => {
                Object(s.a)(e, x, t, f + n, o);
              });
            for (let t = 0; t < h.numberOfInputs; t += 1)
              for (let e = 0; e < h.outputChannelCount[t]; e += 1)
                0 === b[t][e].byteLength && (b[t][e] = new Float32Array(128));
            try {
              const t = y.map((t, e) =>
                  0 === g.activeInputs[e].size ? [] : t
                ),
                e = d(o / n.sampleRate, n.sampleRate, () => v.process(t, b, x));
              if (null !== m)
                for (let t = 0, e = 0; t < h.numberOfOutputs; t += 1) {
                  for (let n = 0; n < h.outputChannelCount[t]; n += 1)
                    Object(i.a)(m, b[t], n, e + n, o);
                  e += h.outputChannelCount[t];
                }
              if (!e) break;
            } catch (e) {
              t.dispatchEvent(
                new ErrorEvent("processorerror", {
                  error: e,
                })
              );
              break;
            }
          }
          return m;
        },
        d = (t, e, n, s, i, o, r, a, c, u, d, p, f, _, m, g) => (v, y, b) => {
          const x = new WeakMap();
          let w = null;
          return {
            render(T, O, S) {
              a(O, T);
              const C = x.get(O);
              return void 0 !== C
                ? Promise.resolve(C)
                : (async (a, T, O) => {
                    let S = d(a),
                      C = null;
                    const k = Object(h.a)(S, T);
                    if (null === p) {
                      const t = y.outputChannelCount.reduce((t, e) => t + e, 0),
                        n = i(T, {
                          channelCount: Math.max(1, t),
                          channelCountMode: "explicit",
                          channelInterpretation: "discrete",
                          numberOfOutputs: Math.max(1, t),
                        }),
                        o = [];
                      for (let t = 0; t < a.numberOfOutputs; t += 1)
                        o.push(
                          s(T, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "speakers",
                            numberOfInputs: y.outputChannelCount[t],
                          })
                        );
                      const u = r(T, {
                        channelCount: y.channelCount,
                        channelCountMode: y.channelCountMode,
                        channelInterpretation: y.channelInterpretation,
                        gain: 1,
                      });
                      (u.connect = e.bind(null, o)),
                        (u.disconnect = c.bind(null, o)),
                        (C = [n, o, u]);
                    } else k || (S = new p(T, v));
                    if ((x.set(T, null === C ? S : C[2]), null !== C)) {
                      if (null === w) {
                        if (void 0 === b)
                          throw new Error("Missing the processor constructor.");
                        if (null === f)
                          throw new Error(
                            "Missing the native OfflineAudioContext constructor."
                          );
                        const t = a.channelCount * a.numberOfInputs,
                          e =
                            void 0 === b.parameterDescriptors
                              ? 0
                              : b.parameterDescriptors.length,
                          n = t + e,
                          c = async () => {
                            const c = new f(
                                n,
                                128 * Math.ceil(a.context.length / 128),
                                T.sampleRate
                              ),
                              u = [],
                              h = [];
                            for (let t = 0; t < y.numberOfInputs; t += 1)
                              u.push(
                                r(c, {
                                  channelCount: y.channelCount,
                                  channelCountMode: y.channelCountMode,
                                  channelInterpretation:
                                    y.channelInterpretation,
                                  gain: 1,
                                })
                              ),
                                h.push(
                                  i(c, {
                                    channelCount: y.channelCount,
                                    channelCountMode: "explicit",
                                    channelInterpretation: "discrete",
                                    numberOfOutputs: y.channelCount,
                                  })
                                );
                            const l = await Promise.all(
                                Array.from(a.parameters.values()).map(
                                  async (t) => {
                                    const e = o(c, {
                                      channelCount: 1,
                                      channelCountMode: "explicit",
                                      channelInterpretation: "discrete",
                                      offset: t.value,
                                    });
                                    return await _(c, t, e.offset, O), e;
                                  }
                                )
                              ),
                              d = s(c, {
                                channelCount: 1,
                                channelCountMode: "explicit",
                                channelInterpretation: "speakers",
                                numberOfInputs: Math.max(1, t + e),
                              });
                            for (let t = 0; t < y.numberOfInputs; t += 1) {
                              u[t].connect(h[t]);
                              for (let e = 0; e < y.channelCount; e += 1)
                                h[t].connect(d, e, t * y.channelCount + e);
                            }
                            for (const [e, n] of l.entries())
                              n.connect(d, 0, t + e), n.start(0);
                            return (
                              d.connect(c.destination),
                              await Promise.all(u.map((t) => m(a, c, t, O))),
                              g(c)
                            );
                          };
                        w = l(a, 0 === n ? null : await c(), T, y, b, u);
                      }
                      const t = await w,
                        e = n(T),
                        [c, h, d] = C;
                      null !== t && ((e.buffer = t), e.start(0)), e.connect(c);
                      for (let t = 0, e = 0; t < a.numberOfOutputs; t += 1) {
                        const n = h[t];
                        for (let s = 0; s < y.outputChannelCount[t]; s += 1)
                          c.connect(n, e + s, s);
                        e += y.outputChannelCount[t];
                      }
                      return d;
                    }
                    if (k)
                      for (const [e, n] of a.parameters.entries())
                        await t(T, n, S.parameters.get(e), O);
                    else
                      for (const [t, e] of a.parameters.entries())
                        await _(T, e, S.parameters.get(t), O);
                    return await m(a, T, S, O), S;
                  })(T, O, S);
            },
          };
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(29);
      const i = (t, e, n, i, o, r, a, c, u, h, l, d, p) => (f, _) => {
        const m = a(f) ? f : r(f);
        if (o.has(_)) {
          const t = n();
          return Promise.reject(t);
        }
        try {
          o.add(_);
        } catch {}
        if (e(l, () => l(m))) {
          return (
            "closed" === m.state && null !== u && c(m)
              ? new u(1, 1, m.sampleRate)
              : m
          )
            .decodeAudioData(_)
            .catch((t) => {
              if (t instanceof DOMException && "NotSupportedError" === t.name)
                throw new TypeError();
              throw t;
            })
            .then((n) => (e(h, () => h(n)) || p(n), t.add(n), n));
        }
        return new Promise((e, n) => {
          const o = () => {
              try {
                ((t) => {
                  const { port1: e } = new MessageChannel();
                  e.postMessage(t, [t]);
                })(_);
              } catch {}
            },
            r = (t) => {
              n(t), o();
            };
          try {
            m.decodeAudioData(
              _,
              (n) => {
                "function" != typeof n.copyFromChannel &&
                  (d(n), Object(s.a)(n)),
                  t.add(n),
                  o(),
                  e(n);
              },
              (t) => {
                r(null === t ? i() : t);
              }
            );
          } catch (t) {
            r(t);
          }
        });
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n(24);
      const i = (t, e, n) =>
        function i(o, r) {
          const a = Object(s.a)(r) ? r : n(t, r);
          if (((t) => "delayTime" in t)(a)) return [];
          if (o[0] === a) return [o];
          if (o.includes(a)) return [];
          const { outputs: c } = e(a);
          return Array.from(c)
            .map((t) => i([...o, a], t[0]))
            .reduce((t, e) => t.concat(e), []);
        };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(37);
      const i = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
        },
        o = (t, e, n, o, r) =>
          class extends t {
            constructor(t, a) {
              const c = o(t),
                u = r(c),
                h = {
                  ...i,
                  ...a,
                },
                l = e(c, u ? null : t.baseLatency, h);
              super(t, !1, l, u ? n(h.feedback, h.feedforward) : null),
                ((t) => {
                  var e;
                  t.getFrequencyResponse =
                    ((e = t.getFrequencyResponse),
                    (n, i, o) => {
                      if (n.length !== i.length || i.length !== o.length)
                        throw Object(s.a)();
                      return e.call(t, n, i, o);
                    });
                })(l),
                (this._nativeIIRFilterNode = l);
            }
            getFrequencyResponse(t, e, n) {
              return this._nativeIIRFilterNode.getFrequencyResponse(t, e, n);
            }
          };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t, e, n, s, i, o) => (r, a, c, u, h, l) => {
        if (null !== c)
          try {
            const n = e(r, (t) => new c(t, u, l)),
              i = new Map();
            let a = null;
            if (
              (Object.defineProperties(n, {
                channelCount: {
                  get: () => l.channelCount,
                  set: () => {
                    throw t();
                  },
                },
                channelCountMode: {
                  get: () => "explicit",
                  set: () => {
                    throw t();
                  },
                },
                onprocessorerror: {
                  get: () => a,
                  set: (t) => {
                    "function" == typeof a &&
                      n.removeEventListener("processorerror", a),
                      (a = "function" == typeof t ? t : null),
                      "function" == typeof a &&
                        n.addEventListener("processorerror", a);
                  },
                },
              }),
              (n.addEventListener =
                ((p = n.addEventListener),
                (...t) => {
                  if ("processorerror" === t[0]) {
                    const e =
                      "function" == typeof t[1]
                        ? t[1]
                        : "object" == typeof t[1] &&
                          null !== t[1] &&
                          "function" == typeof t[1].handleEvent
                        ? t[1].handleEvent
                        : null;
                    if (null !== e) {
                      const n = i.get(t[1]);
                      void 0 !== n
                        ? (t[1] = n)
                        : ((t[1] = (n) => {
                            e(
                              new ErrorEvent(t[0], {
                                ...n,
                                error: new Error(),
                              })
                            );
                          }),
                          i.set(e, t[1]));
                    }
                  }
                  return p.call(n, t[0], t[1], t[2]);
                })),
              (n.removeEventListener =
                ((d = n.removeEventListener),
                (...t) => {
                  if ("processorerror" === t[0]) {
                    const e = i.get(t[1]);
                    void 0 !== e && (i.delete(t[1]), (t[1] = e));
                  }
                  return d.call(n, t[0], t[1], t[2]);
                })),
              0 !== l.numberOfOutputs)
            ) {
              const t = s(r, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                gain: 0,
              });
              return (
                n.connect(t).connect(t.context.destination),
                o(
                  n,
                  () => t.disconnect(),
                  () => t.connect(t.context.destination)
                )
              );
            }
            return n;
          } catch (t) {
            if (11 === t.code) throw i();
            throw t;
          }
        var d, p;
        if (void 0 === h) throw i();
        return (
          ((t) => {
            const { port1: e } = new MessageChannel();
            try {
              e.postMessage(t);
            } finally {
              e.close();
            }
          })(l),
          n(r, a, h, l)
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n(1),
        i = n(7);
      const o = (t) => (e, n) => {
        const o = t(e, (t) => t.createChannelSplitter(n.numberOfOutputs));
        return (
          Object(s.a)(o, n),
          ((t) => {
            const e = t.numberOfOutputs;
            Object.defineProperty(t, "channelCount", {
              get: () => e,
              set: (t) => {
                if (t !== e) throw Object(i.a)();
              },
            }),
              Object.defineProperty(t, "channelCountMode", {
                get: () => "explicit",
                set: (t) => {
                  if ("explicit" !== t) throw Object(i.a)();
                },
              }),
              Object.defineProperty(t, "channelInterpretation", {
                get: () => "discrete",
                set: (t) => {
                  if ("discrete" !== t) throw Object(i.a)();
                },
              });
          })(o),
          o
        );
      };
    },
    function (t, e, n) {
      var s = n(677),
        i = n(678),
        o = n(679),
        r = n(681);
      t.exports = function (t, e) {
        return s(t) || i(t, e) || o(t, e) || r();
      };
    },
    function (t, e) {
      t.exports = function (t) {
        if (Array.isArray(t)) return t;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var n = [],
            s = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var r, a = t[Symbol.iterator]();
              !(s = (r = a.next()).done) &&
              (n.push(r.value), !e || n.length !== e);
              s = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              s || null == a.return || a.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        }
      };
    },
    function (t, e, n) {
      var s = n(680);
      t.exports = function (t, e) {
        if (t) {
          if ("string" == typeof t) return s(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(t, e)
              : void 0
          );
        }
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, s = new Array(e); n < e; n++) s[n] = t[n];
        return s;
      };
    },
    function (t, e) {
      t.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    function (t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s);
        }
      }
      t.exports = function (t, e, s) {
        return e && n(t.prototype, e), s && n(t, s), t;
      };
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "getContext", function () {
          return it;
        }),
        n.d(e, "setContext", function () {
          return ot;
        }),
        n.d(e, "Clock", function () {
          return Nt;
        }),
        n.d(e, "Context", function () {
          return H;
        }),
        n.d(e, "BaseContext", function () {
          return X;
        }),
        n.d(e, "Delay", function () {
          return Qt;
        }),
        n.d(e, "Gain", function () {
          return Mt;
        }),
        n.d(e, "Offline", function () {
          return Ht;
        }),
        n.d(e, "OfflineContext", function () {
          return et;
        }),
        n.d(e, "Param", function () {
          return St;
        }),
        n.d(e, "ToneAudioBuffer", function () {
          return tt;
        }),
        n.d(e, "ToneAudioBuffers", function () {
          return $t;
        }),
        n.d(e, "ToneAudioNode", function () {
          return Ct;
        }),
        n.d(e, "connectSeries", function () {
          return kt;
        }),
        n.d(e, "connect", function () {
          return At;
        }),
        n.d(e, "disconnect", function () {
          return Dt;
        }),
        n.d(e, "FrequencyClass", function () {
          return gt;
        }),
        n.d(e, "Frequency", function () {
          return bt;
        }),
        n.d(e, "MidiClass", function () {
          return Jt;
        }),
        n.d(e, "Midi", function () {
          return Kt;
        }),
        n.d(e, "TimeClass", function () {
          return _t;
        }),
        n.d(e, "Time", function () {
          return mt;
        }),
        n.d(e, "TicksClass", function () {
          return Lt;
        }),
        n.d(e, "Ticks", function () {
          return zt;
        }),
        n.d(e, "TransportTimeClass", function () {
          return xt;
        }),
        n.d(e, "TransportTime", function () {
          return wt;
        }),
        n.d(e, "Emitter", function () {
          return Z;
        }),
        n.d(e, "IntervalTimeline", function () {
          return Bt;
        }),
        n.d(e, "StateTimeline", function () {
          return Ot;
        }),
        n.d(e, "Timeline", function () {
          return W;
        }),
        n.d(e, "isUndef", function () {
          return p;
        }),
        n.d(e, "isDefined", function () {
          return f;
        }),
        n.d(e, "isFunction", function () {
          return _;
        }),
        n.d(e, "isNumber", function () {
          return m;
        }),
        n.d(e, "isObject", function () {
          return g;
        }),
        n.d(e, "isBoolean", function () {
          return v;
        }),
        n.d(e, "isArray", function () {
          return y;
        }),
        n.d(e, "isString", function () {
          return b;
        }),
        n.d(e, "isNote", function () {
          return x;
        }),
        n.d(e, "dbToGain", function () {
          return at;
        }),
        n.d(e, "gainToDb", function () {
          return ct;
        }),
        n.d(e, "intervalToFrequencyRatio", function () {
          return ut;
        }),
        n.d(e, "ftom", function () {
          return lt;
        }),
        n.d(e, "mtof", function () {
          return pt;
        }),
        n.d(e, "optionsFromArguments", function () {
          return q;
        }),
        n.d(e, "defaultArg", function () {
          return I;
        }),
        n.d(e, "Unit", function () {
          return ee;
        }),
        n.d(e, "debug", function () {
          return s;
        }),
        n.d(e, "Noise", function () {
          return ie;
        }),
        n.d(e, "UserMedia", function () {
          return ae;
        }),
        n.d(e, "Oscillator", function () {
          return he;
        }),
        n.d(e, "AMOscillator", function () {
          return _e;
        }),
        n.d(e, "FMOscillator", function () {
          return me;
        }),
        n.d(e, "PulseOscillator", function () {
          return ge;
        }),
        n.d(e, "FatOscillator", function () {
          return ve;
        }),
        n.d(e, "PWMOscillator", function () {
          return ye;
        }),
        n.d(e, "OmniOscillator", function () {
          return xe;
        }),
        n.d(e, "ToneOscillatorNode", function () {
          return ue;
        }),
        n.d(e, "LFO", function () {
          return Se;
        }),
        n.d(e, "ToneBufferSource", function () {
          return se;
        }),
        n.d(e, "Player", function () {
          return Ae;
        }),
        n.d(e, "Players", function () {
          return De;
        }),
        n.d(e, "GrainPlayer", function () {
          return Me;
        }),
        n.d(e, "Add", function () {
          return we;
        }),
        n.d(e, "Abs", function () {
          return je;
        }),
        n.d(e, "AudioToGain", function () {
          return pe;
        }),
        n.d(e, "GainToAudio", function () {
          return Ee;
        }),
        n.d(e, "GreaterThan", function () {
          return Fe;
        }),
        n.d(e, "GreaterThanZero", function () {
          return Ie;
        }),
        n.d(e, "Multiply", function () {
          return fe;
        }),
        n.d(e, "Negate", function () {
          return Re;
        }),
        n.d(e, "Pow", function () {
          return Ve;
        }),
        n.d(e, "Signal", function () {
          return Rt;
        }),
        n.d(e, "connectSignal", function () {
          return qt;
        }),
        n.d(e, "Scale", function () {
          return Te;
        }),
        n.d(e, "ScaleExp", function () {
          return Ne;
        }),
        n.d(e, "Subtract", function () {
          return qe;
        }),
        n.d(e, "SyncedSignal", function () {
          return Pe;
        }),
        n.d(e, "WaveShaper", function () {
          return de;
        }),
        n.d(e, "Zero", function () {
          return Oe;
        }),
        n.d(e, "AMSynth", function () {
          return Qe;
        }),
        n.d(e, "DuoSynth", function () {
          return Je;
        }),
        n.d(e, "FMSynth", function () {
          return Ke;
        }),
        n.d(e, "MetalSynth", function () {
          return en;
        }),
        n.d(e, "MembraneSynth", function () {
          return nn;
        }),
        n.d(e, "MonoSynth", function () {
          return $e;
        }),
        n.d(e, "NoiseSynth", function () {
          return sn;
        }),
        n.d(e, "PluckSynth", function () {
          return dn;
        }),
        n.d(e, "PolySynth", function () {
          return pn;
        }),
        n.d(e, "Sampler", function () {
          return fn;
        }),
        n.d(e, "Synth", function () {
          return Ge;
        }),
        n.d(e, "Loop", function () {
          return mn;
        }),
        n.d(e, "Part", function () {
          return gn;
        }),
        n.d(e, "Pattern", function () {
          return kn;
        }),
        n.d(e, "Sequence", function () {
          return An;
        }),
        n.d(e, "ToneEvent", function () {
          return _n;
        }),
        n.d(e, "AutoFilter", function () {
          return En;
        }),
        n.d(e, "AutoPanner", function () {
          return qn;
        }),
        n.d(e, "AutoWah", function () {
          return Fn;
        }),
        n.d(e, "BitCrusher", function () {
          return Vn;
        }),
        n.d(e, "Chebyshev", function () {
          return Pn;
        }),
        n.d(e, "Chorus", function () {
          return Un;
        }),
        n.d(e, "Distortion", function () {
          return Gn;
        }),
        n.d(e, "FeedbackDelay", function () {
          return Qn;
        }),
        n.d(e, "FrequencyShifter", function () {
          return Xn;
        }),
        n.d(e, "Freeverb", function () {
          return Jn;
        }),
        n.d(e, "JCReverb", function () {
          return ns;
        }),
        n.d(e, "PingPongDelay", function () {
          return is;
        }),
        n.d(e, "PitchShift", function () {
          return os;
        }),
        n.d(e, "Phaser", function () {
          return rs;
        }),
        n.d(e, "Reverb", function () {
          return as;
        }),
        n.d(e, "StereoWidener", function () {
          return ls;
        }),
        n.d(e, "Tremolo", function () {
          return ds;
        }),
        n.d(e, "Vibrato", function () {
          return ps;
        }),
        n.d(e, "Analyser", function () {
          return fs;
        }),
        n.d(e, "Meter", function () {
          return ms;
        }),
        n.d(e, "FFT", function () {
          return gs;
        }),
        n.d(e, "DCMeter", function () {
          return vs;
        }),
        n.d(e, "Waveform", function () {
          return ys;
        }),
        n.d(e, "Follower", function () {
          return In;
        }),
        n.d(e, "Channel", function () {
          return ws;
        }),
        n.d(e, "CrossFade", function () {
          return Dn;
        }),
        n.d(e, "Merge", function () {
          return zn;
        }),
        n.d(e, "MidSideMerge", function () {
          return us;
        }),
        n.d(e, "MidSideSplit", function () {
          return cs;
        }),
        n.d(e, "MultibandSplit", function () {
          return Ts;
        }),
        n.d(e, "Panner", function () {
          return Rn;
        }),
        n.d(e, "Panner3D", function () {
          return Ss;
        }),
        n.d(e, "PanVol", function () {
          return xs;
        }),
        n.d(e, "Recorder", function () {
          return Cs;
        }),
        n.d(e, "Solo", function () {
          return bs;
        }),
        n.d(e, "Split", function () {
          return Ln;
        }),
        n.d(e, "Volume", function () {
          return Zt;
        }),
        n.d(e, "Compressor", function () {
          return ks;
        }),
        n.d(e, "Gate", function () {
          return As;
        }),
        n.d(e, "Limiter", function () {
          return Ds;
        }),
        n.d(e, "MidSideCompressor", function () {
          return Ms;
        }),
        n.d(e, "MultibandCompressor", function () {
          return js;
        }),
        n.d(e, "AmplitudeEnvelope", function () {
          return Ue;
        }),
        n.d(e, "Envelope", function () {
          return Le;
        }),
        n.d(e, "FrequencyEnvelope", function () {
          return He;
        }),
        n.d(e, "EQ3", function () {
          return Es;
        }),
        n.d(e, "Filter", function () {
          return Xe;
        }),
        n.d(e, "OnePoleFilter", function () {
          return hn;
        }),
        n.d(e, "FeedbackCombFilter", function () {
          return un;
        }),
        n.d(e, "LowpassCombFilter", function () {
          return ln;
        }),
        n.d(e, "Convolver", function () {
          return Rs;
        }),
        n.d(e, "BiquadFilter", function () {
          return Ze;
        }),
        n.d(e, "version", function () {
          return i;
        }),
        n.d(e, "start", function () {
          return rt;
        }),
        n.d(e, "supported", function () {
          return o.isSupported;
        }),
        n.d(e, "now", function () {
          return qs;
        }),
        n.d(e, "immediate", function () {
          return Is;
        }),
        n.d(e, "Transport", function () {
          return Fs;
        }),
        n.d(e, "getTransport", function () {
          return Vs;
        }),
        n.d(e, "Destination", function () {
          return Ns;
        }),
        n.d(e, "Master", function () {
          return Ps;
        }),
        n.d(e, "getDestination", function () {
          return Ls;
        }),
        n.d(e, "Listener", function () {
          return zs;
        }),
        n.d(e, "getListener", function () {
          return Bs;
        }),
        n.d(e, "Draw", function () {
          return Ws;
        }),
        n.d(e, "getDraw", function () {
          return Us;
        }),
        n.d(e, "context", function () {
          return Gs;
        }),
        n.d(e, "loaded", function () {
          return Ys;
        }),
        n.d(e, "Buffer", function () {
          return Qs;
        }),
        n.d(e, "Buffers", function () {
          return Zs;
        }),
        n.d(e, "BufferSource", function () {
          return Xs;
        });
      var s = {};
      n.r(s),
        n.d(s, "assert", function () {
          return r;
        }),
        n.d(s, "assertRange", function () {
          return a;
        }),
        n.d(s, "assertContextRunning", function () {
          return c;
        }),
        n.d(s, "setLogger", function () {
          return h;
        }),
        n.d(s, "log", function () {
          return l;
        }),
        n.d(s, "warn", function () {
          return d;
        });
      const i = "14.7.40";
      var o = n(13);
      function r(t, e) {
        if (!t) throw new Error(e);
      }
      function a(t, e, n = 1 / 0) {
        if (!(e <= t && t <= n))
          throw new RangeError(`Value must be within [${e}, ${n}], got: ${t}`);
      }
      function c(t) {
        t.isOffline ||
          "running" === t.state ||
          d(
            'The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.'
          );
      }
      let u = console;
      function h(t) {
        u = t;
      }
      function l(...t) {
        u.log(...t);
      }
      function d(...t) {
        u.warn(...t);
      }
      function p(t) {
        return void 0 === t;
      }
      function f(t) {
        return !p(t);
      }
      function _(t) {
        return "function" == typeof t;
      }
      function m(t) {
        return "number" == typeof t;
      }
      function g(t) {
        return (
          "[object Object]" === Object.prototype.toString.call(t) &&
          t.constructor === Object
        );
      }
      function v(t) {
        return "boolean" == typeof t;
      }
      function y(t) {
        return Array.isArray(t);
      }
      function b(t) {
        return "string" == typeof t;
      }
      function x(t) {
        return b(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t);
      }
      const w = "object" == typeof self ? self : null,
        T =
          w &&
          (w.hasOwnProperty("AudioContext") ||
            w.hasOwnProperty("webkitAudioContext"));
      function O(t, e, n, s) {
        var i,
          o = arguments.length,
          r =
            o < 3
              ? e
              : null === s
              ? (s = Object.getOwnPropertyDescriptor(e, n))
              : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          r = Reflect.decorate(t, e, n, s);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (i = t[a]) &&
              (r = (o < 3 ? i(r) : o > 3 ? i(e, n, r) : i(e, n)) || r);
        return o > 3 && r && Object.defineProperty(e, n, r), r;
      }
      function S(t, e, n, s) {
        return new (n || (n = Promise))(function (i, o) {
          function r(t) {
            try {
              c(s.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              c(s.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            t.done
              ? i(t.value)
              : new n(function (e) {
                  e(t.value);
                }).then(r, a);
          }
          c((s = s.apply(t, e || [])).next());
        });
      }
      class C {
        constructor(t, e, n) {
          (this._callback = t),
            (this._type = e),
            (this._updateInterval = n),
            this._createClock();
        }
        _createWorker() {
          const t = new Blob(
              [
                `\n\t\t\t// the initial timeout time\n\t\t\tlet timeoutTime =  ${(
                  1e3 * this._updateInterval
                ).toFixed(
                  1
                )};\n\t\t\t// onmessage callback\n\t\t\tself.onmessage = function(msg){\n\t\t\t\ttimeoutTime = parseInt(msg.data);\n\t\t\t};\n\t\t\t// the tick function which posts a message\n\t\t\t// and schedules a new tick\n\t\t\tfunction tick(){\n\t\t\t\tsetTimeout(tick, timeoutTime);\n\t\t\t\tself.postMessage('tick');\n\t\t\t}\n\t\t\t// call tick initially\n\t\t\ttick();\n\t\t\t`,
              ],
              {
                type: "text/javascript",
              }
            ),
            e = URL.createObjectURL(t),
            n = new Worker(e);
          (n.onmessage = this._callback.bind(this)), (this._worker = n);
        }
        _createTimeout() {
          this._timeout = setTimeout(() => {
            this._createTimeout(), this._callback();
          }, 1e3 * this._updateInterval);
        }
        _createClock() {
          if ("worker" === this._type)
            try {
              this._createWorker();
            } catch (t) {
              (this._type = "timeout"), this._createClock();
            }
          else "timeout" === this._type && this._createTimeout();
        }
        _disposeClock() {
          this._timeout && (clearTimeout(this._timeout), (this._timeout = 0)),
            this._worker &&
              (this._worker.terminate(), (this._worker.onmessage = null));
        }
        get updateInterval() {
          return this._updateInterval;
        }
        set updateInterval(t) {
          (this._updateInterval = Math.max(t, 128 / 44100)),
            "worker" === this._type &&
              this._worker.postMessage(Math.max(1e3 * t, 1));
        }
        get type() {
          return this._type;
        }
        set type(t) {
          this._disposeClock(), (this._type = t), this._createClock();
        }
        dispose() {
          this._disposeClock();
        }
      }
      function k(t) {
        return Object(o.isAnyAudioParam)(t);
      }
      function A(t) {
        return Object(o.isAnyAudioNode)(t);
      }
      function D(t) {
        return Object(o.isAnyOfflineAudioContext)(t);
      }
      function M(t) {
        return Object(o.isAnyAudioContext)(t);
      }
      function j(t) {
        return t instanceof AudioBuffer;
      }
      function E(t, e) {
        return "value" === t || k(e) || A(e) || j(e);
      }
      function R(t, ...e) {
        if (!e.length) return t;
        const n = e.shift();
        if (g(t) && g(n))
          for (const e in n)
            E(e, n[e])
              ? (t[e] = n[e])
              : g(n[e])
              ? (t[e] ||
                  Object.assign(t, {
                    [e]: {},
                  }),
                R(t[e], n[e]))
              : Object.assign(t, {
                  [e]: n[e],
                });
        return R(t, ...e);
      }
      function q(t, e, n = [], s) {
        const i = {},
          o = Array.from(e);
        if (g(o[0]) && s && !Reflect.has(o[0], s)) {
          Object.keys(o[0]).some((e) => Reflect.has(t, e)) ||
            (R(i, {
              [s]: o[0],
            }),
            n.splice(n.indexOf(s), 1),
            o.shift());
        }
        if (1 === o.length && g(o[0])) R(i, o[0]);
        else for (let t = 0; t < n.length; t++) f(o[t]) && (i[n[t]] = o[t]);
        return R(t, i);
      }
      function I(t, e) {
        return p(t) ? e : t;
      }
      function F(t, e) {
        return (
          e.forEach((e) => {
            Reflect.has(t, e) && delete t[e];
          }),
          t
        );
      }
      /**
       * Tone.js
       * @author Yotam Mann
       * @license http://opensource.org/licenses/MIT MIT License
       * @copyright 2014-2019 Yotam Mann
       */
      class V {
        constructor() {
          (this.debug = !1), (this._wasDisposed = !1);
        }
        static getDefaults() {
          return {};
        }
        log(...t) {
          (this.debug || (w && this.toString() === w.TONE_DEBUG_CLASS)) &&
            l(this, ...t);
        }
        dispose() {
          return (this._wasDisposed = !0), this;
        }
        get disposed() {
          return this._wasDisposed;
        }
        toString() {
          return this.name;
        }
      }
      V.version = i;
      function N(t, e) {
        return t > e + 1e-6;
      }
      function P(t, e) {
        return N(t, e) || z(t, e);
      }
      function L(t, e) {
        return t + 1e-6 < e;
      }
      function z(t, e) {
        return Math.abs(t - e) < 1e-6;
      }
      function B(t, e, n) {
        return Math.max(Math.min(t, n), e);
      }
      class W extends V {
        constructor() {
          super(), (this.name = "Timeline"), (this._timeline = []);
          const t = q(W.getDefaults(), arguments, ["memory"]);
          (this.memory = t.memory), (this.increasing = t.increasing);
        }
        static getDefaults() {
          return {
            memory: 1 / 0,
            increasing: !1,
          };
        }
        get length() {
          return this._timeline.length;
        }
        add(t) {
          if (
            (r(
              Reflect.has(t, "time"),
              "Timeline: events must have a time attribute"
            ),
            (t.time = t.time.valueOf()),
            this.increasing && this.length)
          ) {
            const e = this._timeline[this.length - 1];
            r(
              P(t.time, e.time),
              "The time must be greater than or equal to the last scheduled time"
            ),
              this._timeline.push(t);
          } else {
            const e = this._search(t.time);
            this._timeline.splice(e + 1, 0, t);
          }
          if (this.length > this.memory) {
            const t = this.length - this.memory;
            this._timeline.splice(0, t);
          }
          return this;
        }
        remove(t) {
          const e = this._timeline.indexOf(t);
          return -1 !== e && this._timeline.splice(e, 1), this;
        }
        get(t, e = "time") {
          const n = this._search(t, e);
          return -1 !== n ? this._timeline[n] : null;
        }
        peek() {
          return this._timeline[0];
        }
        shift() {
          return this._timeline.shift();
        }
        getAfter(t, e = "time") {
          const n = this._search(t, e);
          return n + 1 < this._timeline.length ? this._timeline[n + 1] : null;
        }
        getBefore(t) {
          const e = this._timeline.length;
          if (e > 0 && this._timeline[e - 1].time < t)
            return this._timeline[e - 1];
          const n = this._search(t);
          return n - 1 >= 0 ? this._timeline[n - 1] : null;
        }
        cancel(t) {
          if (this._timeline.length > 1) {
            let e = this._search(t);
            if (e >= 0)
              if (z(this._timeline[e].time, t)) {
                for (let n = e; n >= 0 && z(this._timeline[n].time, t); n--)
                  e = n;
                this._timeline = this._timeline.slice(0, e);
              } else this._timeline = this._timeline.slice(0, e + 1);
            else this._timeline = [];
          } else
            1 === this._timeline.length &&
              P(this._timeline[0].time, t) &&
              (this._timeline = []);
          return this;
        }
        cancelBefore(t) {
          const e = this._search(t);
          return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this;
        }
        previousEvent(t) {
          const e = this._timeline.indexOf(t);
          return e > 0 ? this._timeline[e - 1] : null;
        }
        _search(t, e = "time") {
          if (0 === this._timeline.length) return -1;
          let n = 0;
          const s = this._timeline.length;
          let i = s;
          if (s > 0 && this._timeline[s - 1][e] <= t) return s - 1;
          for (; n < i; ) {
            let s = Math.floor(n + (i - n) / 2);
            const o = this._timeline[s],
              r = this._timeline[s + 1];
            if (z(o[e], t)) {
              for (let n = s; n < this._timeline.length; n++) {
                if (!z(this._timeline[n][e], t)) break;
                s = n;
              }
              return s;
            }
            if (L(o[e], t) && N(r[e], t)) return s;
            N(o[e], t) ? (i = s) : (n = s + 1);
          }
          return -1;
        }
        _iterate(t, e = 0, n = this._timeline.length - 1) {
          this._timeline.slice(e, n + 1).forEach(t);
        }
        forEach(t) {
          return this._iterate(t), this;
        }
        forEachBefore(t, e) {
          const n = this._search(t);
          return -1 !== n && this._iterate(e, 0, n), this;
        }
        forEachAfter(t, e) {
          const n = this._search(t);
          return this._iterate(e, n + 1), this;
        }
        forEachBetween(t, e, n) {
          let s = this._search(t),
            i = this._search(e);
          return (
            -1 !== s && -1 !== i
              ? (this._timeline[s].time !== t && (s += 1),
                this._timeline[i].time === e && (i -= 1),
                this._iterate(n, s, i))
              : -1 === s && this._iterate(n, 0, i),
            this
          );
        }
        forEachFrom(t, e) {
          let n = this._search(t);
          for (; n >= 0 && this._timeline[n].time >= t; ) n--;
          return this._iterate(e, n + 1), this;
        }
        forEachAtTime(t, e) {
          const n = this._search(t);
          if (-1 !== n && z(this._timeline[n].time, t)) {
            let s = n;
            for (let e = n; e >= 0 && z(this._timeline[e].time, t); e--) s = e;
            this._iterate(
              (t) => {
                e(t);
              },
              s,
              n
            );
          }
          return this;
        }
        dispose() {
          return super.dispose(), (this._timeline = []), this;
        }
      }
      const U = [];
      function G(t) {
        U.push(t);
      }
      const Y = [];
      function Q(t) {
        Y.push(t);
      }
      class Z extends V {
        constructor() {
          super(...arguments), (this.name = "Emitter");
        }
        on(t, e) {
          return (
            t.split(/\W+/).forEach((t) => {
              p(this._events) && (this._events = {}),
                this._events.hasOwnProperty(t) || (this._events[t] = []),
                this._events[t].push(e);
            }),
            this
          );
        }
        once(t, e) {
          const n = (...s) => {
            e(...s), this.off(t, n);
          };
          return this.on(t, n), this;
        }
        off(t, e) {
          return (
            t.split(/\W+/).forEach((n) => {
              if (
                (p(this._events) && (this._events = {}),
                this._events.hasOwnProperty(t))
              )
                if (p(e)) this._events[t] = [];
                else {
                  const n = this._events[t];
                  for (let t = 0; t < n.length; t++)
                    n[t] === e && n.splice(t, 1);
                }
            }),
            this
          );
        }
        emit(t, ...e) {
          if (this._events && this._events.hasOwnProperty(t)) {
            const n = this._events[t].slice(0);
            for (let t = 0, s = n.length; t < s; t++) n[t].apply(this, e);
          }
          return this;
        }
        static mixin(t) {
          ["on", "once", "off", "emit"].forEach((e) => {
            const n = Object.getOwnPropertyDescriptor(Z.prototype, e);
            Object.defineProperty(t.prototype, e, n);
          });
        }
        dispose() {
          return super.dispose(), (this._events = void 0), this;
        }
      }
      class X extends Z {
        constructor() {
          super(...arguments), (this.isOffline = !1);
        }
      }
      class H extends X {
        constructor() {
          super(),
            (this.name = "Context"),
            (this._constants = new Map()),
            (this._timeouts = new W()),
            (this._timeoutIds = 0),
            (this._initialized = !1),
            (this.isOffline = !1),
            (this._workletModules = new Map());
          const t = q(H.getDefaults(), arguments, ["context"]);
          t.context
            ? (this._context = t.context)
            : (this._context = (function (t) {
                return new o.AudioContext(t);
              })({
                latencyHint: t.latencyHint,
              })),
            (this._ticker = new C(
              this.emit.bind(this, "tick"),
              t.clockSource,
              t.updateInterval
            )),
            this.on("tick", this._timeoutLoop.bind(this)),
            (this._context.onstatechange = () => {
              this.emit("statechange", this.state);
            }),
            this._setLatencyHint(t.latencyHint),
            (this.lookAhead = t.lookAhead);
        }
        static getDefaults() {
          return {
            clockSource: "worker",
            latencyHint: "interactive",
            lookAhead: 0.1,
            updateInterval: 0.05,
          };
        }
        initialize() {
          var t;
          return (
            this._initialized ||
              ((t = this), U.forEach((e) => e(t)), (this._initialized = !0)),
            this
          );
        }
        createAnalyser() {
          return this._context.createAnalyser();
        }
        createOscillator() {
          return this._context.createOscillator();
        }
        createBufferSource() {
          return this._context.createBufferSource();
        }
        createBiquadFilter() {
          return this._context.createBiquadFilter();
        }
        createBuffer(t, e, n) {
          return this._context.createBuffer(t, e, n);
        }
        createChannelMerger(t) {
          return this._context.createChannelMerger(t);
        }
        createChannelSplitter(t) {
          return this._context.createChannelSplitter(t);
        }
        createConstantSource() {
          return this._context.createConstantSource();
        }
        createConvolver() {
          return this._context.createConvolver();
        }
        createDelay(t) {
          return this._context.createDelay(t);
        }
        createDynamicsCompressor() {
          return this._context.createDynamicsCompressor();
        }
        createGain() {
          return this._context.createGain();
        }
        createIIRFilter(t, e) {
          return this._context.createIIRFilter(t, e);
        }
        createPanner() {
          return this._context.createPanner();
        }
        createPeriodicWave(t, e, n) {
          return this._context.createPeriodicWave(t, e, n);
        }
        createStereoPanner() {
          return this._context.createStereoPanner();
        }
        createWaveShaper() {
          return this._context.createWaveShaper();
        }
        createMediaStreamSource(t) {
          return (
            r(M(this._context), "Not available if OfflineAudioContext"),
            this._context.createMediaStreamSource(t)
          );
        }
        createMediaStreamDestination() {
          return (
            r(M(this._context), "Not available if OfflineAudioContext"),
            this._context.createMediaStreamDestination()
          );
        }
        decodeAudioData(t) {
          return this._context.decodeAudioData(t);
        }
        get currentTime() {
          return this._context.currentTime;
        }
        get state() {
          return this._context.state;
        }
        get sampleRate() {
          return this._context.sampleRate;
        }
        get listener() {
          return this.initialize(), this._listener;
        }
        set listener(t) {
          r(
            !this._initialized,
            "The listener cannot be set after initialization."
          ),
            (this._listener = t);
        }
        get transport() {
          return this.initialize(), this._transport;
        }
        set transport(t) {
          r(
            !this._initialized,
            "The transport cannot be set after initialization."
          ),
            (this._transport = t);
        }
        get draw() {
          return this.initialize(), this._draw;
        }
        set draw(t) {
          r(!this._initialized, "Draw cannot be set after initialization."),
            (this._draw = t);
        }
        get destination() {
          return this.initialize(), this._destination;
        }
        set destination(t) {
          r(
            !this._initialized,
            "The destination cannot be set after initialization."
          ),
            (this._destination = t);
        }
        createAudioWorkletNode(t, e) {
          return (function (t, e, n) {
            return (
              r(
                f(o.AudioWorkletNode),
                "This node only works in a secure context (https or localhost)"
              ),
              new o.AudioWorkletNode(t, e, n)
            );
          })(
            /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
            this.rawContext,
            t,
            e
          );
        }
        addAudioWorkletModule(t, e) {
          return S(this, void 0, void 0, function* () {
            r(
              f(this.rawContext.audioWorklet),
              "AudioWorkletNode is only available in a secure context (https or localhost)"
            ),
              this._workletModules.has(e) ||
                this._workletModules.set(
                  e,
                  this.rawContext.audioWorklet.addModule(t)
                ),
              yield this._workletModules.get(e);
          });
        }
        workletsAreReady() {
          return S(this, void 0, void 0, function* () {
            const t = [];
            this._workletModules.forEach((e) => t.push(e)),
              yield Promise.all(t);
          });
        }
        get updateInterval() {
          return this._ticker.updateInterval;
        }
        set updateInterval(t) {
          this._ticker.updateInterval = t;
        }
        get clockSource() {
          return this._ticker.type;
        }
        set clockSource(t) {
          this._ticker.type = t;
        }
        get latencyHint() {
          return this._latencyHint;
        }
        _setLatencyHint(t) {
          let e = 0;
          if (((this._latencyHint = t), b(t)))
            switch (t) {
              case "interactive":
                e = 0.1;
                break;
              case "playback":
                e = 0.5;
                break;
              case "balanced":
                e = 0.25;
            }
          (this.lookAhead = e), (this.updateInterval = e / 2);
        }
        get rawContext() {
          return this._context;
        }
        now() {
          return this._context.currentTime + this.lookAhead;
        }
        immediate() {
          return this._context.currentTime;
        }
        resume() {
          return "suspended" === this._context.state && M(this._context)
            ? this._context.resume()
            : Promise.resolve();
        }
        close() {
          return S(this, void 0, void 0, function* () {
            var t;
            M(this._context) && (yield this._context.close()),
              this._initialized && ((t = this), Y.forEach((e) => e(t)));
          });
        }
        getConstant(t) {
          if (this._constants.has(t)) return this._constants.get(t);
          {
            const e = this._context.createBuffer(
                1,
                128,
                this._context.sampleRate
              ),
              n = e.getChannelData(0);
            for (let e = 0; e < n.length; e++) n[e] = t;
            const s = this._context.createBufferSource();
            return (
              (s.channelCount = 1),
              (s.channelCountMode = "explicit"),
              (s.buffer = e),
              (s.loop = !0),
              s.start(0),
              this._constants.set(t, s),
              s
            );
          }
        }
        dispose() {
          return (
            super.dispose(),
            this._ticker.dispose(),
            this._timeouts.dispose(),
            Object.keys(this._constants).map((t) =>
              this._constants[t].disconnect()
            ),
            this
          );
        }
        _timeoutLoop() {
          const t = this.now();
          let e = this._timeouts.peek();
          for (; this._timeouts.length && e && e.time <= t; )
            e.callback(), this._timeouts.shift(), (e = this._timeouts.peek());
        }
        setTimeout(t, e) {
          this._timeoutIds++;
          const n = this.now();
          return (
            this._timeouts.add({
              callback: t,
              id: this._timeoutIds,
              time: n + e,
            }),
            this._timeoutIds
          );
        }
        clearTimeout(t) {
          return (
            this._timeouts.forEach((e) => {
              e.id === t && this._timeouts.remove(e);
            }),
            this
          );
        }
        clearInterval(t) {
          return this.clearTimeout(t);
        }
        setInterval(t, e) {
          const n = ++this._timeoutIds,
            s = () => {
              const i = this.now();
              this._timeouts.add({
                callback: () => {
                  t(), s();
                },
                id: n,
                time: i + e,
              });
            };
          return s(), n;
        }
      }
      function $(t, e) {
        y(e)
          ? e.forEach((e) => $(t, e))
          : Object.defineProperty(t, e, {
              enumerable: !0,
              writable: !1,
            });
      }
      function J(t, e) {
        y(e)
          ? e.forEach((e) => J(t, e))
          : Object.defineProperty(t, e, {
              writable: !0,
            });
      }
      const K = () => {};
      class tt extends V {
        constructor() {
          super(), (this.name = "ToneAudioBuffer"), (this.onload = K);
          const t = q(tt.getDefaults(), arguments, [
            "url",
            "onload",
            "onerror",
          ]);
          (this.reverse = t.reverse),
            (this.onload = t.onload),
            (t.url && j(t.url)) || t.url instanceof tt
              ? this.set(t.url)
              : b(t.url) && this.load(t.url).catch(t.onerror);
        }
        static getDefaults() {
          return {
            onerror: K,
            onload: K,
            reverse: !1,
          };
        }
        get sampleRate() {
          return this._buffer ? this._buffer.sampleRate : it().sampleRate;
        }
        set(t) {
          return (
            t instanceof tt
              ? t.loaded
                ? (this._buffer = t.get())
                : (t.onload = () => {
                    this.set(t), this.onload(this);
                  })
              : (this._buffer = t),
            this._reversed && this._reverse(),
            this
          );
        }
        get() {
          return this._buffer;
        }
        load(t) {
          return S(this, void 0, void 0, function* () {
            const e = tt.load(t).then((t) => {
              this.set(t), this.onload(this);
            });
            tt.downloads.push(e);
            try {
              yield e;
            } finally {
              const t = tt.downloads.indexOf(e);
              tt.downloads.splice(t, 1);
            }
            return this;
          });
        }
        dispose() {
          return super.dispose(), (this._buffer = void 0), this;
        }
        fromArray(t) {
          const e = y(t) && t[0].length > 0,
            n = e ? t.length : 1,
            s = e ? t[0].length : t.length,
            i = it(),
            o = i.createBuffer(n, s, i.sampleRate),
            r = e || 1 !== n ? t : [t];
          for (let t = 0; t < n; t++) o.copyToChannel(r[t], t);
          return (this._buffer = o), this;
        }
        toMono(t) {
          if (m(t)) this.fromArray(this.toArray(t));
          else {
            let t = new Float32Array(this.length);
            const e = this.numberOfChannels;
            for (let n = 0; n < e; n++) {
              const e = this.toArray(n);
              for (let n = 0; n < e.length; n++) t[n] += e[n];
            }
            (t = t.map((t) => t / e)), this.fromArray(t);
          }
          return this;
        }
        toArray(t) {
          if (m(t)) return this.getChannelData(t);
          if (1 === this.numberOfChannels) return this.toArray(0);
          {
            const t = [];
            for (let e = 0; e < this.numberOfChannels; e++)
              t[e] = this.getChannelData(e);
            return t;
          }
        }
        getChannelData(t) {
          return this._buffer
            ? this._buffer.getChannelData(t)
            : new Float32Array(0);
        }
        slice(t, e = this.duration) {
          const n = Math.floor(t * this.sampleRate),
            s = Math.floor(e * this.sampleRate);
          r(n < s, "The start time must be less than the end time");
          const i = s - n,
            o = it().createBuffer(this.numberOfChannels, i, this.sampleRate);
          for (let t = 0; t < this.numberOfChannels; t++)
            o.copyToChannel(this.getChannelData(t).subarray(n, s), t);
          return new tt(o);
        }
        _reverse() {
          if (this.loaded)
            for (let t = 0; t < this.numberOfChannels; t++)
              this.getChannelData(t).reverse();
          return this;
        }
        get loaded() {
          return this.length > 0;
        }
        get duration() {
          return this._buffer ? this._buffer.duration : 0;
        }
        get length() {
          return this._buffer ? this._buffer.length : 0;
        }
        get numberOfChannels() {
          return this._buffer ? this._buffer.numberOfChannels : 0;
        }
        get reverse() {
          return this._reversed;
        }
        set reverse(t) {
          this._reversed !== t && ((this._reversed = t), this._reverse());
        }
        static fromArray(t) {
          return new tt().fromArray(t);
        }
        static fromUrl(t) {
          return S(this, void 0, void 0, function* () {
            const e = new tt();
            return yield e.load(t);
          });
        }
        static load(t) {
          return S(this, void 0, void 0, function* () {
            const e = t.match(/\[(.+\|?)+\]$/);
            if (e) {
              const n = e[1].split("|");
              let s = n[0];
              for (const t of n)
                if (tt.supportsType(t)) {
                  s = t;
                  break;
                }
              t = t.replace(e[0], s);
            }
            const n =
                "" === tt.baseUrl || tt.baseUrl.endsWith("/")
                  ? tt.baseUrl
                  : tt.baseUrl + "/",
              s = yield fetch(n + t);
            if (!s.ok) throw new Error("could not load url: " + t);
            const i = yield s.arrayBuffer();
            return yield it().decodeAudioData(i);
          });
        }
        static supportsType(t) {
          const e = t.split("."),
            n = e[e.length - 1];
          return (
            "" !== document.createElement("audio").canPlayType("audio/" + n)
          );
        }
        static loaded() {
          return S(this, void 0, void 0, function* () {
            for (yield Promise.resolve(); tt.downloads.length; )
              yield tt.downloads[0];
          });
        }
      }
      (tt.baseUrl = ""), (tt.downloads = []);
      class et extends H {
        constructor() {
          var t, e, n;
          super({
            clockSource: "offline",
            context: D(arguments[0])
              ? arguments[0]
              : ((t = arguments[0]),
                (e = arguments[1] * arguments[2]),
                (n = arguments[2]),
                new o.OfflineAudioContext(t, e, n)),
            lookAhead: 0,
            updateInterval: D(arguments[0])
              ? 128 / arguments[0].sampleRate
              : 128 / arguments[2],
          }),
            (this.name = "OfflineContext"),
            (this._currentTime = 0),
            (this.isOffline = !0),
            (this._duration = D(arguments[0])
              ? arguments[0].length / arguments[0].sampleRate
              : arguments[1]);
        }
        now() {
          return this._currentTime;
        }
        get currentTime() {
          return this._currentTime;
        }
        _renderClock(t) {
          return S(this, void 0, void 0, function* () {
            let e = 0;
            for (; this._duration - this._currentTime >= 0; ) {
              this.emit("tick"),
                (this._currentTime += 128 / this.sampleRate),
                e++;
              const n = Math.floor(this.sampleRate / 128);
              t && e % n == 0 && (yield new Promise((t) => setTimeout(t, 1)));
            }
          });
        }
        render(t = !0) {
          return S(this, void 0, void 0, function* () {
            yield this.workletsAreReady(), yield this._renderClock(t);
            const e = yield this._context.startRendering();
            return new tt(e);
          });
        }
        close() {
          return Promise.resolve();
        }
      }
      const nt = new (class extends X {
        constructor() {
          super(...arguments),
            (this.lookAhead = 0),
            (this.latencyHint = 0),
            (this.isOffline = !1);
        }
        createAnalyser() {
          return {};
        }
        createOscillator() {
          return {};
        }
        createBufferSource() {
          return {};
        }
        createBiquadFilter() {
          return {};
        }
        createBuffer(t, e, n) {
          return {};
        }
        createChannelMerger(t) {
          return {};
        }
        createChannelSplitter(t) {
          return {};
        }
        createConstantSource() {
          return {};
        }
        createConvolver() {
          return {};
        }
        createDelay(t) {
          return {};
        }
        createDynamicsCompressor() {
          return {};
        }
        createGain() {
          return {};
        }
        createIIRFilter(t, e) {
          return {};
        }
        createPanner() {
          return {};
        }
        createPeriodicWave(t, e, n) {
          return {};
        }
        createStereoPanner() {
          return {};
        }
        createWaveShaper() {
          return {};
        }
        createMediaStreamSource(t) {
          return {};
        }
        createMediaStreamDestination() {
          return {};
        }
        decodeAudioData(t) {
          return Promise.resolve({});
        }
        createAudioWorkletNode(t, e) {
          return {};
        }
        get rawContext() {
          return {};
        }
        addAudioWorkletModule(t, e) {
          return S(this, void 0, void 0, function* () {
            return Promise.resolve();
          });
        }
        resume() {
          return Promise.resolve();
        }
        setTimeout(t, e) {
          return 0;
        }
        clearTimeout(t) {
          return this;
        }
        setInterval(t, e) {
          return 0;
        }
        clearInterval(t) {
          return this;
        }
        getConstant(t) {
          return {};
        }
        get currentTime() {
          return 0;
        }
        get state() {
          return {};
        }
        get sampleRate() {
          return 0;
        }
        get listener() {
          return {};
        }
        get transport() {
          return {};
        }
        get draw() {
          return {};
        }
        set draw(t) {}
        get destination() {
          return {};
        }
        set destination(t) {}
        now() {
          return 0;
        }
        immediate() {
          return 0;
        }
      })();
      let st = nt;
      function it() {
        return st === nt && T && ot(new H()), st;
      }
      function ot(t) {
        st = M(t) ? new H(t) : D(t) ? new et(t) : t;
      }
      function rt() {
        return st.resume();
      }
      if (w && !w.TONE_SILENCE_LOGGING) {
        let t = "v";
        "dev" === i && (t = "");
        const e = ` * Tone.js ${t}${i} * `;
        console.log("%c" + e, "background: #000; color: #fff");
      }
      function at(t) {
        return Math.pow(10, t / 20);
      }
      function ct(t) {
        return (Math.log(t) / Math.LN10) * 20;
      }
      function ut(t) {
        return Math.pow(2, t / 12);
      }
      let ht = 440;
      function lt(t) {
        return Math.round(dt(t));
      }
      function dt(t) {
        return 69 + 12 * Math.log2(t / ht);
      }
      function pt(t) {
        return ht * Math.pow(2, (t - 69) / 12);
      }
      class ft extends V {
        constructor(t, e, n) {
          super(),
            (this.defaultUnits = "s"),
            (this._val = e),
            (this._units = n),
            (this.context = t),
            (this._expressions = this._getExpressions());
        }
        _getExpressions() {
          return {
            hz: {
              method: (t) => this._frequencyToUnits(parseFloat(t)),
              regexp: /^(\d+(?:\.\d+)?)hz$/i,
            },
            i: {
              method: (t) => this._ticksToUnits(parseInt(t, 10)),
              regexp: /^(\d+)i$/i,
            },
            m: {
              method: (t) =>
                this._beatsToUnits(parseInt(t, 10) * this._getTimeSignature()),
              regexp: /^(\d+)m$/i,
            },
            n: {
              method: (t, e) => {
                const n = parseInt(t, 10),
                  s = "." === e ? 1.5 : 1;
                return 1 === n
                  ? this._beatsToUnits(this._getTimeSignature()) * s
                  : this._beatsToUnits(4 / n) * s;
              },
              regexp: /^(\d+)n(\.?)$/i,
            },
            number: {
              method: (t) =>
                this._expressions[this.defaultUnits].method.call(this, t),
              regexp: /^(\d+(?:\.\d+)?)$/,
            },
            s: {
              method: (t) => this._secondsToUnits(parseFloat(t)),
              regexp: /^(\d+(?:\.\d+)?)s$/,
            },
            samples: {
              method: (t) => parseInt(t, 10) / this.context.sampleRate,
              regexp: /^(\d+)samples$/,
            },
            t: {
              method: (t) => {
                const e = parseInt(t, 10);
                return this._beatsToUnits(8 / (3 * Math.floor(e)));
              },
              regexp: /^(\d+)t$/i,
            },
            tr: {
              method: (t, e, n) => {
                let s = 0;
                return (
                  t &&
                    "0" !== t &&
                    (s += this._beatsToUnits(
                      this._getTimeSignature() * parseFloat(t)
                    )),
                  e && "0" !== e && (s += this._beatsToUnits(parseFloat(e))),
                  n &&
                    "0" !== n &&
                    (s += this._beatsToUnits(parseFloat(n) / 4)),
                  s
                );
              },
              regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
            },
          };
        }
        valueOf() {
          if (
            (this._val instanceof ft && this.fromType(this._val), p(this._val))
          )
            return this._noArg();
          if (b(this._val) && p(this._units)) {
            for (const t in this._expressions)
              if (this._expressions[t].regexp.test(this._val.trim())) {
                this._units = t;
                break;
              }
          } else if (g(this._val)) {
            let t = 0;
            for (const e in this._val)
              if (f(this._val[e])) {
                const n = this._val[e];
                t += new this.constructor(this.context, e).valueOf() * n;
              }
            return t;
          }
          if (f(this._units)) {
            const t = this._expressions[this._units],
              e = this._val.toString().trim().match(t.regexp);
            return e
              ? t.method.apply(this, e.slice(1))
              : t.method.call(this, this._val);
          }
          return b(this._val) ? parseFloat(this._val) : this._val;
        }
        _frequencyToUnits(t) {
          return 1 / t;
        }
        _beatsToUnits(t) {
          return (60 / this._getBpm()) * t;
        }
        _secondsToUnits(t) {
          return t;
        }
        _ticksToUnits(t) {
          return (t * this._beatsToUnits(1)) / this._getPPQ();
        }
        _noArg() {
          return this._now();
        }
        _getBpm() {
          return this.context.transport.bpm.value;
        }
        _getTimeSignature() {
          return this.context.transport.timeSignature;
        }
        _getPPQ() {
          return this.context.transport.PPQ;
        }
        fromType(t) {
          switch (((this._units = void 0), this.defaultUnits)) {
            case "s":
              this._val = t.toSeconds();
              break;
            case "i":
              this._val = t.toTicks();
              break;
            case "hz":
              this._val = t.toFrequency();
              break;
            case "midi":
              this._val = t.toMidi();
          }
          return this;
        }
        toFrequency() {
          return 1 / this.toSeconds();
        }
        toSamples() {
          return this.toSeconds() * this.context.sampleRate;
        }
        toMilliseconds() {
          return 1e3 * this.toSeconds();
        }
      }
      class _t extends ft {
        constructor() {
          super(...arguments), (this.name = "TimeClass");
        }
        _getExpressions() {
          return Object.assign(super._getExpressions(), {
            now: {
              method: (t) =>
                this._now() + new this.constructor(this.context, t).valueOf(),
              regexp: /^\+(.+)/,
            },
            quantize: {
              method: (t) => {
                const e = new _t(this.context, t).valueOf();
                return this._secondsToUnits(
                  this.context.transport.nextSubdivision(e)
                );
              },
              regexp: /^@(.+)/,
            },
          });
        }
        quantize(t, e = 1) {
          const n = new this.constructor(this.context, t).valueOf(),
            s = this.valueOf();
          return s + (Math.round(s / n) * n - s) * e;
        }
        toNotation() {
          const t = this.toSeconds(),
            e = ["1m"];
          for (let t = 1; t < 9; t++) {
            const n = Math.pow(2, t);
            e.push(n + "n."), e.push(n + "n"), e.push(n + "t");
          }
          e.push("0");
          let n = e[0],
            s = new _t(this.context, e[0]).toSeconds();
          return (
            e.forEach((e) => {
              const i = new _t(this.context, e).toSeconds();
              Math.abs(i - t) < Math.abs(s - t) && ((n = e), (s = i));
            }),
            n
          );
        }
        toBarsBeatsSixteenths() {
          const t = this._beatsToUnits(1);
          let e = this.valueOf() / t;
          e = parseFloat(e.toFixed(4));
          const n = Math.floor(e / this._getTimeSignature());
          let s = (e % 1) * 4;
          e = Math.floor(e) % this._getTimeSignature();
          const i = s.toString();
          return (
            i.length > 3 && (s = parseFloat(parseFloat(i).toFixed(3))),
            [n, e, s].join(":")
          );
        }
        toTicks() {
          const t = this._beatsToUnits(1),
            e = this.valueOf() / t;
          return Math.round(e * this._getPPQ());
        }
        toSeconds() {
          return this.valueOf();
        }
        toMidi() {
          return lt(this.toFrequency());
        }
        _now() {
          return this.context.now();
        }
      }
      function mt(t, e) {
        return new _t(it(), t, e);
      }
      class gt extends _t {
        constructor() {
          super(...arguments),
            (this.name = "Frequency"),
            (this.defaultUnits = "hz");
        }
        static get A4() {
          return ht;
        }
        static set A4(t) {
          !(function (t) {
            ht = t;
          })(t);
        }
        _getExpressions() {
          return Object.assign({}, super._getExpressions(), {
            midi: {
              regexp: /^(\d+(?:\.\d+)?midi)/,
              method(t) {
                return "midi" === this.defaultUnits ? t : gt.mtof(t);
              },
            },
            note: {
              regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
              method(t, e) {
                const n = vt[t.toLowerCase()] + 12 * (parseInt(e, 10) + 1);
                return "midi" === this.defaultUnits ? n : gt.mtof(n);
              },
            },
            tr: {
              regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
              method(t, e, n) {
                let s = 1;
                return (
                  t &&
                    "0" !== t &&
                    (s *= this._beatsToUnits(
                      this._getTimeSignature() * parseFloat(t)
                    )),
                  e && "0" !== e && (s *= this._beatsToUnits(parseFloat(e))),
                  n &&
                    "0" !== n &&
                    (s *= this._beatsToUnits(parseFloat(n) / 4)),
                  s
                );
              },
            },
          });
        }
        transpose(t) {
          return new gt(this.context, this.valueOf() * ut(t));
        }
        harmonize(t) {
          return t.map((t) => this.transpose(t));
        }
        toMidi() {
          return lt(this.valueOf());
        }
        toNote() {
          const t = this.toFrequency(),
            e = Math.log2(t / gt.A4);
          let n = Math.round(12 * e) + 57;
          const s = Math.floor(n / 12);
          return s < 0 && (n += -12 * s), yt[n % 12] + s.toString();
        }
        toSeconds() {
          return 1 / super.toSeconds();
        }
        toTicks() {
          const t = this._beatsToUnits(1),
            e = this.valueOf() / t;
          return Math.floor(e * this._getPPQ());
        }
        _noArg() {
          return 0;
        }
        _frequencyToUnits(t) {
          return t;
        }
        _ticksToUnits(t) {
          return 1 / ((60 * t) / (this._getBpm() * this._getPPQ()));
        }
        _beatsToUnits(t) {
          return 1 / super._beatsToUnits(t);
        }
        _secondsToUnits(t) {
          return 1 / t;
        }
        static mtof(t) {
          return pt(t);
        }
        static ftom(t) {
          return lt(t);
        }
      }
      const vt = {
          cbb: -2,
          cb: -1,
          c: 0,
          "c#": 1,
          cx: 2,
          dbb: 0,
          db: 1,
          d: 2,
          "d#": 3,
          dx: 4,
          ebb: 2,
          eb: 3,
          e: 4,
          "e#": 5,
          ex: 6,
          fbb: 3,
          fb: 4,
          f: 5,
          "f#": 6,
          fx: 7,
          gbb: 5,
          gb: 6,
          g: 7,
          "g#": 8,
          gx: 9,
          abb: 7,
          ab: 8,
          a: 9,
          "a#": 10,
          ax: 11,
          bbb: 9,
          bb: 10,
          b: 11,
          "b#": 12,
          bx: 13,
        },
        yt = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
      function bt(t, e) {
        return new gt(it(), t, e);
      }
      class xt extends _t {
        constructor() {
          super(...arguments), (this.name = "TransportTime");
        }
        _now() {
          return this.context.transport.seconds;
        }
      }
      function wt(t, e) {
        return new xt(it(), t, e);
      }
      class Tt extends V {
        constructor() {
          super();
          const t = q(Tt.getDefaults(), arguments, ["context"]);
          this.defaultContext
            ? (this.context = this.defaultContext)
            : (this.context = t.context);
        }
        static getDefaults() {
          return {
            context: it(),
          };
        }
        now() {
          return this.context.currentTime + this.context.lookAhead;
        }
        immediate() {
          return this.context.currentTime;
        }
        get sampleTime() {
          return 1 / this.context.sampleRate;
        }
        get blockTime() {
          return 128 / this.context.sampleRate;
        }
        toSeconds(t) {
          return new _t(this.context, t).toSeconds();
        }
        toFrequency(t) {
          return new gt(this.context, t).toFrequency();
        }
        toTicks(t) {
          return new xt(this.context, t).toTicks();
        }
        _getPartialProperties(t) {
          const e = this.get();
          return (
            Object.keys(e).forEach((n) => {
              p(t[n]) && delete e[n];
            }),
            e
          );
        }
        get() {
          const t = this.constructor.getDefaults();
          return (
            Object.keys(t).forEach((e) => {
              if (Reflect.has(this, e)) {
                const n = this[e];
                f(n) && f(n.value) && f(n.setValueAtTime)
                  ? (t[e] = n.value)
                  : n instanceof Tt
                  ? (t[e] = n._getPartialProperties(t[e]))
                  : y(n) || m(n) || b(n) || v(n)
                  ? (t[e] = n)
                  : delete t[e];
              }
            }),
            t
          );
        }
        set(t) {
          return (
            Object.keys(t).forEach((e) => {
              Reflect.has(this, e) &&
                f(this[e]) &&
                (this[e] && f(this[e].value) && f(this[e].setValueAtTime)
                  ? this[e].value !== t[e] && (this[e].value = t[e])
                  : this[e] instanceof Tt
                  ? this[e].set(t[e])
                  : (this[e] = t[e]));
            }),
            this
          );
        }
      }
      class Ot extends W {
        constructor(t = "stopped") {
          super(),
            (this.name = "StateTimeline"),
            (this._initial = t),
            this.setStateAtTime(this._initial, 0);
        }
        getValueAtTime(t) {
          const e = this.get(t);
          return null !== e ? e.state : this._initial;
        }
        setStateAtTime(t, e, n) {
          return (
            a(e, 0),
            this.add(
              Object.assign({}, n, {
                state: t,
                time: e,
              })
            ),
            this
          );
        }
        getLastState(t, e) {
          for (let n = this._search(e); n >= 0; n--) {
            const e = this._timeline[n];
            if (e.state === t) return e;
          }
        }
        getNextState(t, e) {
          const n = this._search(e);
          if (-1 !== n)
            for (let e = n; e < this._timeline.length; e++) {
              const n = this._timeline[e];
              if (n.state === t) return n;
            }
        }
      }
      class St extends Tt {
        constructor() {
          super(q(St.getDefaults(), arguments, ["param", "units", "convert"])),
            (this.name = "Param"),
            (this.overridden = !1),
            (this._minOutput = 1e-7);
          const t = q(St.getDefaults(), arguments, [
            "param",
            "units",
            "convert",
          ]);
          for (
            r(
              f(t.param) && (k(t.param) || t.param instanceof St),
              "param must be an AudioParam"
            );
            !k(t.param);

          )
            t.param = t.param._param;
          (this._swappable = !!f(t.swappable) && t.swappable),
            this._swappable
              ? ((this.input = this.context.createGain()),
                (this._param = t.param),
                this.input.connect(this._param))
              : (this._param = this.input = t.param),
            (this._events = new W(1e3)),
            (this._initialValue = this._param.defaultValue),
            (this.units = t.units),
            (this.convert = t.convert),
            (this._minValue = t.minValue),
            (this._maxValue = t.maxValue),
            f(t.value) &&
              t.value !== this._toType(this._initialValue) &&
              this.setValueAtTime(t.value, 0);
        }
        static getDefaults() {
          return Object.assign(Tt.getDefaults(), {
            convert: !0,
            units: "number",
          });
        }
        get value() {
          const t = this.now();
          return this.getValueAtTime(t);
        }
        set value(t) {
          this.cancelScheduledValues(this.now()),
            this.setValueAtTime(t, this.now());
        }
        get minValue() {
          return f(this._minValue)
            ? this._minValue
            : "time" === this.units ||
              "frequency" === this.units ||
              "normalRange" === this.units ||
              "positive" === this.units ||
              "transportTime" === this.units ||
              "ticks" === this.units ||
              "bpm" === this.units ||
              "hertz" === this.units ||
              "samples" === this.units
            ? 0
            : "audioRange" === this.units
            ? -1
            : "decibels" === this.units
            ? -1 / 0
            : this._param.minValue;
        }
        get maxValue() {
          return f(this._maxValue)
            ? this._maxValue
            : "normalRange" === this.units || "audioRange" === this.units
            ? 1
            : this._param.maxValue;
        }
        _is(t, e) {
          return this.units === e;
        }
        _assertRange(t) {
          return (
            f(this.maxValue) &&
              f(this.minValue) &&
              a(
                t,
                this._fromType(this.minValue),
                this._fromType(this.maxValue)
              ),
            t
          );
        }
        _fromType(t) {
          return this.convert && !this.overridden
            ? this._is(t, "time")
              ? this.toSeconds(t)
              : this._is(t, "decibels")
              ? at(t)
              : this._is(t, "frequency")
              ? this.toFrequency(t)
              : t
            : this.overridden
            ? 0
            : t;
        }
        _toType(t) {
          return this.convert && "decibels" === this.units ? ct(t) : t;
        }
        setValueAtTime(t, e) {
          const n = this.toSeconds(e),
            s = this._fromType(t);
          return (
            r(
              isFinite(s) && isFinite(n),
              `Invalid argument(s) to setValueAtTime: ${JSON.stringify(
                t
              )}, ${JSON.stringify(e)}`
            ),
            this._assertRange(s),
            this.log(this.units, "setValueAtTime", t, n),
            this._events.add({
              time: n,
              type: "setValueAtTime",
              value: s,
            }),
            this._param.setValueAtTime(s, n),
            this
          );
        }
        getValueAtTime(t) {
          const e = Math.max(this.toSeconds(t), 0),
            n = this._events.getAfter(e),
            s = this._events.get(e);
          let i = this._initialValue;
          if (null === s) i = this._initialValue;
          else if (
            "setTargetAtTime" !== s.type ||
            (null !== n && "setValueAtTime" !== n.type)
          )
            if (null === n) i = s.value;
            else if (
              "linearRampToValueAtTime" === n.type ||
              "exponentialRampToValueAtTime" === n.type
            ) {
              let t = s.value;
              if ("setTargetAtTime" === s.type) {
                const e = this._events.getBefore(s.time);
                t = null === e ? this._initialValue : e.value;
              }
              i =
                "linearRampToValueAtTime" === n.type
                  ? this._linearInterpolate(s.time, t, n.time, n.value, e)
                  : this._exponentialInterpolate(s.time, t, n.time, n.value, e);
            } else i = s.value;
          else {
            const t = this._events.getBefore(s.time);
            let n;
            (n = null === t ? this._initialValue : t.value),
              "setTargetAtTime" === s.type &&
                (i = this._exponentialApproach(
                  s.time,
                  n,
                  s.value,
                  s.constant,
                  e
                ));
          }
          return this._toType(i);
        }
        setRampPoint(t) {
          t = this.toSeconds(t);
          let e = this.getValueAtTime(t);
          return (
            this.cancelAndHoldAtTime(t),
            0 === this._fromType(e) && (e = this._toType(this._minOutput)),
            this.setValueAtTime(e, t),
            this
          );
        }
        linearRampToValueAtTime(t, e) {
          const n = this._fromType(t),
            s = this.toSeconds(e);
          return (
            r(
              isFinite(n) && isFinite(s),
              `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(
                t
              )}, ${JSON.stringify(e)}`
            ),
            this._assertRange(n),
            this._events.add({
              time: s,
              type: "linearRampToValueAtTime",
              value: n,
            }),
            this.log(this.units, "linearRampToValueAtTime", t, s),
            this._param.linearRampToValueAtTime(n, s),
            this
          );
        }
        exponentialRampToValueAtTime(t, e) {
          let n = this._fromType(t);
          (n = Math.max(this._minOutput, n)), this._assertRange(n);
          const s = this.toSeconds(e);
          return (
            r(
              isFinite(n) && isFinite(s),
              `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(
                t
              )}, ${JSON.stringify(e)}`
            ),
            this._events.add({
              time: s,
              type: "exponentialRampToValueAtTime",
              value: n,
            }),
            this.log(this.units, "exponentialRampToValueAtTime", t, s),
            this._param.exponentialRampToValueAtTime(n, s),
            this
          );
        }
        exponentialRampTo(t, e, n) {
          return (
            (n = this.toSeconds(n)),
            this.setRampPoint(n),
            this.exponentialRampToValueAtTime(t, n + this.toSeconds(e)),
            this
          );
        }
        linearRampTo(t, e, n) {
          return (
            (n = this.toSeconds(n)),
            this.setRampPoint(n),
            this.linearRampToValueAtTime(t, n + this.toSeconds(e)),
            this
          );
        }
        targetRampTo(t, e, n) {
          return (
            (n = this.toSeconds(n)),
            this.setRampPoint(n),
            this.exponentialApproachValueAtTime(t, n, e),
            this
          );
        }
        exponentialApproachValueAtTime(t, e, n) {
          (e = this.toSeconds(e)), (n = this.toSeconds(n));
          const s = Math.log(n + 1) / Math.log(200);
          return (
            this.setTargetAtTime(t, e, s),
            this.cancelAndHoldAtTime(e + 0.9 * n),
            this.linearRampToValueAtTime(t, e + n),
            this
          );
        }
        setTargetAtTime(t, e, n) {
          const s = this._fromType(t);
          r(
            isFinite(n) && n > 0,
            "timeConstant must be a number greater than 0"
          );
          const i = this.toSeconds(e);
          return (
            this._assertRange(s),
            r(
              isFinite(s) && isFinite(i),
              `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(
                t
              )}, ${JSON.stringify(e)}`
            ),
            this._events.add({
              constant: n,
              time: i,
              type: "setTargetAtTime",
              value: s,
            }),
            this.log(this.units, "setTargetAtTime", t, i, n),
            this._param.setTargetAtTime(s, i, n),
            this
          );
        }
        setValueCurveAtTime(t, e, n, s = 1) {
          (n = this.toSeconds(n)), (e = this.toSeconds(e));
          const i = this._fromType(t[0]) * s;
          this.setValueAtTime(this._toType(i), e);
          const o = n / (t.length - 1);
          for (let n = 1; n < t.length; n++) {
            const i = this._fromType(t[n]) * s;
            this.linearRampToValueAtTime(this._toType(i), e + n * o);
          }
          return this;
        }
        cancelScheduledValues(t) {
          const e = this.toSeconds(t);
          return (
            r(
              isFinite(e),
              "Invalid argument to cancelScheduledValues: " + JSON.stringify(t)
            ),
            this._events.cancel(e),
            this._param.cancelScheduledValues(e),
            this.log(this.units, "cancelScheduledValues", e),
            this
          );
        }
        cancelAndHoldAtTime(t) {
          const e = this.toSeconds(t),
            n = this._fromType(this.getValueAtTime(e));
          r(
            isFinite(e),
            "Invalid argument to cancelAndHoldAtTime: " + JSON.stringify(t)
          ),
            this.log(this.units, "cancelAndHoldAtTime", e, "value=" + n);
          const s = this._events.get(e),
            i = this._events.getAfter(e);
          return (
            s && z(s.time, e)
              ? i
                ? (this._param.cancelScheduledValues(i.time),
                  this._events.cancel(i.time))
                : (this._param.cancelAndHoldAtTime(e),
                  this._events.cancel(e + this.sampleTime))
              : i &&
                (this._param.cancelScheduledValues(i.time),
                this._events.cancel(i.time),
                "linearRampToValueAtTime" === i.type
                  ? this.linearRampToValueAtTime(this._toType(n), e)
                  : "exponentialRampToValueAtTime" === i.type &&
                    this.exponentialRampToValueAtTime(this._toType(n), e)),
            this._events.add({
              time: e,
              type: "setValueAtTime",
              value: n,
            }),
            this._param.setValueAtTime(n, e),
            this
          );
        }
        rampTo(t, e = 0.1, n) {
          return (
            "frequency" === this.units ||
            "bpm" === this.units ||
            "decibels" === this.units
              ? this.exponentialRampTo(t, e, n)
              : this.linearRampTo(t, e, n),
            this
          );
        }
        apply(t) {
          const e = this.context.currentTime;
          t.setValueAtTime(this.getValueAtTime(e), e);
          const n = this._events.get(e);
          if (n && "setTargetAtTime" === n.type) {
            const s = this._events.getAfter(n.time),
              i = s ? s.time : e + 2,
              o = (i - e) / 10;
            for (let n = e; n < i; n += o)
              t.linearRampToValueAtTime(this.getValueAtTime(n), n);
          }
          return (
            this._events.forEachAfter(this.context.currentTime, (e) => {
              "cancelScheduledValues" === e.type
                ? t.cancelScheduledValues(e.time)
                : "setTargetAtTime" === e.type
                ? t.setTargetAtTime(e.value, e.time, e.constant)
                : t[e.type](e.value, e.time);
            }),
            this
          );
        }
        setParam(t) {
          r(
            this._swappable,
            "The Param must be assigned as 'swappable' in the constructor"
          );
          const e = this.input;
          return (
            e.disconnect(this._param),
            this.apply(t),
            (this._param = t),
            e.connect(this._param),
            this
          );
        }
        dispose() {
          return super.dispose(), this._events.dispose(), this;
        }
        get defaultValue() {
          return this._toType(this._param.defaultValue);
        }
        _exponentialApproach(t, e, n, s, i) {
          return n + (e - n) * Math.exp(-(i - t) / s);
        }
        _linearInterpolate(t, e, n, s, i) {
          return e + ((i - t) / (n - t)) * (s - e);
        }
        _exponentialInterpolate(t, e, n, s, i) {
          return e * Math.pow(s / e, (i - t) / (n - t));
        }
      }
      class Ct extends Tt {
        constructor() {
          super(...arguments),
            (this.name = "ToneAudioNode"),
            (this._internalChannels = []);
        }
        get numberOfInputs() {
          return f(this.input)
            ? k(this.input) || this.input instanceof St
              ? 1
              : this.input.numberOfInputs
            : 0;
        }
        get numberOfOutputs() {
          return f(this.output) ? this.output.numberOfOutputs : 0;
        }
        _isAudioNode(t) {
          return f(t) && (t instanceof Ct || A(t));
        }
        _getInternalNodes() {
          const t = this._internalChannels.slice(0);
          return (
            this._isAudioNode(this.input) && t.push(this.input),
            this._isAudioNode(this.output) &&
              this.input !== this.output &&
              t.push(this.output),
            t
          );
        }
        _setChannelProperties(t) {
          this._getInternalNodes().forEach((e) => {
            (e.channelCount = t.channelCount),
              (e.channelCountMode = t.channelCountMode),
              (e.channelInterpretation = t.channelInterpretation);
          });
        }
        _getChannelProperties() {
          const t = this._getInternalNodes();
          r(t.length > 0, "ToneAudioNode does not have any internal nodes");
          const e = t[0];
          return {
            channelCount: e.channelCount,
            channelCountMode: e.channelCountMode,
            channelInterpretation: e.channelInterpretation,
          };
        }
        get channelCount() {
          return this._getChannelProperties().channelCount;
        }
        set channelCount(t) {
          const e = this._getChannelProperties();
          this._setChannelProperties(
            Object.assign(e, {
              channelCount: t,
            })
          );
        }
        get channelCountMode() {
          return this._getChannelProperties().channelCountMode;
        }
        set channelCountMode(t) {
          const e = this._getChannelProperties();
          this._setChannelProperties(
            Object.assign(e, {
              channelCountMode: t,
            })
          );
        }
        get channelInterpretation() {
          return this._getChannelProperties().channelInterpretation;
        }
        set channelInterpretation(t) {
          const e = this._getChannelProperties();
          this._setChannelProperties(
            Object.assign(e, {
              channelInterpretation: t,
            })
          );
        }
        connect(t, e = 0, n = 0) {
          return At(this, t, e, n), this;
        }
        toDestination() {
          return this.connect(this.context.destination), this;
        }
        toMaster() {
          return (
            d("toMaster() has been renamed toDestination()"),
            this.toDestination()
          );
        }
        disconnect(t, e = 0, n = 0) {
          return Dt(this, t, e, n), this;
        }
        chain(...t) {
          return kt(this, ...t), this;
        }
        fan(...t) {
          return t.forEach((t) => this.connect(t)), this;
        }
        dispose() {
          return (
            super.dispose(),
            f(this.input) &&
              (this.input instanceof Ct
                ? this.input.dispose()
                : A(this.input) && this.input.disconnect()),
            f(this.output) &&
              (this.output instanceof Ct
                ? this.output.dispose()
                : A(this.output) && this.output.disconnect()),
            (this._internalChannels = []),
            this
          );
        }
      }
      function kt(...t) {
        const e = t.shift();
        t.reduce(
          (t, e) => (t instanceof Ct ? t.connect(e) : A(t) && At(t, e), e),
          e
        );
      }
      function At(t, e, n = 0, s = 0) {
        for (
          r(f(t), "Cannot connect from undefined node"),
            r(f(e), "Cannot connect to undefined node"),
            (e instanceof Ct || A(e)) &&
              r(e.numberOfInputs > 0, "Cannot connect to node with no inputs"),
            r(
              t.numberOfOutputs > 0,
              "Cannot connect from node with no outputs"
            );
          e instanceof Ct || e instanceof St;

        )
          f(e.input) && (e = e.input);
        for (; t instanceof Ct; ) f(t.output) && (t = t.output);
        k(e) ? t.connect(e, n) : t.connect(e, n, s);
      }
      function Dt(t, e, n = 0, s = 0) {
        if (f(e)) for (; e instanceof Ct; ) e = e.input;
        for (; !A(t); ) f(t.output) && (t = t.output);
        k(e)
          ? t.disconnect(e, n)
          : A(e)
          ? t.disconnect(e, n, s)
          : t.disconnect();
      }
      class Mt extends Ct {
        constructor() {
          super(q(Mt.getDefaults(), arguments, ["gain", "units"])),
            (this.name = "Gain"),
            (this._gainNode = this.context.createGain()),
            (this.input = this._gainNode),
            (this.output = this._gainNode);
          const t = q(Mt.getDefaults(), arguments, ["gain", "units"]);
          (this.gain = new St({
            context: this.context,
            convert: t.convert,
            param: this._gainNode.gain,
            units: t.units,
            value: t.gain,
            minValue: t.minValue,
            maxValue: t.maxValue,
          })),
            $(this, "gain");
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            convert: !0,
            gain: 1,
            units: "gain",
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._gainNode.disconnect(),
            this.gain.dispose(),
            this
          );
        }
      }
      class jt extends Ct {
        constructor(t) {
          super(t),
            (this.onended = K),
            (this._startTime = -1),
            (this._stopTime = -1),
            (this._timeout = -1),
            (this.output = new Mt({
              context: this.context,
              gain: 0,
            })),
            (this._gainNode = this.output),
            (this.getStateAtTime = function (t) {
              const e = this.toSeconds(t);
              return -1 !== this._startTime &&
                e >= this._startTime &&
                (-1 === this._stopTime || e <= this._stopTime)
                ? "started"
                : "stopped";
            }),
            (this._fadeIn = t.fadeIn),
            (this._fadeOut = t.fadeOut),
            (this._curve = t.curve),
            (this.onended = t.onended);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            curve: "linear",
            fadeIn: 0,
            fadeOut: 0,
            onended: K,
          });
        }
        _startGain(t, e = 1) {
          r(-1 === this._startTime, "Source cannot be started more than once");
          const n = this.toSeconds(this._fadeIn);
          return (
            (this._startTime = t + n),
            (this._startTime = Math.max(
              this._startTime,
              this.context.currentTime
            )),
            n > 0
              ? (this._gainNode.gain.setValueAtTime(0, t),
                "linear" === this._curve
                  ? this._gainNode.gain.linearRampToValueAtTime(e, t + n)
                  : this._gainNode.gain.exponentialApproachValueAtTime(e, t, n))
              : this._gainNode.gain.setValueAtTime(e, t),
            this
          );
        }
        stop(t) {
          return this.log("stop", t), this._stopGain(this.toSeconds(t)), this;
        }
        _stopGain(t) {
          r(-1 !== this._startTime, "'start' must be called before 'stop'"),
            this.cancelStop();
          const e = this.toSeconds(this._fadeOut);
          return (
            (this._stopTime = this.toSeconds(t) + e),
            (this._stopTime = Math.max(
              this._stopTime,
              this.context.currentTime
            )),
            e > 0
              ? "linear" === this._curve
                ? this._gainNode.gain.linearRampTo(0, e, t)
                : this._gainNode.gain.targetRampTo(0, e, t)
              : (this._gainNode.gain.cancelAndHoldAtTime(t),
                this._gainNode.gain.setValueAtTime(0, t)),
            this.context.clearTimeout(this._timeout),
            (this._timeout = this.context.setTimeout(() => {
              const t = "exponential" === this._curve ? 2 * e : 0;
              this._stopSource(this.now() + t), this._onended();
            }, this._stopTime - this.context.currentTime)),
            this
          );
        }
        _onended() {
          if (
            this.onended !== K &&
            (this.onended(this), (this.onended = K), !this.context.isOffline)
          ) {
            const t = () => this.dispose();
            void 0 !== window.requestIdleCallback
              ? window.requestIdleCallback(t)
              : setTimeout(t, 1e3);
          }
        }
        get state() {
          return this.getStateAtTime(this.now());
        }
        cancelStop() {
          return (
            this.log("cancelStop"),
            r(-1 !== this._startTime, "Source is not started"),
            this._gainNode.gain.cancelScheduledValues(
              this._startTime + this.sampleTime
            ),
            this.context.clearTimeout(this._timeout),
            (this._stopTime = -1),
            this
          );
        }
        dispose() {
          return super.dispose(), this._gainNode.disconnect(), this;
        }
      }
      class Et extends jt {
        constructor() {
          super(q(Et.getDefaults(), arguments, ["offset"])),
            (this.name = "ToneConstantSource"),
            (this._source = this.context.createConstantSource());
          const t = q(Et.getDefaults(), arguments, ["offset"]);
          At(this._source, this._gainNode),
            (this.offset = new St({
              context: this.context,
              convert: t.convert,
              param: this._source.offset,
              units: t.units,
              value: t.offset,
              minValue: t.minValue,
              maxValue: t.maxValue,
            }));
        }
        static getDefaults() {
          return Object.assign(jt.getDefaults(), {
            convert: !0,
            offset: 1,
            units: "number",
          });
        }
        start(t) {
          const e = this.toSeconds(t);
          return (
            this.log("start", e),
            this._startGain(e),
            this._source.start(e),
            this
          );
        }
        _stopSource(t) {
          this._source.stop(t);
        }
        dispose() {
          return (
            super.dispose(),
            "started" === this.state && this.stop(),
            this._source.disconnect(),
            this.offset.dispose(),
            this
          );
        }
      }
      class Rt extends Ct {
        constructor() {
          super(q(Rt.getDefaults(), arguments, ["value", "units"])),
            (this.name = "Signal"),
            (this.override = !0);
          const t = q(Rt.getDefaults(), arguments, ["value", "units"]);
          (this.output = this._constantSource =
            new Et({
              context: this.context,
              convert: t.convert,
              offset: t.value,
              units: t.units,
              minValue: t.minValue,
              maxValue: t.maxValue,
            })),
            this._constantSource.start(0),
            (this.input = this._param = this._constantSource.offset);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            convert: !0,
            units: "number",
            value: 0,
          });
        }
        connect(t, e = 0, n = 0) {
          return qt(this, t, e, n), this;
        }
        dispose() {
          return (
            super.dispose(),
            this._param.dispose(),
            this._constantSource.dispose(),
            this
          );
        }
        setValueAtTime(t, e) {
          return this._param.setValueAtTime(t, e), this;
        }
        getValueAtTime(t) {
          return this._param.getValueAtTime(t);
        }
        setRampPoint(t) {
          return this._param.setRampPoint(t), this;
        }
        linearRampToValueAtTime(t, e) {
          return this._param.linearRampToValueAtTime(t, e), this;
        }
        exponentialRampToValueAtTime(t, e) {
          return this._param.exponentialRampToValueAtTime(t, e), this;
        }
        exponentialRampTo(t, e, n) {
          return this._param.exponentialRampTo(t, e, n), this;
        }
        linearRampTo(t, e, n) {
          return this._param.linearRampTo(t, e, n), this;
        }
        targetRampTo(t, e, n) {
          return this._param.targetRampTo(t, e, n), this;
        }
        exponentialApproachValueAtTime(t, e, n) {
          return this._param.exponentialApproachValueAtTime(t, e, n), this;
        }
        setTargetAtTime(t, e, n) {
          return this._param.setTargetAtTime(t, e, n), this;
        }
        setValueCurveAtTime(t, e, n, s) {
          return this._param.setValueCurveAtTime(t, e, n, s), this;
        }
        cancelScheduledValues(t) {
          return this._param.cancelScheduledValues(t), this;
        }
        cancelAndHoldAtTime(t) {
          return this._param.cancelAndHoldAtTime(t), this;
        }
        rampTo(t, e, n) {
          return this._param.rampTo(t, e, n), this;
        }
        get value() {
          return this._param.value;
        }
        set value(t) {
          this._param.value = t;
        }
        get convert() {
          return this._param.convert;
        }
        set convert(t) {
          this._param.convert = t;
        }
        get units() {
          return this._param.units;
        }
        get overridden() {
          return this._param.overridden;
        }
        set overridden(t) {
          this._param.overridden = t;
        }
        get maxValue() {
          return this._param.maxValue;
        }
        get minValue() {
          return this._param.minValue;
        }
        apply(t) {
          return this._param.apply(t), this;
        }
      }
      function qt(t, e, n, s) {
        (e instanceof St || k(e) || (e instanceof Rt && e.override)) &&
          (e.cancelScheduledValues(0),
          e.setValueAtTime(0, 0),
          e instanceof Rt && (e.overridden = !0)),
          At(t, e, n, s);
      }
      class It extends St {
        constructor() {
          super(q(It.getDefaults(), arguments, ["value"])),
            (this.name = "TickParam"),
            (this._events = new W(1 / 0)),
            (this._multiplier = 1);
          const t = q(It.getDefaults(), arguments, ["value"]);
          (this._multiplier = t.multiplier),
            this._events.cancel(0),
            this._events.add({
              ticks: 0,
              time: 0,
              type: "setValueAtTime",
              value: this._fromType(t.value),
            }),
            this.setValueAtTime(t.value, 0);
        }
        static getDefaults() {
          return Object.assign(St.getDefaults(), {
            multiplier: 1,
            units: "hertz",
            value: 1,
          });
        }
        setTargetAtTime(t, e, n) {
          (e = this.toSeconds(e)), this.setRampPoint(e);
          const s = this._fromType(t),
            i = this._events.get(e),
            o = Math.round(Math.max(1 / n, 1));
          for (let t = 0; t <= o; t++) {
            const o = n * t + e,
              r = this._exponentialApproach(i.time, i.value, s, n, o);
            this.linearRampToValueAtTime(this._toType(r), o);
          }
          return this;
        }
        setValueAtTime(t, e) {
          const n = this.toSeconds(e);
          super.setValueAtTime(t, e);
          const s = this._events.get(n),
            i = this._events.previousEvent(s),
            o = this._getTicksUntilEvent(i, n);
          return (s.ticks = Math.max(o, 0)), this;
        }
        linearRampToValueAtTime(t, e) {
          const n = this.toSeconds(e);
          super.linearRampToValueAtTime(t, e);
          const s = this._events.get(n),
            i = this._events.previousEvent(s),
            o = this._getTicksUntilEvent(i, n);
          return (s.ticks = Math.max(o, 0)), this;
        }
        exponentialRampToValueAtTime(t, e) {
          e = this.toSeconds(e);
          const n = this._fromType(t),
            s = this._events.get(e),
            i = Math.round(Math.max(10 * (e - s.time), 1)),
            o = (e - s.time) / i;
          for (let t = 0; t <= i; t++) {
            const i = o * t + s.time,
              r = this._exponentialInterpolate(s.time, s.value, e, n, i);
            this.linearRampToValueAtTime(this._toType(r), i);
          }
          return this;
        }
        _getTicksUntilEvent(t, e) {
          if (null === t)
            t = {
              ticks: 0,
              time: 0,
              type: "setValueAtTime",
              value: 0,
            };
          else if (p(t.ticks)) {
            const e = this._events.previousEvent(t);
            t.ticks = this._getTicksUntilEvent(e, t.time);
          }
          const n = this._fromType(this.getValueAtTime(t.time));
          let s = this._fromType(this.getValueAtTime(e));
          const i = this._events.get(e);
          return (
            i &&
              i.time === e &&
              "setValueAtTime" === i.type &&
              (s = this._fromType(this.getValueAtTime(e - this.sampleTime))),
            0.5 * (e - t.time) * (n + s) + t.ticks
          );
        }
        getTicksAtTime(t) {
          const e = this.toSeconds(t),
            n = this._events.get(e);
          return Math.max(this._getTicksUntilEvent(n, e), 0);
        }
        getDurationOfTicks(t, e) {
          const n = this.toSeconds(e),
            s = this.getTicksAtTime(e);
          return this.getTimeOfTick(s + t) - n;
        }
        getTimeOfTick(t) {
          const e = this._events.get(t, "ticks"),
            n = this._events.getAfter(t, "ticks");
          if (e && e.ticks === t) return e.time;
          if (
            e &&
            n &&
            "linearRampToValueAtTime" === n.type &&
            e.value !== n.value
          ) {
            const s = this._fromType(this.getValueAtTime(e.time)),
              i =
                (this._fromType(this.getValueAtTime(n.time)) - s) /
                (n.time - e.time),
              o = Math.sqrt(Math.pow(s, 2) - 2 * i * (e.ticks - t)),
              r = (-s + o) / i,
              a = (-s - o) / i;
            return (r > 0 ? r : a) + e.time;
          }
          return e
            ? 0 === e.value
              ? 1 / 0
              : e.time + (t - e.ticks) / e.value
            : t / this._initialValue;
        }
        ticksToTime(t, e) {
          return this.getDurationOfTicks(t, e);
        }
        timeToTicks(t, e) {
          const n = this.toSeconds(e),
            s = this.toSeconds(t),
            i = this.getTicksAtTime(n);
          return this.getTicksAtTime(n + s) - i;
        }
        _fromType(t) {
          return "bpm" === this.units && this.multiplier
            ? 1 / (60 / t / this.multiplier)
            : super._fromType(t);
        }
        _toType(t) {
          return "bpm" === this.units && this.multiplier
            ? (t / this.multiplier) * 60
            : super._toType(t);
        }
        get multiplier() {
          return this._multiplier;
        }
        set multiplier(t) {
          const e = this.value;
          (this._multiplier = t),
            this.cancelScheduledValues(0),
            this.setValueAtTime(e, 0);
        }
      }
      class Ft extends Rt {
        constructor() {
          super(q(Ft.getDefaults(), arguments, ["value"])),
            (this.name = "TickSignal");
          const t = q(Ft.getDefaults(), arguments, ["value"]);
          this.input = this._param = new It({
            context: this.context,
            convert: t.convert,
            multiplier: t.multiplier,
            param: this._constantSource.offset,
            units: t.units,
            value: t.value,
          });
        }
        static getDefaults() {
          return Object.assign(Rt.getDefaults(), {
            multiplier: 1,
            units: "hertz",
            value: 1,
          });
        }
        ticksToTime(t, e) {
          return this._param.ticksToTime(t, e);
        }
        timeToTicks(t, e) {
          return this._param.timeToTicks(t, e);
        }
        getTimeOfTick(t) {
          return this._param.getTimeOfTick(t);
        }
        getDurationOfTicks(t, e) {
          return this._param.getDurationOfTicks(t, e);
        }
        getTicksAtTime(t) {
          return this._param.getTicksAtTime(t);
        }
        get multiplier() {
          return this._param.multiplier;
        }
        set multiplier(t) {
          this._param.multiplier = t;
        }
        dispose() {
          return super.dispose(), this._param.dispose(), this;
        }
      }
      class Vt extends Tt {
        constructor() {
          super(q(Vt.getDefaults(), arguments, ["frequency"])),
            (this.name = "TickSource"),
            (this._state = new Ot()),
            (this._tickOffset = new W());
          const t = q(Vt.getDefaults(), arguments, ["frequency"]);
          (this.frequency = new Ft({
            context: this.context,
            units: t.units,
            value: t.frequency,
          })),
            $(this, "frequency"),
            this._state.setStateAtTime("stopped", 0),
            this.setTicksAtTime(0, 0);
        }
        static getDefaults() {
          return Object.assign(
            {
              frequency: 1,
              units: "hertz",
            },
            Tt.getDefaults()
          );
        }
        get state() {
          return this.getStateAtTime(this.now());
        }
        start(t, e) {
          const n = this.toSeconds(t);
          return (
            "started" !== this._state.getValueAtTime(n) &&
              (this._state.setStateAtTime("started", n),
              f(e) && this.setTicksAtTime(e, n)),
            this
          );
        }
        stop(t) {
          const e = this.toSeconds(t);
          if ("stopped" === this._state.getValueAtTime(e)) {
            const t = this._state.get(e);
            t &&
              t.time > 0 &&
              (this._tickOffset.cancel(t.time), this._state.cancel(t.time));
          }
          return (
            this._state.cancel(e),
            this._state.setStateAtTime("stopped", e),
            this.setTicksAtTime(0, e),
            this
          );
        }
        pause(t) {
          const e = this.toSeconds(t);
          return (
            "started" === this._state.getValueAtTime(e) &&
              this._state.setStateAtTime("paused", e),
            this
          );
        }
        cancel(t) {
          return (
            (t = this.toSeconds(t)),
            this._state.cancel(t),
            this._tickOffset.cancel(t),
            this
          );
        }
        getTicksAtTime(t) {
          const e = this.toSeconds(t),
            n = this._state.getLastState("stopped", e),
            s = {
              state: "paused",
              time: e,
            };
          this._state.add(s);
          let i = n,
            o = 0;
          return (
            this._state.forEachBetween(n.time, e + this.sampleTime, (t) => {
              let e = i.time;
              const n = this._tickOffset.get(t.time);
              n && n.time >= i.time && ((o = n.ticks), (e = n.time)),
                "started" === i.state &&
                  "started" !== t.state &&
                  (o +=
                    this.frequency.getTicksAtTime(t.time) -
                    this.frequency.getTicksAtTime(e)),
                (i = t);
            }),
            this._state.remove(s),
            o
          );
        }
        get ticks() {
          return this.getTicksAtTime(this.now());
        }
        set ticks(t) {
          this.setTicksAtTime(t, this.now());
        }
        get seconds() {
          return this.getSecondsAtTime(this.now());
        }
        set seconds(t) {
          const e = this.now(),
            n = this.frequency.timeToTicks(t, e);
          this.setTicksAtTime(n, e);
        }
        getSecondsAtTime(t) {
          t = this.toSeconds(t);
          const e = this._state.getLastState("stopped", t),
            n = {
              state: "paused",
              time: t,
            };
          this._state.add(n);
          let s = e,
            i = 0;
          return (
            this._state.forEachBetween(e.time, t + this.sampleTime, (t) => {
              let e = s.time;
              const n = this._tickOffset.get(t.time);
              n && n.time >= s.time && ((i = n.seconds), (e = n.time)),
                "started" === s.state &&
                  "started" !== t.state &&
                  (i += t.time - e),
                (s = t);
            }),
            this._state.remove(n),
            i
          );
        }
        setTicksAtTime(t, e) {
          return (
            (e = this.toSeconds(e)),
            this._tickOffset.cancel(e),
            this._tickOffset.add({
              seconds: this.frequency.getDurationOfTicks(t, e),
              ticks: t,
              time: e,
            }),
            this
          );
        }
        getStateAtTime(t) {
          return (t = this.toSeconds(t)), this._state.getValueAtTime(t);
        }
        getTimeOfTick(t, e = this.now()) {
          const n = this._tickOffset.get(e),
            s = this._state.get(e),
            i = Math.max(n.time, s.time),
            o = this.frequency.getTicksAtTime(i) + t - n.ticks;
          return this.frequency.getTimeOfTick(o);
        }
        forEachTickBetween(t, e, n) {
          let s = this._state.get(t);
          this._state.forEachBetween(t, e, (e) => {
            s &&
              "started" === s.state &&
              "started" !== e.state &&
              this.forEachTickBetween(
                Math.max(s.time, t),
                e.time - this.sampleTime,
                n
              ),
              (s = e);
          });
          let i = null;
          if (s && "started" === s.state) {
            const o = Math.max(s.time, t),
              r = this.frequency.getTicksAtTime(o),
              a = r - this.frequency.getTicksAtTime(s.time);
            let c = Math.ceil(a) - a;
            c = z(c, 1) ? 0 : c;
            let u = this.frequency.getTimeOfTick(r + c);
            for (; u < e; ) {
              try {
                n(u, Math.round(this.getTicksAtTime(u)));
              } catch (t) {
                i = t;
                break;
              }
              u += this.frequency.getDurationOfTicks(1, u);
            }
          }
          if (i) throw i;
          return this;
        }
        dispose() {
          return (
            super.dispose(),
            this._state.dispose(),
            this._tickOffset.dispose(),
            this.frequency.dispose(),
            this
          );
        }
      }
      class Nt extends Tt {
        constructor() {
          super(q(Nt.getDefaults(), arguments, ["callback", "frequency"])),
            (this.name = "Clock"),
            (this.callback = K),
            (this._lastUpdate = 0),
            (this._state = new Ot("stopped")),
            (this._boundLoop = this._loop.bind(this));
          const t = q(Nt.getDefaults(), arguments, ["callback", "frequency"]);
          (this.callback = t.callback),
            (this._tickSource = new Vt({
              context: this.context,
              frequency: t.frequency,
              units: t.units,
            })),
            (this._lastUpdate = 0),
            (this.frequency = this._tickSource.frequency),
            $(this, "frequency"),
            this._state.setStateAtTime("stopped", 0),
            this.context.on("tick", this._boundLoop);
        }
        static getDefaults() {
          return Object.assign(Tt.getDefaults(), {
            callback: K,
            frequency: 1,
            units: "hertz",
          });
        }
        get state() {
          return this._state.getValueAtTime(this.now());
        }
        start(t, e) {
          c(this.context);
          const n = this.toSeconds(t);
          return (
            this.log("start", n),
            "started" !== this._state.getValueAtTime(n) &&
              (this._state.setStateAtTime("started", n),
              this._tickSource.start(n, e),
              n < this._lastUpdate && this.emit("start", n, e)),
            this
          );
        }
        stop(t) {
          const e = this.toSeconds(t);
          return (
            this.log("stop", e),
            this._state.cancel(e),
            this._state.setStateAtTime("stopped", e),
            this._tickSource.stop(e),
            e < this._lastUpdate && this.emit("stop", e),
            this
          );
        }
        pause(t) {
          const e = this.toSeconds(t);
          return (
            "started" === this._state.getValueAtTime(e) &&
              (this._state.setStateAtTime("paused", e),
              this._tickSource.pause(e),
              e < this._lastUpdate && this.emit("pause", e)),
            this
          );
        }
        get ticks() {
          return Math.ceil(this.getTicksAtTime(this.now()));
        }
        set ticks(t) {
          this._tickSource.ticks = t;
        }
        get seconds() {
          return this._tickSource.seconds;
        }
        set seconds(t) {
          this._tickSource.seconds = t;
        }
        getSecondsAtTime(t) {
          return this._tickSource.getSecondsAtTime(t);
        }
        setTicksAtTime(t, e) {
          return this._tickSource.setTicksAtTime(t, e), this;
        }
        getTimeOfTick(t, e = this.now()) {
          return this._tickSource.getTimeOfTick(t, e);
        }
        getTicksAtTime(t) {
          return this._tickSource.getTicksAtTime(t);
        }
        nextTickTime(t, e) {
          const n = this.toSeconds(e),
            s = this.getTicksAtTime(n);
          return this._tickSource.getTimeOfTick(s + t, n);
        }
        _loop() {
          const t = this._lastUpdate,
            e = this.now();
          (this._lastUpdate = e),
            this.log("loop", t, e),
            t !== e &&
              (this._state.forEachBetween(t, e, (t) => {
                switch (t.state) {
                  case "started":
                    const e = this._tickSource.getTicksAtTime(t.time);
                    this.emit("start", t.time, e);
                    break;
                  case "stopped":
                    0 !== t.time && this.emit("stop", t.time);
                    break;
                  case "paused":
                    this.emit("pause", t.time);
                }
              }),
              this._tickSource.forEachTickBetween(t, e, (t, e) => {
                this.callback(t, e);
              }));
        }
        getStateAtTime(t) {
          const e = this.toSeconds(t);
          return this._state.getValueAtTime(e);
        }
        dispose() {
          return (
            super.dispose(),
            this.context.off("tick", this._boundLoop),
            this._tickSource.dispose(),
            this._state.dispose(),
            this
          );
        }
      }
      Z.mixin(Nt);
      class Pt extends V {
        constructor(t) {
          super(),
            (this.name = "TimelineValue"),
            (this._timeline = new W({
              memory: 10,
            })),
            (this._initialValue = t);
        }
        set(t, e) {
          return (
            this._timeline.add({
              value: t,
              time: e,
            }),
            this
          );
        }
        get(t) {
          const e = this._timeline.get(t);
          return e ? e.value : this._initialValue;
        }
      }
      class Lt extends xt {
        constructor() {
          super(...arguments), (this.name = "Ticks"), (this.defaultUnits = "i");
        }
        _now() {
          return this.context.transport.ticks;
        }
        _beatsToUnits(t) {
          return this._getPPQ() * t;
        }
        _secondsToUnits(t) {
          return Math.floor((t / (60 / this._getBpm())) * this._getPPQ());
        }
        _ticksToUnits(t) {
          return t;
        }
        toTicks() {
          return this.valueOf();
        }
        toSeconds() {
          return (this.valueOf() / this._getPPQ()) * (60 / this._getBpm());
        }
      }
      function zt(t, e) {
        return new Lt(it(), t, e);
      }
      class Bt extends V {
        constructor() {
          super(...arguments),
            (this.name = "IntervalTimeline"),
            (this._root = null),
            (this._length = 0);
        }
        add(t) {
          r(f(t.time), "Events must have a time property"),
            r(f(t.duration), "Events must have a duration parameter"),
            (t.time = t.time.valueOf());
          let e = new Wt(t.time, t.time + t.duration, t);
          for (
            null === this._root ? (this._root = e) : this._root.insert(e),
              this._length++;
            null !== e;

          )
            e.updateHeight(), e.updateMax(), this._rebalance(e), (e = e.parent);
          return this;
        }
        remove(t) {
          if (null !== this._root) {
            const e = [];
            this._root.search(t.time, e);
            for (const n of e)
              if (n.event === t) {
                this._removeNode(n), this._length--;
                break;
              }
          }
          return this;
        }
        get length() {
          return this._length;
        }
        cancel(t) {
          return this.forEachFrom(t, (t) => this.remove(t)), this;
        }
        _setRoot(t) {
          (this._root = t), null !== this._root && (this._root.parent = null);
        }
        _replaceNodeInParent(t, e) {
          null !== t.parent
            ? (t.isLeftChild() ? (t.parent.left = e) : (t.parent.right = e),
              this._rebalance(t.parent))
            : this._setRoot(e);
        }
        _removeNode(t) {
          if (null === t.left && null === t.right)
            this._replaceNodeInParent(t, null);
          else if (null === t.right) this._replaceNodeInParent(t, t.left);
          else if (null === t.left) this._replaceNodeInParent(t, t.right);
          else {
            let e,
              n = null;
            if (t.getBalance() > 0)
              if (null === t.left.right)
                (e = t.left), (e.right = t.right), (n = e);
              else {
                for (e = t.left.right; null !== e.right; ) e = e.right;
                e.parent &&
                  ((e.parent.right = e.left),
                  (n = e.parent),
                  (e.left = t.left),
                  (e.right = t.right));
              }
            else if (null === t.right.left)
              (e = t.right), (e.left = t.left), (n = e);
            else {
              for (e = t.right.left; null !== e.left; ) e = e.left;
              e.parent &&
                ((e.parent.left = e.right),
                (n = e.parent),
                (e.left = t.left),
                (e.right = t.right));
            }
            null !== t.parent
              ? t.isLeftChild()
                ? (t.parent.left = e)
                : (t.parent.right = e)
              : this._setRoot(e),
              n && this._rebalance(n);
          }
          t.dispose();
        }
        _rotateLeft(t) {
          const e = t.parent,
            n = t.isLeftChild(),
            s = t.right;
          s && ((t.right = s.left), (s.left = t)),
            null !== e ? (n ? (e.left = s) : (e.right = s)) : this._setRoot(s);
        }
        _rotateRight(t) {
          const e = t.parent,
            n = t.isLeftChild(),
            s = t.left;
          s && ((t.left = s.right), (s.right = t)),
            null !== e ? (n ? (e.left = s) : (e.right = s)) : this._setRoot(s);
        }
        _rebalance(t) {
          const e = t.getBalance();
          e > 1 && t.left
            ? t.left.getBalance() < 0
              ? this._rotateLeft(t.left)
              : this._rotateRight(t)
            : e < -1 &&
              t.right &&
              (t.right.getBalance() > 0
                ? this._rotateRight(t.right)
                : this._rotateLeft(t));
        }
        get(t) {
          if (null !== this._root) {
            const e = [];
            if ((this._root.search(t, e), e.length > 0)) {
              let t = e[0];
              for (let n = 1; n < e.length; n++) e[n].low > t.low && (t = e[n]);
              return t.event;
            }
          }
          return null;
        }
        forEach(t) {
          if (null !== this._root) {
            const e = [];
            this._root.traverse((t) => e.push(t)),
              e.forEach((e) => {
                e.event && t(e.event);
              });
          }
          return this;
        }
        forEachAtTime(t, e) {
          if (null !== this._root) {
            const n = [];
            this._root.search(t, n),
              n.forEach((t) => {
                t.event && e(t.event);
              });
          }
          return this;
        }
        forEachFrom(t, e) {
          if (null !== this._root) {
            const n = [];
            this._root.searchAfter(t, n),
              n.forEach((t) => {
                t.event && e(t.event);
              });
          }
          return this;
        }
        dispose() {
          return (
            super.dispose(),
            null !== this._root && this._root.traverse((t) => t.dispose()),
            (this._root = null),
            this
          );
        }
      }
      class Wt {
        constructor(t, e, n) {
          (this._left = null),
            (this._right = null),
            (this.parent = null),
            (this.height = 0),
            (this.event = n),
            (this.low = t),
            (this.high = e),
            (this.max = this.high);
        }
        insert(t) {
          t.low <= this.low
            ? null === this.left
              ? (this.left = t)
              : this.left.insert(t)
            : null === this.right
            ? (this.right = t)
            : this.right.insert(t);
        }
        search(t, e) {
          t > this.max ||
            (null !== this.left && this.left.search(t, e),
            this.low <= t && this.high > t && e.push(this),
            this.low > t || (null !== this.right && this.right.search(t, e)));
        }
        searchAfter(t, e) {
          this.low >= t &&
            (e.push(this), null !== this.left && this.left.searchAfter(t, e)),
            null !== this.right && this.right.searchAfter(t, e);
        }
        traverse(t) {
          t(this),
            null !== this.left && this.left.traverse(t),
            null !== this.right && this.right.traverse(t);
        }
        updateHeight() {
          null !== this.left && null !== this.right
            ? (this.height = Math.max(this.left.height, this.right.height) + 1)
            : null !== this.right
            ? (this.height = this.right.height + 1)
            : null !== this.left
            ? (this.height = this.left.height + 1)
            : (this.height = 0);
        }
        updateMax() {
          (this.max = this.high),
            null !== this.left &&
              (this.max = Math.max(this.max, this.left.max)),
            null !== this.right &&
              (this.max = Math.max(this.max, this.right.max));
        }
        getBalance() {
          let t = 0;
          return (
            null !== this.left && null !== this.right
              ? (t = this.left.height - this.right.height)
              : null !== this.left
              ? (t = this.left.height + 1)
              : null !== this.right && (t = -(this.right.height + 1)),
            t
          );
        }
        isLeftChild() {
          return null !== this.parent && this.parent.left === this;
        }
        get left() {
          return this._left;
        }
        set left(t) {
          (this._left = t),
            null !== t && (t.parent = this),
            this.updateHeight(),
            this.updateMax();
        }
        get right() {
          return this._right;
        }
        set right(t) {
          (this._right = t),
            null !== t && (t.parent = this),
            this.updateHeight(),
            this.updateMax();
        }
        dispose() {
          (this.parent = null),
            (this._left = null),
            (this._right = null),
            (this.event = null);
        }
      }
      class Ut {
        constructor(t, e) {
          this.id = Ut._eventId++;
          const n = Object.assign(Ut.getDefaults(), e);
          (this.transport = t),
            (this.callback = n.callback),
            (this._once = n.once),
            (this.time = n.time);
        }
        static getDefaults() {
          return {
            callback: K,
            once: !1,
            time: 0,
          };
        }
        invoke(t) {
          this.callback &&
            (this.callback(t), this._once && this.transport.clear(this.id));
        }
        dispose() {
          return (this.callback = void 0), this;
        }
      }
      Ut._eventId = 0;
      class Gt extends Ut {
        constructor(t, e) {
          super(t, e),
            (this._currentId = -1),
            (this._nextId = -1),
            (this._nextTick = this.time),
            (this._boundRestart = this._restart.bind(this));
          const n = Object.assign(Gt.getDefaults(), e);
          (this.duration = new Lt(t.context, n.duration).valueOf()),
            (this._interval = new Lt(t.context, n.interval).valueOf()),
            (this._nextTick = n.time),
            this.transport.on("start", this._boundRestart),
            this.transport.on("loopStart", this._boundRestart),
            (this.context = this.transport.context),
            this._restart();
        }
        static getDefaults() {
          return Object.assign({}, Ut.getDefaults(), {
            duration: 1 / 0,
            interval: 1,
            once: !1,
          });
        }
        invoke(t) {
          this._createEvents(t), super.invoke(t);
        }
        _createEvents(t) {
          const e = this.transport.getTicksAtTime(t);
          e >= this.time &&
            e >= this._nextTick &&
            this._nextTick + this._interval < this.time + this.duration &&
            ((this._nextTick += this._interval),
            (this._currentId = this._nextId),
            (this._nextId = this.transport.scheduleOnce(
              this.invoke.bind(this),
              new Lt(this.context, this._nextTick).toSeconds()
            )));
        }
        _restart(t) {
          this.transport.clear(this._currentId),
            this.transport.clear(this._nextId),
            (this._nextTick = this.time);
          const e = this.transport.getTicksAtTime(t);
          e > this.time &&
            (this._nextTick =
              this.time +
              Math.ceil((e - this.time) / this._interval) * this._interval),
            (this._currentId = this.transport.scheduleOnce(
              this.invoke.bind(this),
              new Lt(this.context, this._nextTick).toSeconds()
            )),
            (this._nextTick += this._interval),
            (this._nextId = this.transport.scheduleOnce(
              this.invoke.bind(this),
              new Lt(this.context, this._nextTick).toSeconds()
            ));
        }
        dispose() {
          return (
            super.dispose(),
            this.transport.clear(this._currentId),
            this.transport.clear(this._nextId),
            this.transport.off("start", this._boundRestart),
            this.transport.off("loopStart", this._boundRestart),
            this
          );
        }
      }
      class Yt extends Tt {
        constructor() {
          super(q(Yt.getDefaults(), arguments)),
            (this.name = "Transport"),
            (this._loop = new Pt(!1)),
            (this._loopStart = 0),
            (this._loopEnd = 0),
            (this._scheduledEvents = {}),
            (this._timeline = new W()),
            (this._repeatedEvents = new Bt()),
            (this._syncedSignals = []),
            (this._swingAmount = 0);
          const t = q(Yt.getDefaults(), arguments);
          (this._ppq = t.ppq),
            (this._clock = new Nt({
              callback: this._processTick.bind(this),
              context: this.context,
              frequency: 0,
              units: "bpm",
            })),
            this._bindClockEvents(),
            (this.bpm = this._clock.frequency),
            (this._clock.frequency.multiplier = t.ppq),
            this.bpm.setValueAtTime(t.bpm, 0),
            $(this, "bpm"),
            (this._timeSignature = t.timeSignature),
            (this._swingTicks = t.ppq / 2);
        }
        static getDefaults() {
          return Object.assign(Tt.getDefaults(), {
            bpm: 120,
            loopEnd: "4m",
            loopStart: 0,
            ppq: 192,
            swing: 0,
            swingSubdivision: "8n",
            timeSignature: 4,
          });
        }
        _processTick(t, e) {
          if (
            this._swingAmount > 0 &&
            e % this._ppq != 0 &&
            e % (2 * this._swingTicks) != 0
          ) {
            const n = (e % (2 * this._swingTicks)) / (2 * this._swingTicks),
              s = Math.sin(n * Math.PI) * this._swingAmount;
            t +=
              new Lt(this.context, (2 * this._swingTicks) / 3).toSeconds() * s;
          }
          this._loop.get(t) &&
            e >= this._loopEnd &&
            (this.emit("loopEnd", t),
            this._clock.setTicksAtTime(this._loopStart, t),
            (e = this._loopStart),
            this.emit("loopStart", t, this._clock.getSecondsAtTime(t)),
            this.emit("loop", t)),
            this._timeline.forEachAtTime(e, (e) => e.invoke(t));
        }
        schedule(t, e) {
          const n = new Ut(this, {
            callback: t,
            time: new xt(this.context, e).toTicks(),
          });
          return this._addEvent(n, this._timeline);
        }
        scheduleRepeat(t, e, n, s = 1 / 0) {
          const i = new Gt(this, {
            callback: t,
            duration: new _t(this.context, s).toTicks(),
            interval: new _t(this.context, e).toTicks(),
            time: new xt(this.context, n).toTicks(),
          });
          return this._addEvent(i, this._repeatedEvents);
        }
        scheduleOnce(t, e) {
          const n = new Ut(this, {
            callback: t,
            once: !0,
            time: new xt(this.context, e).toTicks(),
          });
          return this._addEvent(n, this._timeline);
        }
        clear(t) {
          if (this._scheduledEvents.hasOwnProperty(t)) {
            const e = this._scheduledEvents[t.toString()];
            e.timeline.remove(e.event),
              e.event.dispose(),
              delete this._scheduledEvents[t.toString()];
          }
          return this;
        }
        _addEvent(t, e) {
          return (
            (this._scheduledEvents[t.id.toString()] = {
              event: t,
              timeline: e,
            }),
            e.add(t),
            t.id
          );
        }
        cancel(t = 0) {
          const e = this.toTicks(t);
          return (
            this._timeline.forEachFrom(e, (t) => this.clear(t.id)),
            this._repeatedEvents.forEachFrom(e, (t) => this.clear(t.id)),
            this
          );
        }
        _bindClockEvents() {
          this._clock.on("start", (t, e) => {
            (e = new Lt(this.context, e).toSeconds()), this.emit("start", t, e);
          }),
            this._clock.on("stop", (t) => {
              this.emit("stop", t);
            }),
            this._clock.on("pause", (t) => {
              this.emit("pause", t);
            });
        }
        get state() {
          return this._clock.getStateAtTime(this.now());
        }
        start(t, e) {
          let n;
          return f(e) && (n = this.toTicks(e)), this._clock.start(t, n), this;
        }
        stop(t) {
          return this._clock.stop(t), this;
        }
        pause(t) {
          return this._clock.pause(t), this;
        }
        toggle(t) {
          return (
            (t = this.toSeconds(t)),
            "started" !== this._clock.getStateAtTime(t)
              ? this.start(t)
              : this.stop(t),
            this
          );
        }
        get timeSignature() {
          return this._timeSignature;
        }
        set timeSignature(t) {
          y(t) && (t = (t[0] / t[1]) * 4), (this._timeSignature = t);
        }
        get loopStart() {
          return new _t(this.context, this._loopStart, "i").toSeconds();
        }
        set loopStart(t) {
          this._loopStart = this.toTicks(t);
        }
        get loopEnd() {
          return new _t(this.context, this._loopEnd, "i").toSeconds();
        }
        set loopEnd(t) {
          this._loopEnd = this.toTicks(t);
        }
        get loop() {
          return this._loop.get(this.now());
        }
        set loop(t) {
          this._loop.set(t, this.now());
        }
        setLoopPoints(t, e) {
          return (this.loopStart = t), (this.loopEnd = e), this;
        }
        get swing() {
          return this._swingAmount;
        }
        set swing(t) {
          this._swingAmount = t;
        }
        get swingSubdivision() {
          return new Lt(this.context, this._swingTicks).toNotation();
        }
        set swingSubdivision(t) {
          this._swingTicks = this.toTicks(t);
        }
        get position() {
          const t = this.now(),
            e = this._clock.getTicksAtTime(t);
          return new Lt(this.context, e).toBarsBeatsSixteenths();
        }
        set position(t) {
          const e = this.toTicks(t);
          this.ticks = e;
        }
        get seconds() {
          return this._clock.seconds;
        }
        set seconds(t) {
          const e = this.now(),
            n = this._clock.frequency.timeToTicks(t, e);
          this.ticks = n;
        }
        get progress() {
          if (this.loop) {
            const t = this.now();
            return (
              (this._clock.getTicksAtTime(t) - this._loopStart) /
              (this._loopEnd - this._loopStart)
            );
          }
          return 0;
        }
        get ticks() {
          return this._clock.ticks;
        }
        set ticks(t) {
          if (this._clock.ticks !== t) {
            const e = this.now();
            if ("started" === this.state) {
              const n = this._clock.getTicksAtTime(e),
                s = this._clock.getTimeOfTick(Math.ceil(n));
              this.emit("stop", s),
                this._clock.setTicksAtTime(t, s),
                this.emit("start", s, this._clock.getSecondsAtTime(s));
            } else this._clock.setTicksAtTime(t, e);
          }
        }
        getTicksAtTime(t) {
          return Math.round(this._clock.getTicksAtTime(t));
        }
        getSecondsAtTime(t) {
          return this._clock.getSecondsAtTime(t);
        }
        get PPQ() {
          return this._clock.frequency.multiplier;
        }
        set PPQ(t) {
          this._clock.frequency.multiplier = t;
        }
        nextSubdivision(t) {
          if (((t = this.toTicks(t)), "started" !== this.state)) return 0;
          {
            const e = this.now(),
              n = t - (this.getTicksAtTime(e) % t);
            return this._clock.nextTickTime(n, e);
          }
        }
        syncSignal(t, e) {
          if (!e) {
            const n = this.now();
            if (0 !== t.getValueAtTime(n)) {
              const s = 1 / (60 / this.bpm.getValueAtTime(n) / this.PPQ);
              e = t.getValueAtTime(n) / s;
            } else e = 0;
          }
          const n = new Mt(e);
          return (
            this.bpm.connect(n),
            n.connect(t._param),
            this._syncedSignals.push({
              initial: t.value,
              ratio: n,
              signal: t,
            }),
            (t.value = 0),
            this
          );
        }
        unsyncSignal(t) {
          for (let e = this._syncedSignals.length - 1; e >= 0; e--) {
            const n = this._syncedSignals[e];
            n.signal === t &&
              (n.ratio.dispose(),
              (n.signal.value = n.initial),
              this._syncedSignals.splice(e, 1));
          }
          return this;
        }
        dispose() {
          return (
            super.dispose(),
            this._clock.dispose(),
            J(this, "bpm"),
            this._timeline.dispose(),
            this._repeatedEvents.dispose(),
            this
          );
        }
      }
      Z.mixin(Yt),
        G((t) => {
          t.transport = new Yt({
            context: t,
          });
        }),
        Q((t) => {
          t.transport.dispose();
        });
      class Qt extends Ct {
        constructor() {
          super(q(Qt.getDefaults(), arguments, ["delayTime", "maxDelay"])),
            (this.name = "Delay");
          const t = q(Qt.getDefaults(), arguments, ["delayTime", "maxDelay"]),
            e = this.toSeconds(t.maxDelay);
          (this._maxDelay = Math.max(e, this.toSeconds(t.delayTime))),
            (this._delayNode =
              this.input =
              this.output =
                this.context.createDelay(e)),
            (this.delayTime = new St({
              context: this.context,
              param: this._delayNode.delayTime,
              units: "time",
              value: t.delayTime,
              minValue: 0,
              maxValue: this.maxDelay,
            })),
            $(this, "delayTime");
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            delayTime: 0,
            maxDelay: 1,
          });
        }
        get maxDelay() {
          return this._maxDelay;
        }
        dispose() {
          return (
            super.dispose(),
            this._delayNode.disconnect(),
            this.delayTime.dispose(),
            this
          );
        }
      }
      class Zt extends Ct {
        constructor() {
          super(q(Zt.getDefaults(), arguments, ["volume"])),
            (this.name = "Volume");
          const t = q(Zt.getDefaults(), arguments, ["volume"]);
          (this.input = this.output =
            new Mt({
              context: this.context,
              gain: t.volume,
              units: "decibels",
            })),
            (this.volume = this.output.gain),
            $(this, "volume"),
            (this._unmutedVolume = t.volume),
            (this.mute = t.mute);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            mute: !1,
            volume: 0,
          });
        }
        get mute() {
          return this.volume.value === -1 / 0;
        }
        set mute(t) {
          !this.mute && t
            ? ((this._unmutedVolume = this.volume.value),
              (this.volume.value = -1 / 0))
            : this.mute && !t && (this.volume.value = this._unmutedVolume);
        }
        dispose() {
          return (
            super.dispose(), this.input.dispose(), this.volume.dispose(), this
          );
        }
      }
      class Xt extends Ct {
        constructor() {
          super(q(Xt.getDefaults(), arguments)),
            (this.name = "Destination"),
            (this.input = new Zt({
              context: this.context,
            })),
            (this.output = new Mt({
              context: this.context,
            })),
            (this.volume = this.input.volume);
          const t = q(Xt.getDefaults(), arguments);
          kt(this.input, this.output, this.context.rawContext.destination),
            (this.mute = t.mute),
            (this._internalChannels = [
              this.input,
              this.context.rawContext.destination,
              this.output,
            ]);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            mute: !1,
            volume: 0,
          });
        }
        get mute() {
          return this.input.mute;
        }
        set mute(t) {
          this.input.mute = t;
        }
        chain(...t) {
          return (
            this.input.disconnect(),
            t.unshift(this.input),
            t.push(this.output),
            kt(...t),
            this
          );
        }
        get maxChannelCount() {
          return this.context.rawContext.destination.maxChannelCount;
        }
        dispose() {
          return super.dispose(), this.volume.dispose(), this;
        }
      }
      function Ht(t, e, n = 2, s = it().sampleRate) {
        return S(this, void 0, void 0, function* () {
          const i = it(),
            o = new et(n, e, s);
          ot(o), yield t(o);
          const r = o.render();
          ot(i);
          const a = yield r;
          return new tt(a);
        });
      }
      G((t) => {
        t.destination = new Xt({
          context: t,
        });
      }),
        Q((t) => {
          t.destination.dispose();
        });
      class $t extends V {
        constructor() {
          super(),
            (this.name = "ToneAudioBuffers"),
            (this._buffers = new Map()),
            (this._loadingCount = 0);
          const t = q(
            $t.getDefaults(),
            arguments,
            ["urls", "onload", "baseUrl"],
            "urls"
          );
          (this.baseUrl = t.baseUrl),
            Object.keys(t.urls).forEach((e) => {
              this._loadingCount++;
              const n = t.urls[e];
              this.add(
                e,
                n,
                this._bufferLoaded.bind(this, t.onload),
                t.onerror
              );
            });
        }
        static getDefaults() {
          return {
            baseUrl: "",
            onerror: K,
            onload: K,
            urls: {},
          };
        }
        has(t) {
          return this._buffers.has(t.toString());
        }
        get(t) {
          return (
            r(this.has(t), "ToneAudioBuffers has no buffer named: " + t),
            this._buffers.get(t.toString())
          );
        }
        _bufferLoaded(t) {
          this._loadingCount--, 0 === this._loadingCount && t && t();
        }
        get loaded() {
          return Array.from(this._buffers).every(([t, e]) => e.loaded);
        }
        add(t, e, n = K, s = K) {
          return (
            b(e)
              ? this._buffers.set(t.toString(), new tt(this.baseUrl + e, n, s))
              : this._buffers.set(t.toString(), new tt(e, n, s)),
            this
          );
        }
        dispose() {
          return (
            super.dispose(),
            this._buffers.forEach((t) => t.dispose()),
            this._buffers.clear(),
            this
          );
        }
      }
      class Jt extends gt {
        constructor() {
          super(...arguments),
            (this.name = "MidiClass"),
            (this.defaultUnits = "midi");
        }
        _frequencyToUnits(t) {
          return lt(super._frequencyToUnits(t));
        }
        _ticksToUnits(t) {
          return lt(super._ticksToUnits(t));
        }
        _beatsToUnits(t) {
          return lt(super._beatsToUnits(t));
        }
        _secondsToUnits(t) {
          return lt(super._secondsToUnits(t));
        }
        toMidi() {
          return this.valueOf();
        }
        toFrequency() {
          return pt(this.toMidi());
        }
        transpose(t) {
          return new Jt(this.context, this.toMidi() + t);
        }
      }
      function Kt(t, e) {
        return new Jt(it(), t, e);
      }
      class te extends Tt {
        constructor() {
          super(...arguments),
            (this.name = "Draw"),
            (this.expiration = 0.25),
            (this.anticipation = 0.008),
            (this._events = new W()),
            (this._boundDrawLoop = this._drawLoop.bind(this)),
            (this._animationFrame = -1);
        }
        schedule(t, e) {
          return (
            this._events.add({
              callback: t,
              time: this.toSeconds(e),
            }),
            1 === this._events.length &&
              (this._animationFrame = requestAnimationFrame(
                this._boundDrawLoop
              )),
            this
          );
        }
        cancel(t) {
          return this._events.cancel(this.toSeconds(t)), this;
        }
        _drawLoop() {
          const t = this.context.currentTime;
          for (
            ;
            this._events.length &&
            this._events.peek().time - this.anticipation <= t;

          ) {
            const e = this._events.shift();
            e && t - e.time <= this.expiration && e.callback();
          }
          this._events.length > 0 &&
            (this._animationFrame = requestAnimationFrame(this._boundDrawLoop));
        }
        dispose() {
          return (
            super.dispose(),
            this._events.dispose(),
            cancelAnimationFrame(this._animationFrame),
            this
          );
        }
      }
      G((t) => {
        t.draw = new te({
          context: t,
        });
      }),
        Q((t) => {
          t.draw.dispose();
        });
      var ee = n(515);
      class ne extends Ct {
        constructor(t) {
          super(t),
            (this.input = void 0),
            (this._state = new Ot("stopped")),
            (this._synced = !1),
            (this._scheduled = []),
            (this._syncedStart = K),
            (this._syncedStop = K),
            (this._state.memory = 100),
            (this._state.increasing = !0),
            (this._volume = this.output =
              new Zt({
                context: this.context,
                mute: t.mute,
                volume: t.volume,
              })),
            (this.volume = this._volume.volume),
            $(this, "volume"),
            (this.onstop = t.onstop);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            mute: !1,
            onstop: K,
            volume: 0,
          });
        }
        get state() {
          return this._synced
            ? "started" === this.context.transport.state
              ? this._state.getValueAtTime(this.context.transport.seconds)
              : "stopped"
            : this._state.getValueAtTime(this.now());
        }
        get mute() {
          return this._volume.mute;
        }
        set mute(t) {
          this._volume.mute = t;
        }
        _clampToCurrentTime(t) {
          return this._synced ? t : Math.max(t, this.context.currentTime);
        }
        start(t, e, n) {
          let s =
            p(t) && this._synced
              ? this.context.transport.seconds
              : this.toSeconds(t);
          if (
            ((s = this._clampToCurrentTime(s)),
            this._synced || "started" !== this._state.getValueAtTime(s))
          )
            if (
              (this.log("start", s),
              this._state.setStateAtTime("started", s),
              this._synced)
            ) {
              const t = this._state.get(s);
              t &&
                ((t.offset = this.toSeconds(I(e, 0))),
                (t.duration = n ? this.toSeconds(n) : void 0));
              const i = this.context.transport.schedule((t) => {
                this._start(t, e, n);
              }, s);
              this._scheduled.push(i),
                "started" === this.context.transport.state &&
                  this.context.transport.getSecondsAtTime(this.immediate()) >
                    s &&
                  this._syncedStart(this.now(), this.context.transport.seconds);
            } else c(this.context), this._start(s, e, n);
          else
            r(
              N(s, this._state.get(s).time),
              "Start time must be strictly greater than previous start time"
            ),
              this._state.cancel(s),
              this._state.setStateAtTime("started", s),
              this.log("restart", s),
              this.restart(s, e, n);
          return this;
        }
        stop(t) {
          let e =
            p(t) && this._synced
              ? this.context.transport.seconds
              : this.toSeconds(t);
          if (
            ((e = this._clampToCurrentTime(e)),
            "started" === this._state.getValueAtTime(e) ||
              f(this._state.getNextState("started", e)))
          ) {
            if ((this.log("stop", e), this._synced)) {
              const t = this.context.transport.schedule(
                this._stop.bind(this),
                e
              );
              this._scheduled.push(t);
            } else this._stop(e);
            this._state.cancel(e), this._state.setStateAtTime("stopped", e);
          }
          return this;
        }
        restart(t, e, n) {
          return (
            (t = this.toSeconds(t)),
            "started" === this._state.getValueAtTime(t) &&
              (this._state.cancel(t), this._restart(t, e, n)),
            this
          );
        }
        sync() {
          return (
            this._synced ||
              ((this._synced = !0),
              (this._syncedStart = (t, e) => {
                if (e > 0) {
                  const n = this._state.get(e);
                  if (n && "started" === n.state && n.time !== e) {
                    const s = e - this.toSeconds(n.time);
                    let i;
                    n.duration && (i = this.toSeconds(n.duration) - s),
                      this._start(t, this.toSeconds(n.offset) + s, i);
                  }
                }
              }),
              (this._syncedStop = (t) => {
                const e = this.context.transport.getSecondsAtTime(
                  Math.max(t - this.sampleTime, 0)
                );
                "started" === this._state.getValueAtTime(e) && this._stop(t);
              }),
              this.context.transport.on("start", this._syncedStart),
              this.context.transport.on("loopStart", this._syncedStart),
              this.context.transport.on("stop", this._syncedStop),
              this.context.transport.on("pause", this._syncedStop),
              this.context.transport.on("loopEnd", this._syncedStop)),
            this
          );
        }
        unsync() {
          return (
            this._synced &&
              (this.context.transport.off("stop", this._syncedStop),
              this.context.transport.off("pause", this._syncedStop),
              this.context.transport.off("loopEnd", this._syncedStop),
              this.context.transport.off("start", this._syncedStart),
              this.context.transport.off("loopStart", this._syncedStart)),
            (this._synced = !1),
            this._scheduled.forEach((t) => this.context.transport.clear(t)),
            (this._scheduled = []),
            this._state.cancel(0),
            this._stop(0),
            this
          );
        }
        dispose() {
          return (
            super.dispose(),
            (this.onstop = K),
            this.unsync(),
            this._volume.dispose(),
            this._state.dispose(),
            this
          );
        }
      }
      class se extends jt {
        constructor() {
          super(q(se.getDefaults(), arguments, ["url", "onload"])),
            (this.name = "ToneBufferSource"),
            (this._source = this.context.createBufferSource()),
            (this._internalChannels = [this._source]),
            (this._sourceStarted = !1),
            (this._sourceStopped = !1);
          const t = q(se.getDefaults(), arguments, ["url", "onload"]);
          At(this._source, this._gainNode),
            (this._source.onended = () => this._stopSource()),
            (this.playbackRate = new St({
              context: this.context,
              param: this._source.playbackRate,
              units: "positive",
              value: t.playbackRate,
            })),
            (this.loop = t.loop),
            (this.loopStart = t.loopStart),
            (this.loopEnd = t.loopEnd),
            (this._buffer = new tt(t.url, t.onload, t.onerror)),
            this._internalChannels.push(this._source);
        }
        static getDefaults() {
          return Object.assign(jt.getDefaults(), {
            url: new tt(),
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            onload: K,
            onerror: K,
            playbackRate: 1,
          });
        }
        get fadeIn() {
          return this._fadeIn;
        }
        set fadeIn(t) {
          this._fadeIn = t;
        }
        get fadeOut() {
          return this._fadeOut;
        }
        set fadeOut(t) {
          this._fadeOut = t;
        }
        get curve() {
          return this._curve;
        }
        set curve(t) {
          this._curve = t;
        }
        start(t, e, n, s = 1) {
          r(this.buffer.loaded, "buffer is either not set or not loaded");
          const i = this.toSeconds(t);
          this._startGain(i, s),
            (e = this.loop ? I(e, this.loopStart) : I(e, 0));
          let o = Math.max(this.toSeconds(e), 0);
          if (this.loop) {
            const t = this.toSeconds(this.loopEnd) || this.buffer.duration,
              e = this.toSeconds(this.loopStart),
              n = t - e;
            P(o, t) && (o = ((o - e) % n) + e),
              z(o, this.buffer.duration) && (o = 0);
          }
          if (
            ((this._source.buffer = this.buffer.get()),
            (this._source.loopEnd =
              this.toSeconds(this.loopEnd) || this.buffer.duration),
            L(o, this.buffer.duration) &&
              ((this._sourceStarted = !0), this._source.start(i, o)),
            f(n))
          ) {
            let t = this.toSeconds(n);
            (t = Math.max(t, 0)), this.stop(i + t);
          }
          return this;
        }
        _stopSource(t) {
          !this._sourceStopped &&
            this._sourceStarted &&
            ((this._sourceStopped = !0),
            this._source.stop(this.toSeconds(t)),
            this._onended());
        }
        get loopStart() {
          return this._source.loopStart;
        }
        set loopStart(t) {
          this._source.loopStart = this.toSeconds(t);
        }
        get loopEnd() {
          return this._source.loopEnd;
        }
        set loopEnd(t) {
          this._source.loopEnd = this.toSeconds(t);
        }
        get buffer() {
          return this._buffer;
        }
        set buffer(t) {
          this._buffer.set(t);
        }
        get loop() {
          return this._source.loop;
        }
        set loop(t) {
          (this._source.loop = t), this._sourceStarted && this.cancelStop();
        }
        dispose() {
          return (
            super.dispose(),
            (this._source.onended = null),
            this._source.disconnect(),
            this._buffer.dispose(),
            this.playbackRate.dispose(),
            this
          );
        }
      }
      class ie extends ne {
        constructor() {
          super(q(ie.getDefaults(), arguments, ["type"])),
            (this.name = "Noise"),
            (this._source = null);
          const t = q(ie.getDefaults(), arguments, ["type"]);
          (this._playbackRate = t.playbackRate),
            (this.type = t.type),
            (this._fadeIn = t.fadeIn),
            (this._fadeOut = t.fadeOut);
        }
        static getDefaults() {
          return Object.assign(ne.getDefaults(), {
            fadeIn: 0,
            fadeOut: 0,
            playbackRate: 1,
            type: "white",
          });
        }
        get type() {
          return this._type;
        }
        set type(t) {
          if (
            (r(t in re, "Noise: invalid type: " + t),
            this._type !== t && ((this._type = t), "started" === this.state))
          ) {
            const t = this.now();
            this._stop(t), this._start(t);
          }
        }
        get playbackRate() {
          return this._playbackRate;
        }
        set playbackRate(t) {
          (this._playbackRate = t),
            this._source && (this._source.playbackRate.value = t);
        }
        _start(t) {
          const e = re[this._type];
          (this._source = new se({
            url: e,
            context: this.context,
            fadeIn: this._fadeIn,
            fadeOut: this._fadeOut,
            loop: !0,
            onended: () => this.onstop(this),
            playbackRate: this._playbackRate,
          }).connect(this.output)),
            this._source.start(
              this.toSeconds(t),
              Math.random() * (e.duration - 0.001)
            );
        }
        _stop(t) {
          this._source &&
            (this._source.stop(this.toSeconds(t)), (this._source = null));
        }
        get fadeIn() {
          return this._fadeIn;
        }
        set fadeIn(t) {
          (this._fadeIn = t),
            this._source && (this._source.fadeIn = this._fadeIn);
        }
        get fadeOut() {
          return this._fadeOut;
        }
        set fadeOut(t) {
          (this._fadeOut = t),
            this._source && (this._source.fadeOut = this._fadeOut);
        }
        _restart(t) {
          this._stop(t), this._start(t);
        }
        dispose() {
          return (
            super.dispose(), this._source && this._source.disconnect(), this
          );
        }
      }
      const oe = {
          brown: null,
          pink: null,
          white: null,
        },
        re = {
          get brown() {
            if (!oe.brown) {
              const t = [];
              for (let e = 0; e < 2; e++) {
                const n = new Float32Array(220500);
                t[e] = n;
                let s = 0;
                for (let t = 0; t < 220500; t++) {
                  const e = 2 * Math.random() - 1;
                  (n[t] = (s + 0.02 * e) / 1.02), (s = n[t]), (n[t] *= 3.5);
                }
              }
              oe.brown = new tt().fromArray(t);
            }
            return oe.brown;
          },
          get pink() {
            if (!oe.pink) {
              const t = [];
              for (let e = 0; e < 2; e++) {
                const n = new Float32Array(220500);
                let s, i, o, r, a, c, u;
                (t[e] = n), (s = i = o = r = a = c = u = 0);
                for (let t = 0; t < 220500; t++) {
                  const e = 2 * Math.random() - 1;
                  (s = 0.99886 * s + 0.0555179 * e),
                    (i = 0.99332 * i + 0.0750759 * e),
                    (o = 0.969 * o + 0.153852 * e),
                    (r = 0.8665 * r + 0.3104856 * e),
                    (a = 0.55 * a + 0.5329522 * e),
                    (c = -0.7616 * c - 0.016898 * e),
                    (n[t] = s + i + o + r + a + c + u + 0.5362 * e),
                    (n[t] *= 0.11),
                    (u = 0.115926 * e);
                }
              }
              oe.pink = new tt().fromArray(t);
            }
            return oe.pink;
          },
          get white() {
            if (!oe.white) {
              const t = [];
              for (let e = 0; e < 2; e++) {
                const n = new Float32Array(220500);
                t[e] = n;
                for (let t = 0; t < 220500; t++) n[t] = 2 * Math.random() - 1;
              }
              oe.white = new tt().fromArray(t);
            }
            return oe.white;
          },
        };
      class ae extends Ct {
        constructor() {
          super(q(ae.getDefaults(), arguments, ["volume"])),
            (this.name = "UserMedia");
          const t = q(ae.getDefaults(), arguments, ["volume"]);
          (this._volume = this.output =
            new Zt({
              context: this.context,
              volume: t.volume,
            })),
            (this.volume = this._volume.volume),
            $(this, "volume"),
            (this.mute = t.mute);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            mute: !1,
            volume: 0,
          });
        }
        open(t) {
          return S(this, void 0, void 0, function* () {
            r(ae.supported, "UserMedia is not supported"),
              "started" === this.state && this.close();
            const e = yield ae.enumerateDevices();
            m(t)
              ? (this._device = e[t])
              : ((this._device = e.find(
                  (e) => e.label === t || e.deviceId === t
                )),
                !this._device && e.length > 0 && (this._device = e[0]),
                r(f(this._device), "No matching device " + t));
            const n = {
              audio: {
                echoCancellation: !1,
                sampleRate: this.context.sampleRate,
                noiseSuppression: !1,
                mozNoiseSuppression: !1,
              },
            };
            this._device && (n.audio.deviceId = this._device.deviceId);
            const s = yield navigator.mediaDevices.getUserMedia(n);
            if (!this._stream) {
              this._stream = s;
              const t = this.context.createMediaStreamSource(s);
              At(t, this.output), (this._mediaStream = t);
            }
            return this;
          });
        }
        close() {
          return (
            this._stream &&
              this._mediaStream &&
              (this._stream.getAudioTracks().forEach((t) => {
                t.stop();
              }),
              (this._stream = void 0),
              this._mediaStream.disconnect(),
              (this._mediaStream = void 0)),
            (this._device = void 0),
            this
          );
        }
        static enumerateDevices() {
          return S(this, void 0, void 0, function* () {
            return (yield navigator.mediaDevices.enumerateDevices()).filter(
              (t) => "audioinput" === t.kind
            );
          });
        }
        get state() {
          return this._stream && this._stream.active ? "started" : "stopped";
        }
        get deviceId() {
          return this._device ? this._device.deviceId : void 0;
        }
        get groupId() {
          return this._device ? this._device.groupId : void 0;
        }
        get label() {
          return this._device ? this._device.label : void 0;
        }
        get mute() {
          return this._volume.mute;
        }
        set mute(t) {
          this._volume.mute = t;
        }
        dispose() {
          return (
            super.dispose(),
            this.close(),
            this._volume.dispose(),
            this.volume.dispose(),
            this
          );
        }
        static get supported() {
          return (
            f(navigator.mediaDevices) && f(navigator.mediaDevices.getUserMedia)
          );
        }
      }
      function ce(t, e) {
        return S(this, void 0, void 0, function* () {
          const n = e / t.context.sampleRate,
            s = new et(1, n, t.context.sampleRate);
          return (
            new t.constructor(
              Object.assign(t.get(), {
                frequency: 2 / n,
                detune: 0,
                context: s,
              })
            )
              .toDestination()
              .start(0),
            (yield s.render()).getChannelData(0)
          );
        });
      }
      class ue extends jt {
        constructor() {
          super(q(ue.getDefaults(), arguments, ["frequency", "type"])),
            (this.name = "ToneOscillatorNode"),
            (this._oscillator = this.context.createOscillator()),
            (this._internalChannels = [this._oscillator]);
          const t = q(ue.getDefaults(), arguments, ["frequency", "type"]);
          At(this._oscillator, this._gainNode),
            (this.type = t.type),
            (this.frequency = new St({
              context: this.context,
              param: this._oscillator.frequency,
              units: "frequency",
              value: t.frequency,
            })),
            (this.detune = new St({
              context: this.context,
              param: this._oscillator.detune,
              units: "cents",
              value: t.detune,
            })),
            $(this, ["frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(jt.getDefaults(), {
            detune: 0,
            frequency: 440,
            type: "sine",
          });
        }
        start(t) {
          const e = this.toSeconds(t);
          return (
            this.log("start", e),
            this._startGain(e),
            this._oscillator.start(e),
            this
          );
        }
        _stopSource(t) {
          this._oscillator.stop(t);
        }
        setPeriodicWave(t) {
          return this._oscillator.setPeriodicWave(t), this;
        }
        get type() {
          return this._oscillator.type;
        }
        set type(t) {
          this._oscillator.type = t;
        }
        dispose() {
          return (
            super.dispose(),
            "started" === this.state && this.stop(),
            this._oscillator.disconnect(),
            this.frequency.dispose(),
            this.detune.dispose(),
            this
          );
        }
      }
      class he extends ne {
        constructor() {
          super(q(he.getDefaults(), arguments, ["frequency", "type"])),
            (this.name = "Oscillator"),
            (this._oscillator = null);
          const t = q(he.getDefaults(), arguments, ["frequency", "type"]);
          (this.frequency = new Rt({
            context: this.context,
            units: "frequency",
            value: t.frequency,
          })),
            $(this, "frequency"),
            (this.detune = new Rt({
              context: this.context,
              units: "cents",
              value: t.detune,
            })),
            $(this, "detune"),
            (this._partials = t.partials),
            (this._partialCount = t.partialCount),
            (this._type = t.type),
            t.partialCount &&
              "custom" !== t.type &&
              (this._type = this.baseType + t.partialCount.toString()),
            (this.phase = t.phase);
        }
        static getDefaults() {
          return Object.assign(ne.getDefaults(), {
            detune: 0,
            frequency: 440,
            partialCount: 0,
            partials: [],
            phase: 0,
            type: "sine",
          });
        }
        _start(t) {
          const e = this.toSeconds(t),
            n = new ue({
              context: this.context,
              onended: () => this.onstop(this),
            });
          (this._oscillator = n),
            this._wave
              ? this._oscillator.setPeriodicWave(this._wave)
              : (this._oscillator.type = this._type),
            this._oscillator.connect(this.output),
            this.frequency.connect(this._oscillator.frequency),
            this.detune.connect(this._oscillator.detune),
            this._oscillator.start(e);
        }
        _stop(t) {
          const e = this.toSeconds(t);
          this._oscillator && this._oscillator.stop(e);
        }
        _restart(t) {
          const e = this.toSeconds(t);
          return (
            this.log("restart", e),
            this._oscillator && this._oscillator.cancelStop(),
            this._state.cancel(e),
            this
          );
        }
        syncFrequency() {
          return this.context.transport.syncSignal(this.frequency), this;
        }
        unsyncFrequency() {
          return this.context.transport.unsyncSignal(this.frequency), this;
        }
        _getCachedPeriodicWave() {
          if ("custom" === this._type) {
            return he._periodicWaveCache.find((t) => {
              return (
                t.phase === this._phase &&
                ((e = t.partials),
                (n = this._partials),
                e.length === n.length && e.every((t, e) => n[e] === t))
              );
              var e, n;
            });
          }
          {
            const t = he._periodicWaveCache.find(
              (t) => t.type === this._type && t.phase === this._phase
            );
            return (
              (this._partialCount = t ? t.partialCount : this._partialCount), t
            );
          }
        }
        get type() {
          return this._type;
        }
        set type(t) {
          this._type = t;
          const e =
            -1 !== ["sine", "square", "sawtooth", "triangle"].indexOf(t);
          if (0 === this._phase && e)
            (this._wave = void 0),
              (this._partialCount = 0),
              null !== this._oscillator && (this._oscillator.type = t);
          else {
            const e = this._getCachedPeriodicWave();
            if (f(e)) {
              const { partials: t, wave: n } = e;
              (this._wave = n),
                (this._partials = t),
                null !== this._oscillator &&
                  this._oscillator.setPeriodicWave(this._wave);
            } else {
              const [e, n] = this._getRealImaginary(t, this._phase),
                s = this.context.createPeriodicWave(e, n);
              (this._wave = s),
                null !== this._oscillator &&
                  this._oscillator.setPeriodicWave(this._wave),
                he._periodicWaveCache.push({
                  imag: n,
                  partialCount: this._partialCount,
                  partials: this._partials,
                  phase: this._phase,
                  real: e,
                  type: this._type,
                  wave: this._wave,
                }),
                he._periodicWaveCache.length > 100 &&
                  he._periodicWaveCache.shift();
            }
          }
        }
        get baseType() {
          return this._type.replace(this.partialCount.toString(), "");
        }
        set baseType(t) {
          this.partialCount && "custom" !== this._type && "custom" !== t
            ? (this.type = t + this.partialCount)
            : (this.type = t);
        }
        get partialCount() {
          return this._partialCount;
        }
        set partialCount(t) {
          a(t, 0);
          let e = this._type;
          const n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
          if ((n && (e = n[1]), "custom" !== this._type))
            this.type = 0 === t ? e : e + t.toString();
          else {
            const e = new Float32Array(t);
            this._partials.forEach((t, n) => (e[n] = t)),
              (this._partials = Array.from(e)),
              (this.type = this._type);
          }
        }
        _getRealImaginary(t, e) {
          let n = 2048;
          const s = new Float32Array(n),
            i = new Float32Array(n);
          let o = 1;
          if ("custom" === t) {
            if (
              ((o = this._partials.length + 1),
              (this._partialCount = this._partials.length),
              (n = o),
              0 === this._partials.length)
            )
              return [s, i];
          } else {
            const e = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);
            e
              ? ((o = parseInt(e[2], 10) + 1),
                (this._partialCount = parseInt(e[2], 10)),
                (t = e[1]),
                (o = Math.max(o, 2)),
                (n = o))
              : (this._partialCount = 0),
              (this._partials = []);
          }
          for (let r = 1; r < n; ++r) {
            const n = 2 / (r * Math.PI);
            let a;
            switch (t) {
              case "sine":
                (a = r <= o ? 1 : 0), (this._partials[r - 1] = a);
                break;
              case "square":
                (a = 1 & r ? 2 * n : 0), (this._partials[r - 1] = a);
                break;
              case "sawtooth":
                (a = n * (1 & r ? 1 : -1)), (this._partials[r - 1] = a);
                break;
              case "triangle":
                (a = 1 & r ? n * n * 2 * (((r - 1) >> 1) & 1 ? -1 : 1) : 0),
                  (this._partials[r - 1] = a);
                break;
              case "custom":
                a = this._partials[r - 1];
                break;
              default:
                throw new TypeError("Oscillator: invalid type: " + t);
            }
            0 !== a
              ? ((s[r] = -a * Math.sin(e * r)), (i[r] = a * Math.cos(e * r)))
              : ((s[r] = 0), (i[r] = 0));
          }
          return [s, i];
        }
        _inverseFFT(t, e, n) {
          let s = 0;
          const i = t.length;
          for (let o = 0; o < i; o++)
            s += t[o] * Math.cos(o * n) + e[o] * Math.sin(o * n);
          return s;
        }
        getInitialValue() {
          const [t, e] = this._getRealImaginary(this._type, 0);
          let n = 0;
          const s = 2 * Math.PI;
          for (let i = 0; i < 32; i++)
            n = Math.max(this._inverseFFT(t, e, (i / 32) * s), n);
          return B(-this._inverseFFT(t, e, this._phase) / n, -1, 1);
        }
        get partials() {
          return this._partials.slice(0, this.partialCount);
        }
        set partials(t) {
          (this._partials = t),
            (this._partialCount = this._partials.length),
            t.length && (this.type = "custom");
        }
        get phase() {
          return this._phase * (180 / Math.PI);
        }
        set phase(t) {
          (this._phase = (t * Math.PI) / 180), (this.type = this._type);
        }
        asArray(t = 1024) {
          return S(this, void 0, void 0, function* () {
            return ce(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            null !== this._oscillator && this._oscillator.dispose(),
            (this._wave = void 0),
            this.frequency.dispose(),
            this.detune.dispose(),
            this
          );
        }
      }
      he._periodicWaveCache = [];
      class le extends Ct {
        constructor() {
          super(Object.assign(q(le.getDefaults(), arguments, ["context"])));
        }
        connect(t, e = 0, n = 0) {
          return qt(this, t, e, n), this;
        }
      }
      class de extends le {
        constructor() {
          super(
            Object.assign(q(de.getDefaults(), arguments, ["mapping", "length"]))
          ),
            (this.name = "WaveShaper"),
            (this._shaper = this.context.createWaveShaper()),
            (this.input = this._shaper),
            (this.output = this._shaper);
          const t = q(de.getDefaults(), arguments, ["mapping", "length"]);
          y(t.mapping) || t.mapping instanceof Float32Array
            ? (this.curve = Float32Array.from(t.mapping))
            : _(t.mapping) && this.setMap(t.mapping, t.length);
        }
        static getDefaults() {
          return Object.assign(Rt.getDefaults(), {
            length: 1024,
          });
        }
        setMap(t, e = 1024) {
          const n = new Float32Array(e);
          for (let s = 0, i = e; s < i; s++) {
            const e = (s / (i - 1)) * 2 - 1;
            n[s] = t(e, s);
          }
          return (this.curve = n), this;
        }
        get curve() {
          return this._shaper.curve;
        }
        set curve(t) {
          this._shaper.curve = t;
        }
        get oversample() {
          return this._shaper.oversample;
        }
        set oversample(t) {
          r(
            ["none", "2x", "4x"].some((e) => e.includes(t)),
            "oversampling must be either 'none', '2x', or '4x'"
          ),
            (this._shaper.oversample = t);
        }
        dispose() {
          return super.dispose(), this._shaper.disconnect(), this;
        }
      }
      class pe extends le {
        constructor() {
          super(...arguments),
            (this.name = "AudioToGain"),
            (this._norm = new de({
              context: this.context,
              mapping: (t) => (t + 1) / 2,
            })),
            (this.input = this._norm),
            (this.output = this._norm);
        }
        dispose() {
          return super.dispose(), this._norm.dispose(), this;
        }
      }
      class fe extends Rt {
        constructor() {
          super(Object.assign(q(fe.getDefaults(), arguments, ["value"]))),
            (this.name = "Multiply"),
            (this.override = !1);
          const t = q(fe.getDefaults(), arguments, ["value"]);
          (this._mult =
            this.input =
            this.output =
              new Mt({
                context: this.context,
                minValue: t.minValue,
                maxValue: t.maxValue,
              })),
            (this.factor = this._param = this._mult.gain),
            this.factor.setValueAtTime(t.value, 0);
        }
        static getDefaults() {
          return Object.assign(Rt.getDefaults(), {
            value: 0,
          });
        }
        dispose() {
          return super.dispose(), this._mult.dispose(), this;
        }
      }
      class _e extends ne {
        constructor() {
          super(
            q(_e.getDefaults(), arguments, [
              "frequency",
              "type",
              "modulationType",
            ])
          ),
            (this.name = "AMOscillator"),
            (this._modulationScale = new pe({
              context: this.context,
            })),
            (this._modulationNode = new Mt({
              context: this.context,
            }));
          const t = q(_e.getDefaults(), arguments, [
            "frequency",
            "type",
            "modulationType",
          ]);
          (this._carrier = new he({
            context: this.context,
            detune: t.detune,
            frequency: t.frequency,
            onstop: () => this.onstop(this),
            phase: t.phase,
            type: t.type,
          })),
            (this.frequency = this._carrier.frequency),
            (this.detune = this._carrier.detune),
            (this._modulator = new he({
              context: this.context,
              phase: t.phase,
              type: t.modulationType,
            })),
            (this.harmonicity = new fe({
              context: this.context,
              units: "positive",
              value: t.harmonicity,
            })),
            this.frequency.chain(this.harmonicity, this._modulator.frequency),
            this._modulator.chain(
              this._modulationScale,
              this._modulationNode.gain
            ),
            this._carrier.chain(this._modulationNode, this.output),
            $(this, ["frequency", "detune", "harmonicity"]);
        }
        static getDefaults() {
          return Object.assign(he.getDefaults(), {
            harmonicity: 1,
            modulationType: "square",
          });
        }
        _start(t) {
          this._modulator.start(t), this._carrier.start(t);
        }
        _stop(t) {
          this._modulator.stop(t), this._carrier.stop(t);
        }
        _restart(t) {
          this._modulator.restart(t), this._carrier.restart(t);
        }
        get type() {
          return this._carrier.type;
        }
        set type(t) {
          this._carrier.type = t;
        }
        get baseType() {
          return this._carrier.baseType;
        }
        set baseType(t) {
          this._carrier.baseType = t;
        }
        get partialCount() {
          return this._carrier.partialCount;
        }
        set partialCount(t) {
          this._carrier.partialCount = t;
        }
        get modulationType() {
          return this._modulator.type;
        }
        set modulationType(t) {
          this._modulator.type = t;
        }
        get phase() {
          return this._carrier.phase;
        }
        set phase(t) {
          (this._carrier.phase = t), (this._modulator.phase = t);
        }
        get partials() {
          return this._carrier.partials;
        }
        set partials(t) {
          this._carrier.partials = t;
        }
        asArray(t = 1024) {
          return S(this, void 0, void 0, function* () {
            return ce(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.frequency.dispose(),
            this.detune.dispose(),
            this.harmonicity.dispose(),
            this._carrier.dispose(),
            this._modulator.dispose(),
            this._modulationNode.dispose(),
            this._modulationScale.dispose(),
            this
          );
        }
      }
      class me extends ne {
        constructor() {
          super(
            q(me.getDefaults(), arguments, [
              "frequency",
              "type",
              "modulationType",
            ])
          ),
            (this.name = "FMOscillator"),
            (this._modulationNode = new Mt({
              context: this.context,
              gain: 0,
            }));
          const t = q(me.getDefaults(), arguments, [
            "frequency",
            "type",
            "modulationType",
          ]);
          (this._carrier = new he({
            context: this.context,
            detune: t.detune,
            frequency: 0,
            onstop: () => this.onstop(this),
            phase: t.phase,
            type: t.type,
          })),
            (this.detune = this._carrier.detune),
            (this.frequency = new Rt({
              context: this.context,
              units: "frequency",
              value: t.frequency,
            })),
            (this._modulator = new he({
              context: this.context,
              phase: t.phase,
              type: t.modulationType,
            })),
            (this.harmonicity = new fe({
              context: this.context,
              units: "positive",
              value: t.harmonicity,
            })),
            (this.modulationIndex = new fe({
              context: this.context,
              units: "positive",
              value: t.modulationIndex,
            })),
            this.frequency.connect(this._carrier.frequency),
            this.frequency.chain(this.harmonicity, this._modulator.frequency),
            this.frequency.chain(this.modulationIndex, this._modulationNode),
            this._modulator.connect(this._modulationNode.gain),
            this._modulationNode.connect(this._carrier.frequency),
            this._carrier.connect(this.output),
            this.detune.connect(this._modulator.detune),
            $(this, ["modulationIndex", "frequency", "detune", "harmonicity"]);
        }
        static getDefaults() {
          return Object.assign(he.getDefaults(), {
            harmonicity: 1,
            modulationIndex: 2,
            modulationType: "square",
          });
        }
        _start(t) {
          this._modulator.start(t), this._carrier.start(t);
        }
        _stop(t) {
          this._modulator.stop(t), this._carrier.stop(t);
        }
        _restart(t) {
          return this._modulator.restart(t), this._carrier.restart(t), this;
        }
        get type() {
          return this._carrier.type;
        }
        set type(t) {
          this._carrier.type = t;
        }
        get baseType() {
          return this._carrier.baseType;
        }
        set baseType(t) {
          this._carrier.baseType = t;
        }
        get partialCount() {
          return this._carrier.partialCount;
        }
        set partialCount(t) {
          this._carrier.partialCount = t;
        }
        get modulationType() {
          return this._modulator.type;
        }
        set modulationType(t) {
          this._modulator.type = t;
        }
        get phase() {
          return this._carrier.phase;
        }
        set phase(t) {
          (this._carrier.phase = t), (this._modulator.phase = t);
        }
        get partials() {
          return this._carrier.partials;
        }
        set partials(t) {
          this._carrier.partials = t;
        }
        asArray(t = 1024) {
          return S(this, void 0, void 0, function* () {
            return ce(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.frequency.dispose(),
            this.harmonicity.dispose(),
            this._carrier.dispose(),
            this._modulator.dispose(),
            this._modulationNode.dispose(),
            this.modulationIndex.dispose(),
            this
          );
        }
      }
      class ge extends ne {
        constructor() {
          super(q(ge.getDefaults(), arguments, ["frequency", "width"])),
            (this.name = "PulseOscillator"),
            (this._widthGate = new Mt({
              context: this.context,
              gain: 0,
            })),
            (this._thresh = new de({
              context: this.context,
              mapping: (t) => (t <= 0 ? -1 : 1),
            }));
          const t = q(ge.getDefaults(), arguments, ["frequency", "width"]);
          (this.width = new Rt({
            context: this.context,
            units: "audioRange",
            value: t.width,
          })),
            (this._triangle = new he({
              context: this.context,
              detune: t.detune,
              frequency: t.frequency,
              onstop: () => this.onstop(this),
              phase: t.phase,
              type: "triangle",
            })),
            (this.frequency = this._triangle.frequency),
            (this.detune = this._triangle.detune),
            this._triangle.chain(this._thresh, this.output),
            this.width.chain(this._widthGate, this._thresh),
            $(this, ["width", "frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(ne.getDefaults(), {
            detune: 0,
            frequency: 440,
            phase: 0,
            type: "pulse",
            width: 0.2,
          });
        }
        _start(t) {
          (t = this.toSeconds(t)),
            this._triangle.start(t),
            this._widthGate.gain.setValueAtTime(1, t);
        }
        _stop(t) {
          (t = this.toSeconds(t)),
            this._triangle.stop(t),
            this._widthGate.gain.cancelScheduledValues(t),
            this._widthGate.gain.setValueAtTime(0, t);
        }
        _restart(t) {
          this._triangle.restart(t),
            this._widthGate.gain.cancelScheduledValues(t),
            this._widthGate.gain.setValueAtTime(1, t);
        }
        get phase() {
          return this._triangle.phase;
        }
        set phase(t) {
          this._triangle.phase = t;
        }
        get type() {
          return "pulse";
        }
        get baseType() {
          return "pulse";
        }
        get partials() {
          return [];
        }
        get partialCount() {
          return 0;
        }
        set carrierType(t) {
          this._triangle.type = t;
        }
        asArray(t = 1024) {
          return S(this, void 0, void 0, function* () {
            return ce(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._triangle.dispose(),
            this.width.dispose(),
            this._widthGate.dispose(),
            this._thresh.dispose(),
            this
          );
        }
      }
      class ve extends ne {
        constructor() {
          super(
            q(ve.getDefaults(), arguments, ["frequency", "type", "spread"])
          ),
            (this.name = "FatOscillator"),
            (this._oscillators = []);
          const t = q(ve.getDefaults(), arguments, [
            "frequency",
            "type",
            "spread",
          ]);
          (this.frequency = new Rt({
            context: this.context,
            units: "frequency",
            value: t.frequency,
          })),
            (this.detune = new Rt({
              context: this.context,
              units: "cents",
              value: t.detune,
            })),
            (this._spread = t.spread),
            (this._type = t.type),
            (this._phase = t.phase),
            (this._partials = t.partials),
            (this._partialCount = t.partialCount),
            (this.count = t.count),
            $(this, ["frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(he.getDefaults(), {
            count: 3,
            spread: 20,
            type: "sawtooth",
          });
        }
        _start(t) {
          (t = this.toSeconds(t)), this._forEach((e) => e.start(t));
        }
        _stop(t) {
          (t = this.toSeconds(t)), this._forEach((e) => e.stop(t));
        }
        _restart(t) {
          this._forEach((e) => e.restart(t));
        }
        _forEach(t) {
          for (let e = 0; e < this._oscillators.length; e++)
            t(this._oscillators[e], e);
        }
        get type() {
          return this._type;
        }
        set type(t) {
          (this._type = t), this._forEach((e) => (e.type = t));
        }
        get spread() {
          return this._spread;
        }
        set spread(t) {
          if (((this._spread = t), this._oscillators.length > 1)) {
            const e = -t / 2,
              n = t / (this._oscillators.length - 1);
            this._forEach((t, s) => (t.detune.value = e + n * s));
          }
        }
        get count() {
          return this._oscillators.length;
        }
        set count(t) {
          if ((a(t, 1), this._oscillators.length !== t)) {
            this._forEach((t) => t.dispose()), (this._oscillators = []);
            for (let e = 0; e < t; e++) {
              const n = new he({
                context: this.context,
                volume: -6 - 1.1 * t,
                type: this._type,
                phase: this._phase + (e / t) * 360,
                partialCount: this._partialCount,
                onstop: 0 === e ? () => this.onstop(this) : K,
              });
              "custom" === this.type && (n.partials = this._partials),
                this.frequency.connect(n.frequency),
                this.detune.connect(n.detune),
                (n.detune.overridden = !1),
                n.connect(this.output),
                (this._oscillators[e] = n);
            }
            (this.spread = this._spread),
              "started" === this.state && this._forEach((t) => t.start());
          }
        }
        get phase() {
          return this._phase;
        }
        set phase(t) {
          (this._phase = t), this._forEach((e) => (e.phase = t));
        }
        get baseType() {
          return this._oscillators[0].baseType;
        }
        set baseType(t) {
          this._forEach((e) => (e.baseType = t)),
            (this._type = this._oscillators[0].type);
        }
        get partials() {
          return this._oscillators[0].partials;
        }
        set partials(t) {
          (this._partials = t),
            (this._partialCount = this._partials.length),
            t.length &&
              ((this._type = "custom"), this._forEach((e) => (e.partials = t)));
        }
        get partialCount() {
          return this._oscillators[0].partialCount;
        }
        set partialCount(t) {
          (this._partialCount = t),
            this._forEach((e) => (e.partialCount = t)),
            (this._type = this._oscillators[0].type);
        }
        asArray(t = 1024) {
          return S(this, void 0, void 0, function* () {
            return ce(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.frequency.dispose(),
            this.detune.dispose(),
            this._forEach((t) => t.dispose()),
            this
          );
        }
      }
      class ye extends ne {
        constructor() {
          super(
            q(ye.getDefaults(), arguments, ["frequency", "modulationFrequency"])
          ),
            (this.name = "PWMOscillator"),
            (this.sourceType = "pwm"),
            (this._scale = new fe({
              context: this.context,
              value: 2,
            }));
          const t = q(ye.getDefaults(), arguments, [
            "frequency",
            "modulationFrequency",
          ]);
          (this._pulse = new ge({
            context: this.context,
            frequency: t.modulationFrequency,
          })),
            (this._pulse.carrierType = "sine"),
            (this.modulationFrequency = this._pulse.frequency),
            (this._modulator = new he({
              context: this.context,
              detune: t.detune,
              frequency: t.frequency,
              onstop: () => this.onstop(this),
              phase: t.phase,
            })),
            (this.frequency = this._modulator.frequency),
            (this.detune = this._modulator.detune),
            this._modulator.chain(this._scale, this._pulse.width),
            this._pulse.connect(this.output),
            $(this, ["modulationFrequency", "frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(ne.getDefaults(), {
            detune: 0,
            frequency: 440,
            modulationFrequency: 0.4,
            phase: 0,
            type: "pwm",
          });
        }
        _start(t) {
          (t = this.toSeconds(t)),
            this._modulator.start(t),
            this._pulse.start(t);
        }
        _stop(t) {
          (t = this.toSeconds(t)), this._modulator.stop(t), this._pulse.stop(t);
        }
        _restart(t) {
          this._modulator.restart(t), this._pulse.restart(t);
        }
        get type() {
          return "pwm";
        }
        get baseType() {
          return "pwm";
        }
        get partials() {
          return [];
        }
        get partialCount() {
          return 0;
        }
        get phase() {
          return this._modulator.phase;
        }
        set phase(t) {
          this._modulator.phase = t;
        }
        asArray(t = 1024) {
          return S(this, void 0, void 0, function* () {
            return ce(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._pulse.dispose(),
            this._scale.dispose(),
            this._modulator.dispose(),
            this
          );
        }
      }
      const be = {
        am: _e,
        fat: ve,
        fm: me,
        oscillator: he,
        pulse: ge,
        pwm: ye,
      };
      class xe extends ne {
        constructor() {
          super(q(xe.getDefaults(), arguments, ["frequency", "type"])),
            (this.name = "OmniOscillator");
          const t = q(xe.getDefaults(), arguments, ["frequency", "type"]);
          (this.frequency = new Rt({
            context: this.context,
            units: "frequency",
            value: t.frequency,
          })),
            (this.detune = new Rt({
              context: this.context,
              units: "cents",
              value: t.detune,
            })),
            $(this, ["frequency", "detune"]),
            this.set(t);
        }
        static getDefaults() {
          return Object.assign(
            he.getDefaults(),
            me.getDefaults(),
            _e.getDefaults(),
            ve.getDefaults(),
            ge.getDefaults(),
            ye.getDefaults()
          );
        }
        _start(t) {
          this._oscillator.start(t);
        }
        _stop(t) {
          this._oscillator.stop(t);
        }
        _restart(t) {
          return this._oscillator.restart(t), this;
        }
        get type() {
          let t = "";
          return (
            ["am", "fm", "fat"].some((t) => this._sourceType === t) &&
              (t = this._sourceType),
            t + this._oscillator.type
          );
        }
        set type(t) {
          "fm" === t.substr(0, 2)
            ? (this._createNewOscillator("fm"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t.substr(2)))
            : "am" === t.substr(0, 2)
            ? (this._createNewOscillator("am"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t.substr(2)))
            : "fat" === t.substr(0, 3)
            ? (this._createNewOscillator("fat"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t.substr(3)))
            : "pwm" === t
            ? (this._createNewOscillator("pwm"),
              (this._oscillator = this._oscillator))
            : "pulse" === t
            ? this._createNewOscillator("pulse")
            : (this._createNewOscillator("oscillator"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t));
        }
        get partials() {
          return this._oscillator.partials;
        }
        set partials(t) {
          this._getOscType(this._oscillator, "pulse") ||
            this._getOscType(this._oscillator, "pwm") ||
            (this._oscillator.partials = t);
        }
        get partialCount() {
          return this._oscillator.partialCount;
        }
        set partialCount(t) {
          this._getOscType(this._oscillator, "pulse") ||
            this._getOscType(this._oscillator, "pwm") ||
            (this._oscillator.partialCount = t);
        }
        set(t) {
          return (
            Reflect.has(t, "type") && t.type && (this.type = t.type),
            super.set(t),
            this
          );
        }
        _createNewOscillator(t) {
          if (t !== this._sourceType) {
            this._sourceType = t;
            const e = be[t],
              n = this.now();
            if (this._oscillator) {
              const t = this._oscillator;
              t.stop(n),
                this.context.setTimeout(() => t.dispose(), this.blockTime);
            }
            (this._oscillator = new e({
              context: this.context,
            })),
              this.frequency.connect(this._oscillator.frequency),
              this.detune.connect(this._oscillator.detune),
              this._oscillator.connect(this.output),
              (this._oscillator.onstop = () => this.onstop(this)),
              "started" === this.state && this._oscillator.start(n);
          }
        }
        get phase() {
          return this._oscillator.phase;
        }
        set phase(t) {
          this._oscillator.phase = t;
        }
        get sourceType() {
          return this._sourceType;
        }
        set sourceType(t) {
          let e = "sine";
          "pwm" !== this._oscillator.type &&
            "pulse" !== this._oscillator.type &&
            (e = this._oscillator.type),
            "fm" === t
              ? (this.type = "fm" + e)
              : "am" === t
              ? (this.type = "am" + e)
              : "fat" === t
              ? (this.type = "fat" + e)
              : "oscillator" === t
              ? (this.type = e)
              : "pulse" === t
              ? (this.type = "pulse")
              : "pwm" === t && (this.type = "pwm");
        }
        _getOscType(t, e) {
          return t instanceof be[e];
        }
        get baseType() {
          return this._oscillator.baseType;
        }
        set baseType(t) {
          this._getOscType(this._oscillator, "pulse") ||
            this._getOscType(this._oscillator, "pwm") ||
            "pulse" === t ||
            "pwm" === t ||
            (this._oscillator.baseType = t);
        }
        get width() {
          return this._getOscType(this._oscillator, "pulse")
            ? this._oscillator.width
            : void 0;
        }
        get count() {
          return this._getOscType(this._oscillator, "fat")
            ? this._oscillator.count
            : void 0;
        }
        set count(t) {
          this._getOscType(this._oscillator, "fat") &&
            m(t) &&
            (this._oscillator.count = t);
        }
        get spread() {
          return this._getOscType(this._oscillator, "fat")
            ? this._oscillator.spread
            : void 0;
        }
        set spread(t) {
          this._getOscType(this._oscillator, "fat") &&
            m(t) &&
            (this._oscillator.spread = t);
        }
        get modulationType() {
          return this._getOscType(this._oscillator, "fm") ||
            this._getOscType(this._oscillator, "am")
            ? this._oscillator.modulationType
            : void 0;
        }
        set modulationType(t) {
          (this._getOscType(this._oscillator, "fm") ||
            this._getOscType(this._oscillator, "am")) &&
            b(t) &&
            (this._oscillator.modulationType = t);
        }
        get modulationIndex() {
          return this._getOscType(this._oscillator, "fm")
            ? this._oscillator.modulationIndex
            : void 0;
        }
        get harmonicity() {
          return this._getOscType(this._oscillator, "fm") ||
            this._getOscType(this._oscillator, "am")
            ? this._oscillator.harmonicity
            : void 0;
        }
        get modulationFrequency() {
          return this._getOscType(this._oscillator, "pwm")
            ? this._oscillator.modulationFrequency
            : void 0;
        }
        asArray(t = 1024) {
          return S(this, void 0, void 0, function* () {
            return ce(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.detune.dispose(),
            this.frequency.dispose(),
            this._oscillator.dispose(),
            this
          );
        }
      }
      class we extends Rt {
        constructor() {
          super(Object.assign(q(we.getDefaults(), arguments, ["value"]))),
            (this.override = !1),
            (this.name = "Add"),
            (this._sum = new Mt({
              context: this.context,
            })),
            (this.input = this._sum),
            (this.output = this._sum),
            (this.addend = this._param),
            kt(this._constantSource, this._sum);
        }
        static getDefaults() {
          return Object.assign(Rt.getDefaults(), {
            value: 0,
          });
        }
        dispose() {
          return super.dispose(), this._sum.dispose(), this;
        }
      }
      class Te extends le {
        constructor() {
          super(Object.assign(q(Te.getDefaults(), arguments, ["min", "max"]))),
            (this.name = "Scale");
          const t = q(Te.getDefaults(), arguments, ["min", "max"]);
          (this._mult = this.input =
            new fe({
              context: this.context,
              value: t.max - t.min,
            })),
            (this._add = this.output =
              new we({
                context: this.context,
                value: t.min,
              })),
            (this._min = t.min),
            (this._max = t.max),
            this.input.connect(this.output);
        }
        static getDefaults() {
          return Object.assign(le.getDefaults(), {
            max: 1,
            min: 0,
          });
        }
        get min() {
          return this._min;
        }
        set min(t) {
          (this._min = t), this._setRange();
        }
        get max() {
          return this._max;
        }
        set max(t) {
          (this._max = t), this._setRange();
        }
        _setRange() {
          (this._add.value = this._min),
            (this._mult.value = this._max - this._min);
        }
        dispose() {
          return (
            super.dispose(), this._add.dispose(), this._mult.dispose(), this
          );
        }
      }
      class Oe extends le {
        constructor() {
          super(Object.assign(q(Oe.getDefaults(), arguments))),
            (this.name = "Zero"),
            (this._gain = new Mt({
              context: this.context,
            })),
            (this.output = this._gain),
            (this.input = void 0),
            At(this.context.getConstant(0), this._gain);
        }
        dispose() {
          return (
            super.dispose(), Dt(this.context.getConstant(0), this._gain), this
          );
        }
      }
      class Se extends Ct {
        constructor() {
          super(q(Se.getDefaults(), arguments, ["frequency", "min", "max"])),
            (this.name = "LFO"),
            (this._stoppedValue = 0),
            (this._units = "number"),
            (this.convert = !0),
            (this._fromType = St.prototype._fromType),
            (this._toType = St.prototype._toType),
            (this._is = St.prototype._is),
            (this._clampValue = St.prototype._clampValue);
          const t = q(Se.getDefaults(), arguments, ["frequency", "min", "max"]);
          (this._oscillator = new he({
            context: this.context,
            frequency: t.frequency,
            type: t.type,
          })),
            (this.frequency = this._oscillator.frequency),
            (this._amplitudeGain = new Mt({
              context: this.context,
              gain: t.amplitude,
              units: "normalRange",
            })),
            (this.amplitude = this._amplitudeGain.gain),
            (this._stoppedSignal = new Rt({
              context: this.context,
              units: "audioRange",
              value: 0,
            })),
            (this._zeros = new Oe({
              context: this.context,
            })),
            (this._a2g = new pe({
              context: this.context,
            })),
            (this._scaler = this.output =
              new Te({
                context: this.context,
                max: t.max,
                min: t.min,
              })),
            (this.units = t.units),
            (this.min = t.min),
            (this.max = t.max),
            this._oscillator.chain(
              this._a2g,
              this._amplitudeGain,
              this._scaler
            ),
            this._zeros.connect(this._a2g),
            this._stoppedSignal.connect(this._a2g),
            $(this, ["amplitude", "frequency"]),
            (this.phase = t.phase);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            amplitude: 1,
            frequency: "4n",
            max: 1,
            min: 0,
            phase: 0,
            type: "sine",
            units: "number",
          });
        }
        start(t) {
          return (
            (t = this.toSeconds(t)),
            this._stoppedSignal.setValueAtTime(0, t),
            this._oscillator.start(t),
            this
          );
        }
        stop(t) {
          return (
            (t = this.toSeconds(t)),
            this._stoppedSignal.setValueAtTime(this._stoppedValue, t),
            this._oscillator.stop(t),
            this
          );
        }
        sync() {
          return (
            this._oscillator.sync(), this._oscillator.syncFrequency(), this
          );
        }
        unsync() {
          return (
            this._oscillator.unsync(), this._oscillator.unsyncFrequency(), this
          );
        }
        get min() {
          return this._toType(this._scaler.min);
        }
        set min(t) {
          (t = this._fromType(t)), (this._scaler.min = t);
        }
        get max() {
          return this._toType(this._scaler.max);
        }
        set max(t) {
          (t = this._fromType(t)), (this._scaler.max = t);
        }
        get type() {
          return this._oscillator.type;
        }
        set type(t) {
          (this._oscillator.type = t),
            (this._stoppedValue = this._oscillator.getInitialValue()),
            (this._stoppedSignal.value = this._stoppedValue);
        }
        get phase() {
          return this._oscillator.phase;
        }
        set phase(t) {
          (this._oscillator.phase = t),
            (this._stoppedValue = this._oscillator.getInitialValue()),
            (this._stoppedSignal.value = this._stoppedValue);
        }
        get units() {
          return this._units;
        }
        set units(t) {
          const e = this.min,
            n = this.max;
          (this._units = t), (this.min = e), (this.max = n);
        }
        get state() {
          return this._oscillator.state;
        }
        connect(t, e, n) {
          return (
            (t instanceof St || t instanceof Rt) &&
              ((this.convert = t.convert), (this.units = t.units)),
            qt(this, t, e, n),
            this
          );
        }
        dispose() {
          return (
            super.dispose(),
            this._oscillator.dispose(),
            this._stoppedSignal.dispose(),
            this._zeros.dispose(),
            this._scaler.dispose(),
            this._a2g.dispose(),
            this._amplitudeGain.dispose(),
            this.amplitude.dispose(),
            this
          );
        }
      }
      function Ce(t, e = 1 / 0) {
        const n = new WeakMap();
        return function (s, i) {
          Reflect.defineProperty(s, i, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.get(this);
            },
            set: function (s) {
              a(s, t, e), n.set(this, s);
            },
          });
        };
      }
      function ke(t, e = 1 / 0) {
        const n = new WeakMap();
        return function (s, i) {
          Reflect.defineProperty(s, i, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.get(this);
            },
            set: function (s) {
              a(this.toSeconds(s), t, e), n.set(this, s);
            },
          });
        };
      }
      class Ae extends ne {
        constructor() {
          super(q(Ae.getDefaults(), arguments, ["url", "onload"])),
            (this.name = "Player"),
            (this._activeSources = new Set());
          const t = q(Ae.getDefaults(), arguments, ["url", "onload"]);
          (this._buffer = new tt({
            onload: this._onload.bind(this, t.onload),
            onerror: t.onerror,
            reverse: t.reverse,
            url: t.url,
          })),
            (this.autostart = t.autostart),
            (this._loop = t.loop),
            (this._loopStart = t.loopStart),
            (this._loopEnd = t.loopEnd),
            (this._playbackRate = t.playbackRate),
            (this.fadeIn = t.fadeIn),
            (this.fadeOut = t.fadeOut);
        }
        static getDefaults() {
          return Object.assign(ne.getDefaults(), {
            autostart: !1,
            fadeIn: 0,
            fadeOut: 0,
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            onload: K,
            onerror: K,
            playbackRate: 1,
            reverse: !1,
          });
        }
        load(t) {
          return S(this, void 0, void 0, function* () {
            return yield this._buffer.load(t), this._onload(), this;
          });
        }
        _onload(t = K) {
          t(), this.autostart && this.start();
        }
        _onSourceEnd(t) {
          this.onstop(this),
            this._activeSources.delete(t),
            0 !== this._activeSources.size ||
              this._synced ||
              "started" !== this._state.getValueAtTime(this.now()) ||
              this._state.setStateAtTime("stopped", this.now());
        }
        start(t, e, n) {
          return super.start(t, e, n), this;
        }
        _start(t, e, n) {
          e = this._loop ? I(e, this._loopStart) : I(e, 0);
          let s = this.toSeconds(e);
          this._synced && (s *= this._playbackRate);
          const i = n;
          n = I(n, Math.max(this._buffer.duration - s, 0));
          let o = this.toSeconds(n);
          (o /= this._playbackRate), (t = this.toSeconds(t));
          const r = new se({
            url: this._buffer,
            context: this.context,
            fadeIn: this.fadeIn,
            fadeOut: this.fadeOut,
            loop: this._loop,
            loopEnd: this._loopEnd,
            loopStart: this._loopStart,
            onended: this._onSourceEnd.bind(this),
            playbackRate: this._playbackRate,
          }).connect(this.output);
          this._loop ||
            this._synced ||
            (this._state.cancel(t + o),
            this._state.setStateAtTime("stopped", t + o, {
              implicitEnd: !0,
            })),
            this._activeSources.add(r),
            this._loop && p(i)
              ? r.start(t, s)
              : r.start(t, s, o - this.toSeconds(this.fadeOut));
        }
        _stop(t) {
          const e = this.toSeconds(t);
          this._activeSources.forEach((t) => t.stop(e));
        }
        restart(t, e, n) {
          return super.restart(t, e, n), this;
        }
        _restart(t, e, n) {
          this._stop(t), this._start(t, e, n);
        }
        seek(t, e) {
          const n = this.toSeconds(e);
          if ("started" === this._state.getValueAtTime(n)) {
            const e = this.toSeconds(t);
            this._stop(n), this._start(n, e);
          }
          return this;
        }
        setLoopPoints(t, e) {
          return (this.loopStart = t), (this.loopEnd = e), this;
        }
        get loopStart() {
          return this._loopStart;
        }
        set loopStart(t) {
          (this._loopStart = t),
            this.buffer.loaded && a(this.toSeconds(t), 0, this.buffer.duration),
            this._activeSources.forEach((e) => {
              e.loopStart = t;
            });
        }
        get loopEnd() {
          return this._loopEnd;
        }
        set loopEnd(t) {
          (this._loopEnd = t),
            this.buffer.loaded && a(this.toSeconds(t), 0, this.buffer.duration),
            this._activeSources.forEach((e) => {
              e.loopEnd = t;
            });
        }
        get buffer() {
          return this._buffer;
        }
        set buffer(t) {
          this._buffer.set(t);
        }
        get loop() {
          return this._loop;
        }
        set loop(t) {
          if (
            this._loop !== t &&
            ((this._loop = t),
            this._activeSources.forEach((e) => {
              e.loop = t;
            }),
            t)
          ) {
            const t = this._state.getNextState("stopped", this.now());
            t && this._state.cancel(t.time);
          }
        }
        get playbackRate() {
          return this._playbackRate;
        }
        set playbackRate(t) {
          this._playbackRate = t;
          const e = this.now(),
            n = this._state.getNextState("stopped", e);
          n &&
            n.implicitEnd &&
            (this._state.cancel(n.time),
            this._activeSources.forEach((t) => t.cancelStop())),
            this._activeSources.forEach((n) => {
              n.playbackRate.setValueAtTime(t, e);
            });
        }
        get reverse() {
          return this._buffer.reverse;
        }
        set reverse(t) {
          this._buffer.reverse = t;
        }
        get loaded() {
          return this._buffer.loaded;
        }
        dispose() {
          return (
            super.dispose(),
            this._activeSources.forEach((t) => t.dispose()),
            this._activeSources.clear(),
            this._buffer.dispose(),
            this
          );
        }
      }
      O([ke(0)], Ae.prototype, "fadeIn", void 0),
        O([ke(0)], Ae.prototype, "fadeOut", void 0);
      class De extends Ct {
        constructor() {
          super(q(De.getDefaults(), arguments, ["urls", "onload"], "urls")),
            (this.name = "Players"),
            (this.input = void 0),
            (this._players = new Map());
          const t = q(De.getDefaults(), arguments, ["urls", "onload"], "urls");
          (this._volume = this.output =
            new Zt({
              context: this.context,
              volume: t.volume,
            })),
            (this.volume = this._volume.volume),
            $(this, "volume"),
            (this._buffers = new $t({
              urls: t.urls,
              onload: t.onload,
              baseUrl: t.baseUrl,
              onerror: t.onerror,
            })),
            (this.mute = t.mute),
            (this._fadeIn = t.fadeIn),
            (this._fadeOut = t.fadeOut);
        }
        static getDefaults() {
          return Object.assign(ne.getDefaults(), {
            baseUrl: "",
            fadeIn: 0,
            fadeOut: 0,
            mute: !1,
            onload: K,
            onerror: K,
            urls: {},
            volume: 0,
          });
        }
        get mute() {
          return this._volume.mute;
        }
        set mute(t) {
          this._volume.mute = t;
        }
        get fadeIn() {
          return this._fadeIn;
        }
        set fadeIn(t) {
          (this._fadeIn = t),
            this._players.forEach((e) => {
              e.fadeIn = t;
            });
        }
        get fadeOut() {
          return this._fadeOut;
        }
        set fadeOut(t) {
          (this._fadeOut = t),
            this._players.forEach((e) => {
              e.fadeOut = t;
            });
        }
        get state() {
          return Array.from(this._players).some(
            ([t, e]) => "started" === e.state
          )
            ? "started"
            : "stopped";
        }
        has(t) {
          return this._buffers.has(t);
        }
        player(t) {
          if (
            (r(
              this.has(t),
              `No Player with the name ${t} exists on this object`
            ),
            !this._players.has(t))
          ) {
            const e = new Ae({
              context: this.context,
              fadeIn: this._fadeIn,
              fadeOut: this._fadeOut,
              url: this._buffers.get(t),
            }).connect(this.output);
            this._players.set(t, e);
          }
          return this._players.get(t);
        }
        get loaded() {
          return this._buffers.loaded;
        }
        add(t, e, n) {
          return (
            r(
              !this._buffers.has(t),
              "A buffer with that name already exists on this object"
            ),
            this._buffers.add(t, e, n),
            this
          );
        }
        stopAll(t) {
          return this._players.forEach((e) => e.stop(t)), this;
        }
        dispose() {
          return (
            super.dispose(),
            this._volume.dispose(),
            this.volume.dispose(),
            this._players.forEach((t) => t.dispose()),
            this._buffers.dispose(),
            this
          );
        }
      }
      class Me extends ne {
        constructor() {
          super(q(Me.getDefaults(), arguments, ["url", "onload"])),
            (this.name = "GrainPlayer"),
            (this._loopStart = 0),
            (this._loopEnd = 0),
            (this._activeSources = []);
          const t = q(Me.getDefaults(), arguments, ["url", "onload"]);
          (this.buffer = new tt({
            onload: t.onload,
            onerror: t.onerror,
            reverse: t.reverse,
            url: t.url,
          })),
            (this._clock = new Nt({
              context: this.context,
              callback: this._tick.bind(this),
              frequency: 1 / t.grainSize,
            })),
            (this._playbackRate = t.playbackRate),
            (this._grainSize = t.grainSize),
            (this._overlap = t.overlap),
            (this.detune = t.detune),
            (this.overlap = t.overlap),
            (this.loop = t.loop),
            (this.playbackRate = t.playbackRate),
            (this.grainSize = t.grainSize),
            (this.loopStart = t.loopStart),
            (this.loopEnd = t.loopEnd),
            (this.reverse = t.reverse),
            this._clock.on("stop", this._onstop.bind(this));
        }
        static getDefaults() {
          return Object.assign(ne.getDefaults(), {
            onload: K,
            onerror: K,
            overlap: 0.1,
            grainSize: 0.2,
            playbackRate: 1,
            detune: 0,
            loop: !1,
            loopStart: 0,
            loopEnd: 0,
            reverse: !1,
          });
        }
        _start(t, e, n) {
          (e = I(e, 0)), (e = this.toSeconds(e)), (t = this.toSeconds(t));
          const s = 1 / this._clock.frequency.getValueAtTime(t);
          this._clock.start(t, e / s), n && this.stop(t + this.toSeconds(n));
        }
        restart(t, e, n) {
          return super.restart(t, e, n), this;
        }
        _restart(t, e, n) {
          this._stop(t), this._start(t, e, n);
        }
        _stop(t) {
          this._clock.stop(t);
        }
        _onstop(t) {
          this._activeSources.forEach((e) => {
            (e.fadeOut = 0), e.stop(t);
          }),
            this.onstop(this);
        }
        _tick(t) {
          const e = this._clock.getTicksAtTime(t),
            n = e * this._grainSize;
          if ((this.log("offset", n), !this.loop && n > this.buffer.duration))
            return void this.stop(t);
          const s = n < this._overlap ? 0 : this._overlap,
            i = new se({
              context: this.context,
              url: this.buffer,
              fadeIn: s,
              fadeOut: this._overlap,
              loop: this.loop,
              loopStart: this._loopStart,
              loopEnd: this._loopEnd,
              playbackRate: ut(this.detune / 100),
            }).connect(this.output);
          i.start(t, this._grainSize * e),
            i.stop(t + this._grainSize / this.playbackRate),
            this._activeSources.push(i),
            (i.onended = () => {
              const t = this._activeSources.indexOf(i);
              -1 !== t && this._activeSources.splice(t, 1);
            });
        }
        get playbackRate() {
          return this._playbackRate;
        }
        set playbackRate(t) {
          a(t, 0.001),
            (this._playbackRate = t),
            (this.grainSize = this._grainSize);
        }
        get loopStart() {
          return this._loopStart;
        }
        set loopStart(t) {
          this.buffer.loaded && a(this.toSeconds(t), 0, this.buffer.duration),
            (this._loopStart = this.toSeconds(t));
        }
        get loopEnd() {
          return this._loopEnd;
        }
        set loopEnd(t) {
          this.buffer.loaded && a(this.toSeconds(t), 0, this.buffer.duration),
            (this._loopEnd = this.toSeconds(t));
        }
        get reverse() {
          return this.buffer.reverse;
        }
        set reverse(t) {
          this.buffer.reverse = t;
        }
        get grainSize() {
          return this._grainSize;
        }
        set grainSize(t) {
          (this._grainSize = this.toSeconds(t)),
            this._clock.frequency.setValueAtTime(
              this._playbackRate / this._grainSize,
              this.now()
            );
        }
        get overlap() {
          return this._overlap;
        }
        set overlap(t) {
          const e = this.toSeconds(t);
          a(e, 0), (this._overlap = e);
        }
        get loaded() {
          return this.buffer.loaded;
        }
        dispose() {
          return (
            super.dispose(),
            this.buffer.dispose(),
            this._clock.dispose(),
            this._activeSources.forEach((t) => t.dispose()),
            this
          );
        }
      }
      class je extends le {
        constructor() {
          super(...arguments),
            (this.name = "Abs"),
            (this._abs = new de({
              context: this.context,
              mapping: (t) => (Math.abs(t) < 0.001 ? 0 : Math.abs(t)),
            })),
            (this.input = this._abs),
            (this.output = this._abs);
        }
        dispose() {
          return super.dispose(), this._abs.dispose(), this;
        }
      }
      class Ee extends le {
        constructor() {
          super(...arguments),
            (this.name = "GainToAudio"),
            (this._norm = new de({
              context: this.context,
              mapping: (t) => 2 * Math.abs(t) - 1,
            })),
            (this.input = this._norm),
            (this.output = this._norm);
        }
        dispose() {
          return super.dispose(), this._norm.dispose(), this;
        }
      }
      class Re extends le {
        constructor() {
          super(...arguments),
            (this.name = "Negate"),
            (this._multiply = new fe({
              context: this.context,
              value: -1,
            })),
            (this.input = this._multiply),
            (this.output = this._multiply);
        }
        dispose() {
          return super.dispose(), this._multiply.dispose(), this;
        }
      }
      class qe extends Rt {
        constructor() {
          super(Object.assign(q(qe.getDefaults(), arguments, ["value"]))),
            (this.override = !1),
            (this.name = "Subtract"),
            (this._sum = new Mt({
              context: this.context,
            })),
            (this.input = this._sum),
            (this.output = this._sum),
            (this._neg = new Re({
              context: this.context,
            })),
            (this.subtrahend = this._param),
            kt(this._constantSource, this._neg, this._sum);
        }
        static getDefaults() {
          return Object.assign(Rt.getDefaults(), {
            value: 0,
          });
        }
        dispose() {
          return (
            super.dispose(), this._neg.dispose(), this._sum.dispose(), this
          );
        }
      }
      class Ie extends le {
        constructor() {
          super(Object.assign(q(Ie.getDefaults(), arguments))),
            (this.name = "GreaterThanZero"),
            (this._thresh = this.output =
              new de({
                context: this.context,
                length: 127,
                mapping: (t) => (t <= 0 ? 0 : 1),
              })),
            (this._scale = this.input =
              new fe({
                context: this.context,
                value: 1e4,
              })),
            this._scale.connect(this._thresh);
        }
        dispose() {
          return (
            super.dispose(), this._scale.dispose(), this._thresh.dispose(), this
          );
        }
      }
      class Fe extends Rt {
        constructor() {
          super(Object.assign(q(Fe.getDefaults(), arguments, ["value"]))),
            (this.name = "GreaterThan"),
            (this.override = !1);
          const t = q(Fe.getDefaults(), arguments, ["value"]);
          (this._subtract = this.input =
            new qe({
              context: this.context,
              value: t.value,
            })),
            (this._gtz = this.output =
              new Ie({
                context: this.context,
              })),
            (this.comparator = this._param = this._subtract.subtrahend),
            $(this, "comparator"),
            this._subtract.connect(this._gtz);
        }
        static getDefaults() {
          return Object.assign(Rt.getDefaults(), {
            value: 0,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._gtz.dispose(),
            this._subtract.dispose(),
            this.comparator.dispose(),
            this
          );
        }
      }
      class Ve extends le {
        constructor() {
          super(Object.assign(q(Ve.getDefaults(), arguments, ["value"]))),
            (this.name = "Pow");
          const t = q(Ve.getDefaults(), arguments, ["value"]);
          (this._exponentScaler =
            this.input =
            this.output =
              new de({
                context: this.context,
                mapping: this._expFunc(t.value),
                length: 8192,
              })),
            (this._exponent = t.value);
        }
        static getDefaults() {
          return Object.assign(le.getDefaults(), {
            value: 1,
          });
        }
        _expFunc(t) {
          return (e) => Math.pow(Math.abs(e), t);
        }
        get value() {
          return this._exponent;
        }
        set value(t) {
          (this._exponent = t),
            this._exponentScaler.setMap(this._expFunc(this._exponent));
        }
        dispose() {
          return super.dispose(), this._exponentScaler.dispose(), this;
        }
      }
      class Ne extends Te {
        constructor() {
          super(
            Object.assign(
              q(Ne.getDefaults(), arguments, ["min", "max", "exponent"])
            )
          ),
            (this.name = "ScaleExp");
          const t = q(Ne.getDefaults(), arguments, ["min", "max", "exponent"]);
          (this.input = this._exp =
            new Ve({
              context: this.context,
              value: t.exponent,
            })),
            this._exp.connect(this._mult);
        }
        static getDefaults() {
          return Object.assign(Te.getDefaults(), {
            exponent: 1,
          });
        }
        get exponent() {
          return this._exp.value;
        }
        set exponent(t) {
          this._exp.value = t;
        }
        dispose() {
          return super.dispose(), this._exp.dispose(), this;
        }
      }
      class Pe extends Rt {
        constructor() {
          super(q(Rt.getDefaults(), arguments, ["value", "units"])),
            (this.name = "SyncedSignal"),
            (this.override = !1);
          const t = q(Rt.getDefaults(), arguments, ["value", "units"]);
          (this._lastVal = t.value),
            (this._synced = this.context.transport.scheduleRepeat(
              this._onTick.bind(this),
              "1i"
            )),
            (this._syncedCallback = this._anchorValue.bind(this)),
            this.context.transport.on("start", this._syncedCallback),
            this.context.transport.on("pause", this._syncedCallback),
            this.context.transport.on("stop", this._syncedCallback),
            this._constantSource.disconnect(),
            this._constantSource.stop(0),
            (this._constantSource = this.output =
              new Et({
                context: this.context,
                offset: t.value,
                units: t.units,
              }).start(0)),
            this.setValueAtTime(t.value, 0);
        }
        _onTick(t) {
          const e = super.getValueAtTime(this.context.transport.seconds);
          this._lastVal !== e &&
            ((this._lastVal = e),
            this._constantSource.offset.setValueAtTime(e, t));
        }
        _anchorValue(t) {
          const e = super.getValueAtTime(this.context.transport.seconds);
          (this._lastVal = e),
            this._constantSource.offset.cancelAndHoldAtTime(t),
            this._constantSource.offset.setValueAtTime(e, t);
        }
        getValueAtTime(t) {
          const e = new xt(this.context, t).toSeconds();
          return super.getValueAtTime(e);
        }
        setValueAtTime(t, e) {
          const n = new xt(this.context, e).toSeconds();
          return super.setValueAtTime(t, n), this;
        }
        linearRampToValueAtTime(t, e) {
          const n = new xt(this.context, e).toSeconds();
          return super.linearRampToValueAtTime(t, n), this;
        }
        exponentialRampToValueAtTime(t, e) {
          const n = new xt(this.context, e).toSeconds();
          return super.exponentialRampToValueAtTime(t, n), this;
        }
        setTargetAtTime(t, e, n) {
          const s = new xt(this.context, e).toSeconds();
          return super.setTargetAtTime(t, s, n), this;
        }
        cancelScheduledValues(t) {
          const e = new xt(this.context, t).toSeconds();
          return super.cancelScheduledValues(e), this;
        }
        setValueCurveAtTime(t, e, n, s) {
          const i = new xt(this.context, e).toSeconds();
          return (
            (n = this.toSeconds(n)), super.setValueCurveAtTime(t, i, n, s), this
          );
        }
        cancelAndHoldAtTime(t) {
          const e = new xt(this.context, t).toSeconds();
          return super.cancelAndHoldAtTime(e), this;
        }
        setRampPoint(t) {
          const e = new xt(this.context, t).toSeconds();
          return super.setRampPoint(e), this;
        }
        exponentialRampTo(t, e, n) {
          const s = new xt(this.context, n).toSeconds();
          return super.exponentialRampTo(t, e, s), this;
        }
        linearRampTo(t, e, n) {
          const s = new xt(this.context, n).toSeconds();
          return super.linearRampTo(t, e, s), this;
        }
        targetRampTo(t, e, n) {
          const s = new xt(this.context, n).toSeconds();
          return super.targetRampTo(t, e, s), this;
        }
        dispose() {
          return (
            super.dispose(),
            this.context.transport.clear(this._synced),
            this.context.transport.off("start", this._syncedCallback),
            this.context.transport.off("pause", this._syncedCallback),
            this.context.transport.off("stop", this._syncedCallback),
            this._constantSource.dispose(),
            this
          );
        }
      }
      class Le extends Ct {
        constructor() {
          super(
            q(Le.getDefaults(), arguments, [
              "attack",
              "decay",
              "sustain",
              "release",
            ])
          ),
            (this.name = "Envelope"),
            (this._sig = new Rt({
              context: this.context,
              value: 0,
            })),
            (this.output = this._sig),
            (this.input = void 0);
          const t = q(Le.getDefaults(), arguments, [
            "attack",
            "decay",
            "sustain",
            "release",
          ]);
          (this.attack = t.attack),
            (this.decay = t.decay),
            (this.sustain = t.sustain),
            (this.release = t.release),
            (this.attackCurve = t.attackCurve),
            (this.releaseCurve = t.releaseCurve),
            (this.decayCurve = t.decayCurve);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            attack: 0.01,
            attackCurve: "linear",
            decay: 0.1,
            decayCurve: "exponential",
            release: 1,
            releaseCurve: "exponential",
            sustain: 0.5,
          });
        }
        get value() {
          return this.getValueAtTime(this.now());
        }
        _getCurve(t, e) {
          if (b(t)) return t;
          {
            let n;
            for (n in ze) if (ze[n][e] === t) return n;
            return t;
          }
        }
        _setCurve(t, e, n) {
          if (b(n) && Reflect.has(ze, n)) {
            const s = ze[n];
            g(s) ? "_decayCurve" !== t && (this[t] = s[e]) : (this[t] = s);
          } else {
            if (!y(n) || "_decayCurve" === t)
              throw new Error("Envelope: invalid curve: " + n);
            this[t] = n;
          }
        }
        get attackCurve() {
          return this._getCurve(this._attackCurve, "In");
        }
        set attackCurve(t) {
          this._setCurve("_attackCurve", "In", t);
        }
        get releaseCurve() {
          return this._getCurve(this._releaseCurve, "Out");
        }
        set releaseCurve(t) {
          this._setCurve("_releaseCurve", "Out", t);
        }
        get decayCurve() {
          return this._decayCurve;
        }
        set decayCurve(t) {
          r(
            ["linear", "exponential"].some((e) => e === t),
            "Invalid envelope curve: " + t
          ),
            (this._decayCurve = t);
        }
        triggerAttack(t, e = 1) {
          this.log("triggerAttack", t, e), (t = this.toSeconds(t));
          let n = this.toSeconds(this.attack);
          const s = this.toSeconds(this.decay),
            i = this.getValueAtTime(t);
          if (i > 0) {
            n = (1 - i) / (1 / n);
          }
          if (n < this.sampleTime)
            this._sig.cancelScheduledValues(t), this._sig.setValueAtTime(e, t);
          else if ("linear" === this._attackCurve)
            this._sig.linearRampTo(e, n, t);
          else if ("exponential" === this._attackCurve)
            this._sig.targetRampTo(e, n, t);
          else {
            this._sig.cancelAndHoldAtTime(t);
            let s = this._attackCurve;
            for (let t = 1; t < s.length; t++)
              if (s[t - 1] <= i && i <= s[t]) {
                (s = this._attackCurve.slice(t)), (s[0] = i);
                break;
              }
            this._sig.setValueCurveAtTime(s, t, n, e);
          }
          if (s && this.sustain < 1) {
            const i = e * this.sustain,
              o = t + n;
            this.log("decay", o),
              "linear" === this._decayCurve
                ? this._sig.linearRampToValueAtTime(i, s + o)
                : this._sig.exponentialApproachValueAtTime(i, o, s);
          }
          return this;
        }
        triggerRelease(t) {
          this.log("triggerRelease", t), (t = this.toSeconds(t));
          const e = this.getValueAtTime(t);
          if (e > 0) {
            const n = this.toSeconds(this.release);
            n < this.sampleTime
              ? this._sig.setValueAtTime(0, t)
              : "linear" === this._releaseCurve
              ? this._sig.linearRampTo(0, n, t)
              : "exponential" === this._releaseCurve
              ? this._sig.targetRampTo(0, n, t)
              : (r(
                  y(this._releaseCurve),
                  "releaseCurve must be either 'linear', 'exponential' or an array"
                ),
                this._sig.cancelAndHoldAtTime(t),
                this._sig.setValueCurveAtTime(this._releaseCurve, t, n, e));
          }
          return this;
        }
        getValueAtTime(t) {
          return this._sig.getValueAtTime(t);
        }
        triggerAttackRelease(t, e, n = 1) {
          return (
            (e = this.toSeconds(e)),
            this.triggerAttack(e, n),
            this.triggerRelease(e + this.toSeconds(t)),
            this
          );
        }
        cancel(t) {
          return this._sig.cancelScheduledValues(this.toSeconds(t)), this;
        }
        connect(t, e = 0, n = 0) {
          return qt(this, t, e, n), this;
        }
        asArray(t = 1024) {
          return S(this, void 0, void 0, function* () {
            const e = t / this.context.sampleRate,
              n = new et(1, e, this.context.sampleRate),
              s = this.toSeconds(this.attack) + this.toSeconds(this.decay),
              i = s + this.toSeconds(this.release),
              o = 0.1 * i,
              r = i + o,
              a = new this.constructor(
                Object.assign(this.get(), {
                  attack: (e * this.toSeconds(this.attack)) / r,
                  decay: (e * this.toSeconds(this.decay)) / r,
                  release: (e * this.toSeconds(this.release)) / r,
                  context: n,
                })
              );
            return (
              a._sig.toDestination(),
              a.triggerAttackRelease((e * (s + o)) / r, 0),
              (yield n.render()).getChannelData(0)
            );
          });
        }
        dispose() {
          return super.dispose(), this._sig.dispose(), this;
        }
      }
      O([ke(0)], Le.prototype, "attack", void 0),
        O([ke(0)], Le.prototype, "decay", void 0),
        O([Ce(0, 1)], Le.prototype, "sustain", void 0),
        O([ke(0)], Le.prototype, "release", void 0);
      const ze = (() => {
        let t, e;
        const n = [];
        for (t = 0; t < 128; t++) n[t] = Math.sin((t / 127) * (Math.PI / 2));
        const s = [];
        for (t = 0; t < 127; t++) {
          e = t / 127;
          const n = Math.sin(e * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
          s[t] = n / 10 + 0.83 * e;
        }
        s[127] = 1;
        const i = [];
        for (t = 0; t < 128; t++) i[t] = Math.ceil((t / 127) * 5) / 5;
        const o = [];
        for (t = 0; t < 128; t++)
          (e = t / 127), (o[t] = 0.5 * (1 - Math.cos(Math.PI * e)));
        const r = [];
        for (t = 0; t < 128; t++) {
          e = t / 127;
          const n = 4 * Math.pow(e, 3) + 0.2,
            s = Math.cos(n * Math.PI * 2 * e);
          r[t] = Math.abs(s * (1 - e));
        }
        function a(t) {
          const e = new Array(t.length);
          for (let n = 0; n < t.length; n++) e[n] = 1 - t[n];
          return e;
        }
        return {
          bounce: {
            In: a(r),
            Out: r,
          },
          cosine: {
            In: n,
            Out: ((c = n), c.slice(0).reverse()),
          },
          exponential: "exponential",
          linear: "linear",
          ripple: {
            In: s,
            Out: a(s),
          },
          sine: {
            In: o,
            Out: a(o),
          },
          step: {
            In: i,
            Out: a(i),
          },
        };
        var c;
      })();
      class Be extends Ct {
        constructor() {
          super(q(Be.getDefaults(), arguments)),
            (this._scheduledEvents = []),
            (this._synced = !1),
            (this._original_triggerAttack = this.triggerAttack),
            (this._original_triggerRelease = this.triggerRelease);
          const t = q(Be.getDefaults(), arguments);
          (this._volume = this.output =
            new Zt({
              context: this.context,
              volume: t.volume,
            })),
            (this.volume = this._volume.volume),
            $(this, "volume");
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            volume: 0,
          });
        }
        sync() {
          return (
            this._synced ||
              ((this._synced = !0),
              this._syncMethod("triggerAttack", 1),
              this._syncMethod("triggerRelease", 0)),
            this
          );
        }
        _syncMethod(t, e) {
          const n = (this["_original_" + t] = this[t]);
          this[t] = (...t) => {
            const s = t[e],
              i = this.context.transport.schedule((s) => {
                (t[e] = s), n.apply(this, t);
              }, s);
            this._scheduledEvents.push(i);
          };
        }
        unsync() {
          return (
            this._scheduledEvents.forEach((t) =>
              this.context.transport.clear(t)
            ),
            (this._scheduledEvents = []),
            this._synced &&
              ((this._synced = !1),
              (this.triggerAttack = this._original_triggerAttack),
              (this.triggerRelease = this._original_triggerRelease)),
            this
          );
        }
        triggerAttackRelease(t, e, n, s) {
          const i = this.toSeconds(n),
            o = this.toSeconds(e);
          return this.triggerAttack(t, i, s), this.triggerRelease(i + o), this;
        }
        dispose() {
          return (
            super.dispose(),
            this._volume.dispose(),
            this.unsync(),
            (this._scheduledEvents = []),
            this
          );
        }
      }
      class We extends Be {
        constructor() {
          super(q(We.getDefaults(), arguments));
          const t = q(We.getDefaults(), arguments);
          (this.portamento = t.portamento), (this.onsilence = t.onsilence);
        }
        static getDefaults() {
          return Object.assign(Be.getDefaults(), {
            detune: 0,
            onsilence: K,
            portamento: 0,
          });
        }
        triggerAttack(t, e, n = 1) {
          this.log("triggerAttack", t, e, n);
          const s = this.toSeconds(e);
          return this._triggerEnvelopeAttack(s, n), this.setNote(t, s), this;
        }
        triggerRelease(t) {
          this.log("triggerRelease", t);
          const e = this.toSeconds(t);
          return this._triggerEnvelopeRelease(e), this;
        }
        setNote(t, e) {
          const n = this.toSeconds(e),
            s = t instanceof gt ? t.toFrequency() : t;
          if (this.portamento > 0 && this.getLevelAtTime(n) > 0.05) {
            const t = this.toSeconds(this.portamento);
            this.frequency.exponentialRampTo(s, t, n);
          } else this.frequency.setValueAtTime(s, n);
          return this;
        }
      }
      O([ke(0)], We.prototype, "portamento", void 0);
      class Ue extends Le {
        constructor() {
          super(
            q(Ue.getDefaults(), arguments, [
              "attack",
              "decay",
              "sustain",
              "release",
            ])
          ),
            (this.name = "AmplitudeEnvelope"),
            (this._gainNode = new Mt({
              context: this.context,
              gain: 0,
            })),
            (this.output = this._gainNode),
            (this.input = this._gainNode),
            this._sig.connect(this._gainNode.gain),
            (this.output = this._gainNode),
            (this.input = this._gainNode);
        }
        dispose() {
          return super.dispose(), this._gainNode.dispose(), this;
        }
      }
      class Ge extends We {
        constructor() {
          super(q(Ge.getDefaults(), arguments)), (this.name = "Synth");
          const t = q(Ge.getDefaults(), arguments);
          (this.oscillator = new xe(
            Object.assign(
              {
                context: this.context,
                detune: t.detune,
                onstop: () => this.onsilence(this),
              },
              t.oscillator
            )
          )),
            (this.frequency = this.oscillator.frequency),
            (this.detune = this.oscillator.detune),
            (this.envelope = new Ue(
              Object.assign(
                {
                  context: this.context,
                },
                t.envelope
              )
            )),
            this.oscillator.chain(this.envelope, this.output),
            $(this, ["oscillator", "frequency", "detune", "envelope"]);
        }
        static getDefaults() {
          return Object.assign(We.getDefaults(), {
            envelope: Object.assign(
              F(Le.getDefaults(), Object.keys(Ct.getDefaults())),
              {
                attack: 0.005,
                decay: 0.1,
                release: 1,
                sustain: 0.3,
              }
            ),
            oscillator: Object.assign(
              F(xe.getDefaults(), [
                ...Object.keys(ne.getDefaults()),
                "frequency",
                "detune",
              ]),
              {
                type: "triangle",
              }
            ),
          });
        }
        _triggerEnvelopeAttack(t, e) {
          if (
            (this.envelope.triggerAttack(t, e),
            this.oscillator.start(t),
            0 === this.envelope.sustain)
          ) {
            const e = this.toSeconds(this.envelope.attack),
              n = this.toSeconds(this.envelope.decay);
            this.oscillator.stop(t + e + n);
          }
        }
        _triggerEnvelopeRelease(t) {
          this.envelope.triggerRelease(t),
            this.oscillator.stop(t + this.toSeconds(this.envelope.release));
        }
        getLevelAtTime(t) {
          return (t = this.toSeconds(t)), this.envelope.getValueAtTime(t);
        }
        dispose() {
          return (
            super.dispose(),
            this.oscillator.dispose(),
            this.envelope.dispose(),
            this
          );
        }
      }
      class Ye extends We {
        constructor() {
          super(q(Ye.getDefaults(), arguments)),
            (this.name = "ModulationSynth");
          const t = q(Ye.getDefaults(), arguments);
          (this._carrier = new Ge({
            context: this.context,
            oscillator: t.oscillator,
            envelope: t.envelope,
            onsilence: () => this.onsilence(this),
            volume: -10,
          })),
            (this._modulator = new Ge({
              context: this.context,
              oscillator: t.modulation,
              envelope: t.modulationEnvelope,
              volume: -10,
            })),
            (this.oscillator = this._carrier.oscillator),
            (this.envelope = this._carrier.envelope),
            (this.modulation = this._modulator.oscillator),
            (this.modulationEnvelope = this._modulator.envelope),
            (this.frequency = new Rt({
              context: this.context,
              units: "frequency",
            })),
            (this.detune = new Rt({
              context: this.context,
              value: t.detune,
              units: "cents",
            })),
            (this.harmonicity = new fe({
              context: this.context,
              value: t.harmonicity,
              minValue: 0,
            })),
            (this._modulationNode = new Mt({
              context: this.context,
              gain: 0,
            })),
            $(this, [
              "frequency",
              "harmonicity",
              "oscillator",
              "envelope",
              "modulation",
              "modulationEnvelope",
              "detune",
            ]);
        }
        static getDefaults() {
          return Object.assign(We.getDefaults(), {
            harmonicity: 3,
            oscillator: Object.assign(
              F(xe.getDefaults(), [
                ...Object.keys(ne.getDefaults()),
                "frequency",
                "detune",
              ]),
              {
                type: "sine",
              }
            ),
            envelope: Object.assign(
              F(Le.getDefaults(), Object.keys(Ct.getDefaults())),
              {
                attack: 0.01,
                decay: 0.01,
                sustain: 1,
                release: 0.5,
              }
            ),
            modulation: Object.assign(
              F(xe.getDefaults(), [
                ...Object.keys(ne.getDefaults()),
                "frequency",
                "detune",
              ]),
              {
                type: "square",
              }
            ),
            modulationEnvelope: Object.assign(
              F(Le.getDefaults(), Object.keys(Ct.getDefaults())),
              {
                attack: 0.5,
                decay: 0,
                sustain: 1,
                release: 0.5,
              }
            ),
          });
        }
        _triggerEnvelopeAttack(t, e) {
          this._carrier._triggerEnvelopeAttack(t, e),
            this._modulator._triggerEnvelopeAttack(t, e);
        }
        _triggerEnvelopeRelease(t) {
          return (
            this._carrier._triggerEnvelopeRelease(t),
            this._modulator._triggerEnvelopeRelease(t),
            this
          );
        }
        getLevelAtTime(t) {
          return (t = this.toSeconds(t)), this.envelope.getValueAtTime(t);
        }
        dispose() {
          return (
            super.dispose(),
            this._carrier.dispose(),
            this._modulator.dispose(),
            this.frequency.dispose(),
            this.detune.dispose(),
            this.harmonicity.dispose(),
            this._modulationNode.dispose(),
            this
          );
        }
      }
      class Qe extends Ye {
        constructor() {
          super(q(Qe.getDefaults(), arguments)),
            (this.name = "AMSynth"),
            (this._modulationScale = new pe({
              context: this.context,
            })),
            this.frequency.connect(this._carrier.frequency),
            this.frequency.chain(this.harmonicity, this._modulator.frequency),
            this.detune.fan(this._carrier.detune, this._modulator.detune),
            this._modulator.chain(
              this._modulationScale,
              this._modulationNode.gain
            ),
            this._carrier.chain(this._modulationNode, this.output);
        }
        dispose() {
          return super.dispose(), this._modulationScale.dispose(), this;
        }
      }
      class Ze extends Ct {
        constructor() {
          super(q(Ze.getDefaults(), arguments, ["frequency", "type"])),
            (this.name = "BiquadFilter");
          const t = q(Ze.getDefaults(), arguments, ["frequency", "type"]);
          (this._filter = this.context.createBiquadFilter()),
            (this.input = this.output = this._filter),
            (this.Q = new St({
              context: this.context,
              units: "number",
              value: t.Q,
              param: this._filter.Q,
            })),
            (this.frequency = new St({
              context: this.context,
              units: "frequency",
              value: t.frequency,
              param: this._filter.frequency,
            })),
            (this.detune = new St({
              context: this.context,
              units: "cents",
              value: t.detune,
              param: this._filter.detune,
            })),
            (this.gain = new St({
              context: this.context,
              units: "gain",
              value: t.gain,
              param: this._filter.gain,
            })),
            (this.type = t.type);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            Q: 1,
            type: "lowpass",
            frequency: 350,
            detune: 0,
            gain: 0,
          });
        }
        get type() {
          return this._filter.type;
        }
        set type(t) {
          r(
            -1 !==
              [
                "lowpass",
                "highpass",
                "bandpass",
                "lowshelf",
                "highshelf",
                "notch",
                "allpass",
                "peaking",
              ].indexOf(t),
            "Invalid filter type: " + t
          ),
            (this._filter.type = t);
        }
        getFrequencyResponse(t = 128) {
          const e = new Float32Array(t);
          for (let n = 0; n < t; n++) {
            const s = 19980 * Math.pow(n / t, 2) + 20;
            e[n] = s;
          }
          const n = new Float32Array(t),
            s = new Float32Array(t),
            i = this.context.createBiquadFilter();
          return (
            (i.type = this.type),
            (i.Q.value = this.Q.value),
            (i.frequency.value = this.frequency.value),
            (i.gain.value = this.gain.value),
            i.getFrequencyResponse(e, n, s),
            n
          );
        }
        dispose() {
          return (
            super.dispose(),
            this._filter.disconnect(),
            this.Q.dispose(),
            this.frequency.dispose(),
            this.gain.dispose(),
            this.detune.dispose(),
            this
          );
        }
      }
      class Xe extends Ct {
        constructor() {
          super(
            q(Xe.getDefaults(), arguments, ["frequency", "type", "rolloff"])
          ),
            (this.name = "Filter"),
            (this.input = new Mt({
              context: this.context,
            })),
            (this.output = new Mt({
              context: this.context,
            })),
            (this._filters = []);
          const t = q(Xe.getDefaults(), arguments, [
            "frequency",
            "type",
            "rolloff",
          ]);
          (this._filters = []),
            (this.Q = new Rt({
              context: this.context,
              units: "positive",
              value: t.Q,
            })),
            (this.frequency = new Rt({
              context: this.context,
              units: "frequency",
              value: t.frequency,
            })),
            (this.detune = new Rt({
              context: this.context,
              units: "cents",
              value: t.detune,
            })),
            (this.gain = new Rt({
              context: this.context,
              units: "decibels",
              value: t.gain,
            })),
            (this._type = t.type),
            (this.rolloff = t.rolloff),
            $(this, ["detune", "frequency", "gain", "Q"]);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            Q: 1,
            detune: 0,
            frequency: 350,
            gain: 0,
            rolloff: -12,
            type: "lowpass",
          });
        }
        get type() {
          return this._type;
        }
        set type(t) {
          r(
            -1 !==
              [
                "lowpass",
                "highpass",
                "bandpass",
                "lowshelf",
                "highshelf",
                "notch",
                "allpass",
                "peaking",
              ].indexOf(t),
            "Invalid filter type: " + t
          ),
            (this._type = t),
            this._filters.forEach((e) => (e.type = t));
        }
        get rolloff() {
          return this._rolloff;
        }
        set rolloff(t) {
          const e = m(t) ? t : parseInt(t, 10),
            n = [-12, -24, -48, -96];
          let s = n.indexOf(e);
          r(-1 !== s, "rolloff can only be " + n.join(", ")),
            (s += 1),
            (this._rolloff = e),
            this.input.disconnect(),
            this._filters.forEach((t) => t.disconnect()),
            (this._filters = new Array(s));
          for (let t = 0; t < s; t++) {
            const e = new Ze({
              context: this.context,
            });
            (e.type = this._type),
              this.frequency.connect(e.frequency),
              this.detune.connect(e.detune),
              this.Q.connect(e.Q),
              this.gain.connect(e.gain),
              (this._filters[t] = e);
          }
          (this._internalChannels = this._filters),
            kt(this.input, ...this._internalChannels, this.output);
        }
        getFrequencyResponse(t = 128) {
          const e = new Ze({
              frequency: this.frequency.value,
              gain: this.gain.value,
              Q: this.Q.value,
              type: this._type,
              detune: this.detune.value,
            }),
            n = new Float32Array(t).map(() => 1);
          return (
            this._filters.forEach(() => {
              e.getFrequencyResponse(t).forEach((t, e) => (n[e] *= t));
            }),
            e.dispose(),
            n
          );
        }
        dispose() {
          return (
            super.dispose(),
            this._filters.forEach((t) => {
              t.dispose();
            }),
            J(this, ["detune", "frequency", "gain", "Q"]),
            this.frequency.dispose(),
            this.Q.dispose(),
            this.detune.dispose(),
            this.gain.dispose(),
            this
          );
        }
      }
      class He extends Le {
        constructor() {
          super(
            q(He.getDefaults(), arguments, [
              "attack",
              "decay",
              "sustain",
              "release",
            ])
          ),
            (this.name = "FrequencyEnvelope");
          const t = q(He.getDefaults(), arguments, [
            "attack",
            "decay",
            "sustain",
            "release",
          ]);
          (this._octaves = t.octaves),
            (this._baseFrequency = this.toFrequency(t.baseFrequency)),
            (this._exponent = this.input =
              new Ve({
                context: this.context,
                value: t.exponent,
              })),
            (this._scale = this.output =
              new Te({
                context: this.context,
                min: this._baseFrequency,
                max: this._baseFrequency * Math.pow(2, this._octaves),
              })),
            this._sig.chain(this._exponent, this._scale);
        }
        static getDefaults() {
          return Object.assign(Le.getDefaults(), {
            baseFrequency: 200,
            exponent: 1,
            octaves: 4,
          });
        }
        get baseFrequency() {
          return this._baseFrequency;
        }
        set baseFrequency(t) {
          const e = this.toFrequency(t);
          a(e, 0),
            (this._baseFrequency = e),
            (this._scale.min = this._baseFrequency),
            (this.octaves = this._octaves);
        }
        get octaves() {
          return this._octaves;
        }
        set octaves(t) {
          a(t, 0),
            (this._octaves = t),
            (this._scale.max = this._baseFrequency * Math.pow(2, t));
        }
        get exponent() {
          return this._exponent.value;
        }
        set exponent(t) {
          this._exponent.value = t;
        }
        dispose() {
          return (
            super.dispose(),
            this._exponent.dispose(),
            this._scale.dispose(),
            this
          );
        }
      }
      class $e extends We {
        constructor() {
          super(q($e.getDefaults(), arguments)), (this.name = "MonoSynth");
          const t = q($e.getDefaults(), arguments);
          (this.oscillator = new xe(
            Object.assign(t.oscillator, {
              context: this.context,
              detune: t.detune,
              onstop: () => this.onsilence(this),
            })
          )),
            (this.frequency = this.oscillator.frequency),
            (this.detune = this.oscillator.detune),
            (this.filter = new Xe(
              Object.assign(t.filter, {
                context: this.context,
              })
            )),
            (this.filterEnvelope = new He(
              Object.assign(t.filterEnvelope, {
                context: this.context,
              })
            )),
            (this.envelope = new Ue(
              Object.assign(t.envelope, {
                context: this.context,
              })
            )),
            this.oscillator.chain(this.filter, this.envelope, this.output),
            this.filterEnvelope.connect(this.filter.frequency),
            $(this, [
              "oscillator",
              "frequency",
              "detune",
              "filter",
              "filterEnvelope",
              "envelope",
            ]);
        }
        static getDefaults() {
          return Object.assign(We.getDefaults(), {
            envelope: Object.assign(
              F(Le.getDefaults(), Object.keys(Ct.getDefaults())),
              {
                attack: 0.005,
                decay: 0.1,
                release: 1,
                sustain: 0.9,
              }
            ),
            filter: Object.assign(
              F(Xe.getDefaults(), Object.keys(Ct.getDefaults())),
              {
                Q: 1,
                rolloff: -12,
                type: "lowpass",
              }
            ),
            filterEnvelope: Object.assign(
              F(He.getDefaults(), Object.keys(Ct.getDefaults())),
              {
                attack: 0.6,
                baseFrequency: 200,
                decay: 0.2,
                exponent: 2,
                octaves: 3,
                release: 2,
                sustain: 0.5,
              }
            ),
            oscillator: Object.assign(
              F(xe.getDefaults(), Object.keys(ne.getDefaults())),
              {
                type: "sawtooth",
              }
            ),
          });
        }
        _triggerEnvelopeAttack(t, e = 1) {
          if (
            (this.envelope.triggerAttack(t, e),
            this.filterEnvelope.triggerAttack(t),
            this.oscillator.start(t),
            0 === this.envelope.sustain)
          ) {
            const e = this.toSeconds(this.envelope.attack),
              n = this.toSeconds(this.envelope.decay);
            this.oscillator.stop(t + e + n);
          }
        }
        _triggerEnvelopeRelease(t) {
          this.envelope.triggerRelease(t),
            this.filterEnvelope.triggerRelease(t),
            this.oscillator.stop(t + this.toSeconds(this.envelope.release));
        }
        getLevelAtTime(t) {
          return (t = this.toSeconds(t)), this.envelope.getValueAtTime(t);
        }
        dispose() {
          return (
            super.dispose(),
            this.oscillator.dispose(),
            this.envelope.dispose(),
            this.filterEnvelope.dispose(),
            this.filter.dispose(),
            this
          );
        }
      }
      class Je extends We {
        constructor() {
          super(q(Je.getDefaults(), arguments)), (this.name = "DuoSynth");
          const t = q(Je.getDefaults(), arguments);
          (this.voice0 = new $e(
            Object.assign(t.voice0, {
              context: this.context,
              onsilence: () => this.onsilence(this),
            })
          )),
            (this.voice1 = new $e(
              Object.assign(t.voice1, {
                context: this.context,
              })
            )),
            (this.harmonicity = new fe({
              context: this.context,
              units: "positive",
              value: t.harmonicity,
            })),
            (this._vibrato = new Se({
              frequency: t.vibratoRate,
              context: this.context,
              min: -50,
              max: 50,
            })),
            this._vibrato.start(),
            (this.vibratoRate = this._vibrato.frequency),
            (this._vibratoGain = new Mt({
              context: this.context,
              units: "normalRange",
              gain: t.vibratoAmount,
            })),
            (this.vibratoAmount = this._vibratoGain.gain),
            (this.frequency = new Rt({
              context: this.context,
              units: "frequency",
              value: 440,
            })),
            (this.detune = new Rt({
              context: this.context,
              units: "cents",
              value: t.detune,
            })),
            this.frequency.connect(this.voice0.frequency),
            this.frequency.chain(this.harmonicity, this.voice1.frequency),
            this._vibrato.connect(this._vibratoGain),
            this._vibratoGain.fan(this.voice0.detune, this.voice1.detune),
            this.detune.fan(this.voice0.detune, this.voice1.detune),
            this.voice0.connect(this.output),
            this.voice1.connect(this.output),
            $(this, [
              "voice0",
              "voice1",
              "frequency",
              "vibratoAmount",
              "vibratoRate",
            ]);
        }
        getLevelAtTime(t) {
          return (
            (t = this.toSeconds(t)),
            this.voice0.envelope.getValueAtTime(t) +
              this.voice1.envelope.getValueAtTime(t)
          );
        }
        static getDefaults() {
          return R(We.getDefaults(), {
            vibratoAmount: 0.5,
            vibratoRate: 5,
            harmonicity: 1.5,
            voice0: R(F($e.getDefaults(), Object.keys(We.getDefaults())), {
              filterEnvelope: {
                attack: 0.01,
                decay: 0,
                sustain: 1,
                release: 0.5,
              },
              envelope: {
                attack: 0.01,
                decay: 0,
                sustain: 1,
                release: 0.5,
              },
            }),
            voice1: R(F($e.getDefaults(), Object.keys(We.getDefaults())), {
              filterEnvelope: {
                attack: 0.01,
                decay: 0,
                sustain: 1,
                release: 0.5,
              },
              envelope: {
                attack: 0.01,
                decay: 0,
                sustain: 1,
                release: 0.5,
              },
            }),
          });
        }
        _triggerEnvelopeAttack(t, e) {
          this.voice0._triggerEnvelopeAttack(t, e),
            this.voice1._triggerEnvelopeAttack(t, e);
        }
        _triggerEnvelopeRelease(t) {
          return (
            this.voice0._triggerEnvelopeRelease(t),
            this.voice1._triggerEnvelopeRelease(t),
            this
          );
        }
        dispose() {
          return (
            super.dispose(),
            this.voice0.dispose(),
            this.voice1.dispose(),
            this.frequency.dispose(),
            this.detune.dispose(),
            this._vibrato.dispose(),
            this.vibratoRate.dispose(),
            this._vibratoGain.dispose(),
            this.harmonicity.dispose(),
            this
          );
        }
      }
      class Ke extends Ye {
        constructor() {
          super(q(Ke.getDefaults(), arguments)), (this.name = "FMSynth");
          const t = q(Ke.getDefaults(), arguments);
          (this.modulationIndex = new fe({
            context: this.context,
            value: t.modulationIndex,
          })),
            this.frequency.connect(this._carrier.frequency),
            this.frequency.chain(this.harmonicity, this._modulator.frequency),
            this.frequency.chain(this.modulationIndex, this._modulationNode),
            this.detune.fan(this._carrier.detune, this._modulator.detune),
            this._modulator.connect(this._modulationNode.gain),
            this._modulationNode.connect(this._carrier.frequency),
            this._carrier.connect(this.output);
        }
        static getDefaults() {
          return Object.assign(Ye.getDefaults(), {
            modulationIndex: 10,
          });
        }
        dispose() {
          return super.dispose(), this.modulationIndex.dispose(), this;
        }
      }
      const tn = [1, 1.483, 1.932, 2.546, 2.63, 3.897];
      class en extends We {
        constructor() {
          super(q(en.getDefaults(), arguments)),
            (this.name = "MetalSynth"),
            (this._oscillators = []),
            (this._freqMultipliers = []);
          const t = q(en.getDefaults(), arguments);
          (this.detune = new Rt({
            context: this.context,
            units: "cents",
            value: t.detune,
          })),
            (this.frequency = new Rt({
              context: this.context,
              units: "frequency",
            })),
            (this._amplitude = new Mt({
              context: this.context,
              gain: 0,
            }).connect(this.output)),
            (this._highpass = new Xe({
              Q: 0,
              context: this.context,
              type: "highpass",
            }).connect(this._amplitude));
          for (let e = 0; e < tn.length; e++) {
            const n = new me({
              context: this.context,
              harmonicity: t.harmonicity,
              modulationIndex: t.modulationIndex,
              modulationType: "square",
              onstop: 0 === e ? () => this.onsilence(this) : K,
              type: "square",
            });
            n.connect(this._highpass), (this._oscillators[e] = n);
            const s = new fe({
              context: this.context,
              value: tn[e],
            });
            (this._freqMultipliers[e] = s),
              this.frequency.chain(s, n.frequency),
              this.detune.connect(n.detune);
          }
          (this._filterFreqScaler = new Te({
            context: this.context,
            max: 7e3,
            min: this.toFrequency(t.resonance),
          })),
            (this.envelope = new Le({
              attack: t.envelope.attack,
              attackCurve: "linear",
              context: this.context,
              decay: t.envelope.decay,
              release: t.envelope.release,
              sustain: 0,
            })),
            this.envelope.chain(
              this._filterFreqScaler,
              this._highpass.frequency
            ),
            this.envelope.connect(this._amplitude.gain),
            (this._octaves = t.octaves),
            (this.octaves = t.octaves);
        }
        static getDefaults() {
          return R(We.getDefaults(), {
            envelope: Object.assign(
              F(Le.getDefaults(), Object.keys(Ct.getDefaults())),
              {
                attack: 0.001,
                decay: 1.4,
                release: 0.2,
              }
            ),
            harmonicity: 5.1,
            modulationIndex: 32,
            octaves: 1.5,
            resonance: 4e3,
          });
        }
        _triggerEnvelopeAttack(t, e = 1) {
          return (
            this.envelope.triggerAttack(t, e),
            this._oscillators.forEach((e) => e.start(t)),
            0 === this.envelope.sustain &&
              this._oscillators.forEach((e) => {
                e.stop(
                  t +
                    this.toSeconds(this.envelope.attack) +
                    this.toSeconds(this.envelope.decay)
                );
              }),
            this
          );
        }
        _triggerEnvelopeRelease(t) {
          return (
            this.envelope.triggerRelease(t),
            this._oscillators.forEach((e) =>
              e.stop(t + this.toSeconds(this.envelope.release))
            ),
            this
          );
        }
        getLevelAtTime(t) {
          return (t = this.toSeconds(t)), this.envelope.getValueAtTime(t);
        }
        get modulationIndex() {
          return this._oscillators[0].modulationIndex.value;
        }
        set modulationIndex(t) {
          this._oscillators.forEach((e) => (e.modulationIndex.value = t));
        }
        get harmonicity() {
          return this._oscillators[0].harmonicity.value;
        }
        set harmonicity(t) {
          this._oscillators.forEach((e) => (e.harmonicity.value = t));
        }
        get resonance() {
          return this._filterFreqScaler.min;
        }
        set resonance(t) {
          (this._filterFreqScaler.min = this.toFrequency(t)),
            (this.octaves = this._octaves);
        }
        get octaves() {
          return this._octaves;
        }
        set octaves(t) {
          (this._octaves = t),
            (this._filterFreqScaler.max =
              this._filterFreqScaler.min * Math.pow(2, t));
        }
        dispose() {
          return (
            super.dispose(),
            this._oscillators.forEach((t) => t.dispose()),
            this._freqMultipliers.forEach((t) => t.dispose()),
            this.frequency.dispose(),
            this.detune.dispose(),
            this._filterFreqScaler.dispose(),
            this._amplitude.dispose(),
            this.envelope.dispose(),
            this._highpass.dispose(),
            this
          );
        }
      }
      class nn extends Ge {
        constructor() {
          super(q(nn.getDefaults(), arguments)),
            (this.name = "MembraneSynth"),
            (this.portamento = 0);
          const t = q(nn.getDefaults(), arguments);
          (this.pitchDecay = t.pitchDecay),
            (this.octaves = t.octaves),
            $(this, ["oscillator", "envelope"]);
        }
        static getDefaults() {
          return R(We.getDefaults(), Ge.getDefaults(), {
            envelope: {
              attack: 0.001,
              attackCurve: "exponential",
              decay: 0.4,
              release: 1.4,
              sustain: 0.01,
            },
            octaves: 10,
            oscillator: {
              type: "sine",
            },
            pitchDecay: 0.05,
          });
        }
        setNote(t, e) {
          const n = this.toSeconds(e),
            s = this.toFrequency(t instanceof gt ? t.toFrequency() : t),
            i = s * this.octaves;
          return (
            this.oscillator.frequency.setValueAtTime(i, n),
            this.oscillator.frequency.exponentialRampToValueAtTime(
              s,
              n + this.toSeconds(this.pitchDecay)
            ),
            this
          );
        }
        dispose() {
          return super.dispose(), this;
        }
      }
      O([Ce(0)], nn.prototype, "octaves", void 0),
        O([ke(0)], nn.prototype, "pitchDecay", void 0);
      class sn extends Be {
        constructor() {
          super(q(sn.getDefaults(), arguments)), (this.name = "NoiseSynth");
          const t = q(sn.getDefaults(), arguments);
          (this.noise = new ie(
            Object.assign(
              {
                context: this.context,
              },
              t.noise
            )
          )),
            (this.envelope = new Ue(
              Object.assign(
                {
                  context: this.context,
                },
                t.envelope
              )
            )),
            this.noise.chain(this.envelope, this.output);
        }
        static getDefaults() {
          return Object.assign(Be.getDefaults(), {
            envelope: Object.assign(
              F(Le.getDefaults(), Object.keys(Ct.getDefaults())),
              {
                decay: 0.1,
                sustain: 0,
              }
            ),
            noise: Object.assign(
              F(ie.getDefaults(), Object.keys(ne.getDefaults())),
              {
                type: "white",
              }
            ),
          });
        }
        triggerAttack(t, e = 1) {
          return (
            (t = this.toSeconds(t)),
            this.envelope.triggerAttack(t, e),
            this.noise.start(t),
            0 === this.envelope.sustain &&
              this.noise.stop(
                t +
                  this.toSeconds(this.envelope.attack) +
                  this.toSeconds(this.envelope.decay)
              ),
            this
          );
        }
        triggerRelease(t) {
          return (
            (t = this.toSeconds(t)),
            this.envelope.triggerRelease(t),
            this.noise.stop(t + this.toSeconds(this.envelope.release)),
            this
          );
        }
        sync() {
          return (
            this._syncMethod("triggerAttack", 0),
            this._syncMethod("triggerRelease", 0),
            this
          );
        }
        triggerAttackRelease(t, e, n = 1) {
          return (
            (e = this.toSeconds(e)),
            (t = this.toSeconds(t)),
            this.triggerAttack(e, n),
            this.triggerRelease(e + t),
            this
          );
        }
        dispose() {
          return (
            super.dispose(), this.noise.dispose(), this.envelope.dispose(), this
          );
        }
      }
      const on = new Set();
      function rn(t) {
        on.add(t);
      }
      function an(t, e) {
        const n = `registerProcessor("${t}", ${e})`;
        on.add(n);
      }
      class cn extends Ct {
        constructor(t) {
          super(t),
            (this.name = "ToneAudioWorklet"),
            (this.workletOptions = {}),
            (this.onprocessorerror = K);
          const e = URL.createObjectURL(
              new Blob([Array.from(on).join("\n")], {
                type: "text/javascript",
              })
            ),
            n = this._audioWorkletName();
          (this._dummyGain = this.context.createGain()),
            (this._dummyParam = this._dummyGain.gain),
            this.context.addAudioWorkletModule(e, n).then(() => {
              this.disposed ||
                ((this._worklet = this.context.createAudioWorkletNode(
                  n,
                  this.workletOptions
                )),
                (this._worklet.onprocessorerror =
                  this.onprocessorerror.bind(this)),
                this.onReady(this._worklet));
            });
        }
        dispose() {
          return (
            super.dispose(),
            this._dummyGain.disconnect(),
            this._worklet &&
              (this._worklet.port.postMessage("dispose"),
              this._worklet.disconnect()),
            this
          );
        }
      }
      rn(
        '\n\t/**\n\t * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. \n\t */\n\tclass ToneAudioWorkletProcessor extends AudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\t\n\t\t\tsuper(options);\n\t\t\t/**\n\t\t\t * If the processor was disposed or not. Keep alive until it\'s disposed.\n\t\t\t */\n\t\t\tthis.disposed = false;\n\t\t   \t/** \n\t\t\t * The number of samples in the processing block\n\t\t\t */\n\t\t\tthis.blockSize = 128;\n\t\t\t/**\n\t\t\t * the sample rate\n\t\t\t */\n\t\t\tthis.sampleRate = sampleRate;\n\n\t\t\tthis.port.onmessage = (event) => {\n\t\t\t\t// when it receives a dispose \n\t\t\t\tif (event.data === "dispose") {\n\t\t\t\t\tthis.disposed = true;\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t}\n'
      );
      rn(
        "\n\t/**\n\t * Abstract class for a single input/output processor. \n\t * has a 'generate' function which processes one sample at a time\n\t */\n\tclass SingleIOProcessor extends ToneAudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(Object.assign(options, {\n\t\t\t\tnumberOfInputs: 1,\n\t\t\t\tnumberOfOutputs: 1\n\t\t\t}));\n\t\t\t/**\n\t\t\t * Holds the name of the parameter and a single value of that\n\t\t\t * parameter at the current sample\n\t\t\t * @type { [name: string]: number }\n\t\t\t */\n\t\t\tthis.params = {}\n\t\t}\n\n\t\t/**\n\t\t * Generate an output sample from the input sample and parameters\n\t\t * @abstract\n\t\t * @param input number\n\t\t * @param channel number\n\t\t * @param parameters { [name: string]: number }\n\t\t * @returns number\n\t\t */\n\t\tgenerate(){}\n\n\t\t/**\n\t\t * Update the private params object with the \n\t\t * values of the parameters at the given index\n\t\t * @param parameters { [name: string]: Float32Array },\n\t\t * @param index number\n\t\t */\n\t\tupdateParams(parameters, index) {\n\t\t\tfor (const paramName in parameters) {\n\t\t\t\tconst param = parameters[paramName];\n\t\t\t\tif (param.length > 1) {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][index];\n\t\t\t\t} else {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][0];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Process a single frame of the audio\n\t\t * @param inputs Float32Array[][]\n\t\t * @param outputs Float32Array[][]\n\t\t */\n\t\tprocess(inputs, outputs, parameters) {\n\t\t\tconst input = inputs[0];\n\t\t\tconst output = outputs[0];\n\t\t\t// get the parameter values\n\t\t\tconst channelCount = Math.max(input && input.length || 0, output.length);\n\t\t\tfor (let sample = 0; sample < this.blockSize; sample++) {\n\t\t\t\tthis.updateParams(parameters, sample);\n\t\t\t\tfor (let channel = 0; channel < channelCount; channel++) {\n\t\t\t\t\tconst inputSample = input && input.length ? input[channel][sample] : 0;\n\t\t\t\t\toutput[channel][sample] = this.generate(inputSample, channel, this.params);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn !this.disposed;\n\t\t}\n\t};\n"
      );
      rn(
        "\n\t/**\n\t * A multichannel buffer for use within an AudioWorkletProcessor as a delay line\n\t */\n\tclass DelayLine {\n\t\t\n\t\tconstructor(size, channels) {\n\t\t\tthis.buffer = [];\n\t\t\tthis.writeHead = []\n\t\t\tthis.size = size;\n\n\t\t\t// create the empty channels\n\t\t\tfor (let i = 0; i < channels; i++) {\n\t\t\t\tthis.buffer[i] = new Float32Array(this.size);\n\t\t\t\tthis.writeHead[i] = 0;\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Push a value onto the end\n\t\t * @param channel number\n\t\t * @param value number\n\t\t */\n\t\tpush(channel, value) {\n\t\t\tthis.writeHead[channel] += 1;\n\t\t\tif (this.writeHead[channel] > this.size) {\n\t\t\t\tthis.writeHead[channel] = 0;\n\t\t\t}\n\t\t\tthis.buffer[channel][this.writeHead[channel]] = value;\n\t\t}\n\n\t\t/**\n\t\t * Get the recorded value of the channel given the delay\n\t\t * @param channel number\n\t\t * @param delay number delay samples\n\t\t */\n\t\tget(channel, delay) {\n\t\t\tlet readHead = this.writeHead[channel] - Math.floor(delay);\n\t\t\tif (readHead < 0) {\n\t\t\t\treadHead += this.size;\n\t\t\t}\n\t\t\treturn this.buffer[channel][readHead];\n\t\t}\n\t}\n"
      );
      an(
        "feedback-comb-filter",
        '\n\tclass FeedbackCombFilterWorklet extends SingleIOProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(options);\n\t\t\tthis.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);\n\t\t}\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: "delayTime",\n\t\t\t\tdefaultValue: 0.1,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 1,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}, {\n\t\t\t\tname: "feedback",\n\t\t\t\tdefaultValue: 0.5,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 0.9999,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, channel, parameters) {\n\t\t\tconst delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);\n\t\t\tthis.delayLine.push(channel, input + delayedSample * parameters.feedback);\n\t\t\treturn delayedSample;\n\t\t}\n\t}\n'
      );
      class un extends cn {
        constructor() {
          super(q(un.getDefaults(), arguments, ["delayTime", "resonance"])),
            (this.name = "FeedbackCombFilter");
          const t = q(un.getDefaults(), arguments, ["delayTime", "resonance"]);
          (this.input = new Mt({
            context: this.context,
          })),
            (this.output = new Mt({
              context: this.context,
            })),
            (this.delayTime = new St({
              context: this.context,
              value: t.delayTime,
              units: "time",
              minValue: 0,
              maxValue: 1,
              param: this._dummyParam,
              swappable: !0,
            })),
            (this.resonance = new St({
              context: this.context,
              value: t.resonance,
              units: "normalRange",
              param: this._dummyParam,
              swappable: !0,
            })),
            $(this, ["resonance", "delayTime"]);
        }
        _audioWorkletName() {
          return "feedback-comb-filter";
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            delayTime: 0.1,
            resonance: 0.5,
          });
        }
        onReady(t) {
          kt(this.input, t, this.output);
          const e = t.parameters.get("delayTime");
          this.delayTime.setParam(e);
          const n = t.parameters.get("feedback");
          this.resonance.setParam(n);
        }
        dispose() {
          return (
            super.dispose(),
            this.input.dispose(),
            this.output.dispose(),
            this.delayTime.dispose(),
            this.resonance.dispose(),
            this
          );
        }
      }
      class hn extends Ct {
        constructor() {
          super(q(hn.getDefaults(), arguments, ["frequency", "type"])),
            (this.name = "OnePoleFilter");
          const t = q(hn.getDefaults(), arguments, ["frequency", "type"]);
          (this._frequency = t.frequency),
            (this._type = t.type),
            (this.input = new Mt({
              context: this.context,
            })),
            (this.output = new Mt({
              context: this.context,
            })),
            this._createFilter();
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            frequency: 880,
            type: "lowpass",
          });
        }
        _createFilter() {
          const t = this._filter,
            e = this.toFrequency(this._frequency),
            n = 1 / (2 * Math.PI * e);
          if ("lowpass" === this._type) {
            const t = 1 / (n * this.context.sampleRate),
              e = t - 1;
            this._filter = this.context.createIIRFilter([t, 0], [1, e]);
          } else {
            const t = 1 / (n * this.context.sampleRate) - 1;
            this._filter = this.context.createIIRFilter([1, -1], [1, t]);
          }
          this.input.chain(this._filter, this.output),
            t &&
              this.context.setTimeout(() => {
                this.disposed || (this.input.disconnect(t), t.disconnect());
              }, this.blockTime);
        }
        get frequency() {
          return this._frequency;
        }
        set frequency(t) {
          (this._frequency = t), this._createFilter();
        }
        get type() {
          return this._type;
        }
        set type(t) {
          (this._type = t), this._createFilter();
        }
        getFrequencyResponse(t = 128) {
          const e = new Float32Array(t);
          for (let n = 0; n < t; n++) {
            const s = 19980 * Math.pow(n / t, 2) + 20;
            e[n] = s;
          }
          const n = new Float32Array(t),
            s = new Float32Array(t);
          return this._filter.getFrequencyResponse(e, n, s), n;
        }
        dispose() {
          return (
            super.dispose(),
            this.input.dispose(),
            this.output.dispose(),
            this._filter.disconnect(),
            this
          );
        }
      }
      class ln extends Ct {
        constructor() {
          super(
            q(ln.getDefaults(), arguments, [
              "delayTime",
              "resonance",
              "dampening",
            ])
          ),
            (this.name = "LowpassCombFilter");
          const t = q(ln.getDefaults(), arguments, [
            "delayTime",
            "resonance",
            "dampening",
          ]);
          (this._combFilter = this.output =
            new un({
              context: this.context,
              delayTime: t.delayTime,
              resonance: t.resonance,
            })),
            (this.delayTime = this._combFilter.delayTime),
            (this.resonance = this._combFilter.resonance),
            (this._lowpass = this.input =
              new hn({
                context: this.context,
                frequency: t.dampening,
                type: "lowpass",
              })),
            this._lowpass.connect(this._combFilter);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            dampening: 3e3,
            delayTime: 0.1,
            resonance: 0.5,
          });
        }
        get dampening() {
          return this._lowpass.frequency;
        }
        set dampening(t) {
          this._lowpass.frequency = t;
        }
        dispose() {
          return (
            super.dispose(),
            this._combFilter.dispose(),
            this._lowpass.dispose(),
            this
          );
        }
      }
      class dn extends Be {
        constructor() {
          super(q(dn.getDefaults(), arguments)), (this.name = "PluckSynth");
          const t = q(dn.getDefaults(), arguments);
          (this._noise = new ie({
            context: this.context,
            type: "pink",
          })),
            (this.attackNoise = t.attackNoise),
            (this._lfcf = new ln({
              context: this.context,
              dampening: t.dampening,
              resonance: t.resonance,
            })),
            (this.resonance = t.resonance),
            (this.release = t.release),
            this._noise.connect(this._lfcf),
            this._lfcf.connect(this.output);
        }
        static getDefaults() {
          return R(Be.getDefaults(), {
            attackNoise: 1,
            dampening: 4e3,
            resonance: 0.7,
            release: 1,
          });
        }
        get dampening() {
          return this._lfcf.dampening;
        }
        set dampening(t) {
          this._lfcf.dampening = t;
        }
        triggerAttack(t, e) {
          const n = this.toFrequency(t);
          e = this.toSeconds(e);
          const s = 1 / n;
          return (
            this._lfcf.delayTime.setValueAtTime(s, e),
            this._noise.start(e),
            this._noise.stop(e + s * this.attackNoise),
            this._lfcf.resonance.cancelScheduledValues(e),
            this._lfcf.resonance.setValueAtTime(this.resonance, e),
            this
          );
        }
        triggerRelease(t) {
          return this._lfcf.resonance.linearRampTo(0, this.release, t), this;
        }
        dispose() {
          return (
            super.dispose(), this._noise.dispose(), this._lfcf.dispose(), this
          );
        }
      }
      class pn extends Be {
        constructor() {
          super(q(pn.getDefaults(), arguments, ["voice", "options"])),
            (this.name = "PolySynth"),
            (this._availableVoices = []),
            (this._activeVoices = []),
            (this._voices = []),
            (this._gcTimeout = -1),
            (this._averageActiveVoices = 0);
          const t = q(pn.getDefaults(), arguments, ["voice", "options"]);
          r(
            !m(t.voice),
            "DEPRECATED: The polyphony count is no longer the first argument."
          );
          const e = t.voice.getDefaults();
          (this.options = Object.assign(e, t.options)),
            (this.voice = t.voice),
            (this.maxPolyphony = t.maxPolyphony),
            (this._dummyVoice = this._getNextAvailableVoice());
          const n = this._voices.indexOf(this._dummyVoice);
          this._voices.splice(n, 1),
            (this._gcTimeout = this.context.setInterval(
              this._collectGarbage.bind(this),
              1
            ));
        }
        static getDefaults() {
          return Object.assign(Be.getDefaults(), {
            maxPolyphony: 32,
            options: {},
            voice: Ge,
          });
        }
        get activeVoices() {
          return this._activeVoices.length;
        }
        _makeVoiceAvailable(t) {
          this._availableVoices.push(t);
          const e = this._activeVoices.findIndex((e) => e.voice === t);
          this._activeVoices.splice(e, 1);
        }
        _getNextAvailableVoice() {
          if (this._availableVoices.length)
            return this._availableVoices.shift();
          if (this._voices.length < this.maxPolyphony) {
            const t = new this.voice(
              Object.assign(this.options, {
                context: this.context,
                onsilence: this._makeVoiceAvailable.bind(this),
              })
            );
            return t.connect(this.output), this._voices.push(t), t;
          }
          d("Max polyphony exceeded. Note dropped.");
        }
        _collectGarbage() {
          if (
            ((this._averageActiveVoices = Math.max(
              0.95 * this._averageActiveVoices,
              this.activeVoices
            )),
            this._availableVoices.length &&
              this._voices.length > Math.ceil(this._averageActiveVoices + 1))
          ) {
            const t = this._availableVoices.shift(),
              e = this._voices.indexOf(t);
            this._voices.splice(e, 1), this.context.isOffline || t.dispose();
          }
        }
        _triggerAttack(t, e, n) {
          t.forEach((t) => {
            const s = new Jt(this.context, t).toMidi(),
              i = this._getNextAvailableVoice();
            i &&
              (i.triggerAttack(t, e, n),
              this._activeVoices.push({
                midi: s,
                voice: i,
                released: !1,
              }),
              this.log("triggerAttack", t, e));
          });
        }
        _triggerRelease(t, e) {
          t.forEach((t) => {
            const n = new Jt(this.context, t).toMidi(),
              s = this._activeVoices.find(
                ({ midi: t, released: e }) => t === n && !e
              );
            s &&
              (s.voice.triggerRelease(e),
              (s.released = !0),
              this.log("triggerRelease", t, e));
          });
        }
        _scheduleEvent(t, e, n, s) {
          r(!this.disposed, "Synth was already disposed"),
            n <= this.now()
              ? "attack" === t
                ? this._triggerAttack(e, n, s)
                : this._triggerRelease(e, n)
              : this.context.setTimeout(() => {
                  this._scheduleEvent(t, e, n, s);
                }, n - this.now());
        }
        triggerAttack(t, e, n) {
          Array.isArray(t) || (t = [t]);
          const s = this.toSeconds(e);
          return this._scheduleEvent("attack", t, s, n), this;
        }
        triggerRelease(t, e) {
          Array.isArray(t) || (t = [t]);
          const n = this.toSeconds(e);
          return this._scheduleEvent("release", t, n), this;
        }
        triggerAttackRelease(t, e, n, s) {
          const i = this.toSeconds(n);
          if ((this.triggerAttack(t, i, s), y(e))) {
            r(
              y(t),
              "If the duration is an array, the notes must also be an array"
            ),
              (t = t);
            for (let n = 0; n < t.length; n++) {
              const s = e[Math.min(n, e.length - 1)],
                o = this.toSeconds(s);
              r(o > 0, "The duration must be greater than 0"),
                this.triggerRelease(t[n], i + o);
            }
          } else {
            const n = this.toSeconds(e);
            r(n > 0, "The duration must be greater than 0"),
              this.triggerRelease(t, i + n);
          }
          return this;
        }
        sync() {
          return (
            this._syncMethod("triggerAttack", 1),
            this._syncMethod("triggerRelease", 1),
            this
          );
        }
        set(t) {
          const e = F(t, ["onsilence", "context"]);
          return (
            (this.options = R(this.options, e)),
            this._voices.forEach((t) => t.set(e)),
            this._dummyVoice.set(e),
            this
          );
        }
        get() {
          return this._dummyVoice.get();
        }
        releaseAll(t) {
          const e = this.toSeconds(t);
          return (
            this._activeVoices.forEach(({ voice: t }) => {
              t.triggerRelease(e);
            }),
            this
          );
        }
        dispose() {
          return (
            super.dispose(),
            this._dummyVoice.dispose(),
            this._voices.forEach((t) => t.dispose()),
            (this._activeVoices = []),
            (this._availableVoices = []),
            this.context.clearInterval(this._gcTimeout),
            this
          );
        }
      }
      class fn extends Be {
        constructor() {
          super(
            q(
              fn.getDefaults(),
              arguments,
              ["urls", "onload", "baseUrl"],
              "urls"
            )
          ),
            (this.name = "Sampler"),
            (this._activeSources = new Map());
          const t = q(
              fn.getDefaults(),
              arguments,
              ["urls", "onload", "baseUrl"],
              "urls"
            ),
            e = {};
          Object.keys(t.urls).forEach((n) => {
            const s = parseInt(n, 10);
            if (
              (r(
                x(n) || (m(s) && isFinite(s)),
                "url key is neither a note or midi pitch: " + n
              ),
              x(n))
            ) {
              const s = new gt(this.context, n).toMidi();
              e[s] = t.urls[n];
            } else m(s) && isFinite(s) && (e[s] = t.urls[s]);
          }),
            (this._buffers = new $t({
              urls: e,
              onload: t.onload,
              baseUrl: t.baseUrl,
              onerror: t.onerror,
            })),
            (this.attack = t.attack),
            (this.release = t.release),
            (this.curve = t.curve),
            this._buffers.loaded && Promise.resolve().then(t.onload);
        }
        static getDefaults() {
          return Object.assign(Be.getDefaults(), {
            attack: 0,
            baseUrl: "",
            curve: "exponential",
            onload: K,
            onerror: K,
            release: 0.1,
            urls: {},
          });
        }
        _findClosest(t) {
          let e = 0;
          for (; e < 96; ) {
            if (this._buffers.has(t + e)) return -e;
            if (this._buffers.has(t - e)) return e;
            e++;
          }
          throw new Error("No available buffers for note: " + t);
        }
        triggerAttack(t, e, n = 1) {
          return (
            this.log("triggerAttack", t, e, n),
            Array.isArray(t) || (t = [t]),
            t.forEach((t) => {
              const s = dt(new gt(this.context, t).toFrequency()),
                i = Math.round(s),
                o = s - i,
                r = this._findClosest(i),
                a = i - r,
                c = this._buffers.get(a),
                u = ut(r + o),
                h = new se({
                  url: c,
                  context: this.context,
                  curve: this.curve,
                  fadeIn: this.attack,
                  fadeOut: this.release,
                  playbackRate: u,
                }).connect(this.output);
              h.start(e, 0, c.duration / u, n),
                y(this._activeSources.get(i)) || this._activeSources.set(i, []),
                this._activeSources.get(i).push(h),
                (h.onended = () => {
                  if (this._activeSources && this._activeSources.has(i)) {
                    const t = this._activeSources.get(i),
                      e = t.indexOf(h);
                    -1 !== e && t.splice(e, 1);
                  }
                });
            }),
            this
          );
        }
        triggerRelease(t, e) {
          return (
            this.log("triggerRelease", t, e),
            Array.isArray(t) || (t = [t]),
            t.forEach((t) => {
              const n = new gt(this.context, t).toMidi();
              if (
                this._activeSources.has(n) &&
                this._activeSources.get(n).length
              ) {
                const t = this._activeSources.get(n);
                (e = this.toSeconds(e)),
                  t.forEach((t) => {
                    t.stop(e);
                  }),
                  this._activeSources.set(n, []);
              }
            }),
            this
          );
        }
        releaseAll(t) {
          const e = this.toSeconds(t);
          return (
            this._activeSources.forEach((t) => {
              for (; t.length; ) {
                t.shift().stop(e);
              }
            }),
            this
          );
        }
        sync() {
          return (
            this._syncMethod("triggerAttack", 1),
            this._syncMethod("triggerRelease", 1),
            this
          );
        }
        triggerAttackRelease(t, e, n, s = 1) {
          const i = this.toSeconds(n);
          return (
            this.triggerAttack(t, i, s),
            y(e)
              ? (r(y(t), "notes must be an array when duration is array"),
                t.forEach((t, n) => {
                  const s = e[Math.min(n, e.length - 1)];
                  this.triggerRelease(t, i + this.toSeconds(s));
                }))
              : this.triggerRelease(t, i + this.toSeconds(e)),
            this
          );
        }
        add(t, e, n) {
          if (
            (r(x(t) || isFinite(t), "note must be a pitch or midi: " + t), x(t))
          ) {
            const s = new gt(this.context, t).toMidi();
            this._buffers.add(s, e, n);
          } else this._buffers.add(t, e, n);
          return this;
        }
        get loaded() {
          return this._buffers.loaded;
        }
        dispose() {
          return (
            super.dispose(),
            this._buffers.dispose(),
            this._activeSources.forEach((t) => {
              t.forEach((t) => t.dispose());
            }),
            this._activeSources.clear(),
            this
          );
        }
      }
      O([ke(0)], fn.prototype, "attack", void 0),
        O([ke(0)], fn.prototype, "release", void 0);
      class _n extends Tt {
        constructor() {
          super(q(_n.getDefaults(), arguments, ["callback", "value"])),
            (this.name = "ToneEvent"),
            (this._state = new Ot("stopped")),
            (this._startOffset = 0);
          const t = q(_n.getDefaults(), arguments, ["callback", "value"]);
          (this._loop = t.loop),
            (this.callback = t.callback),
            (this.value = t.value),
            (this._loopStart = this.toTicks(t.loopStart)),
            (this._loopEnd = this.toTicks(t.loopEnd)),
            (this._playbackRate = t.playbackRate),
            (this._probability = t.probability),
            (this._humanize = t.humanize),
            (this.mute = t.mute),
            (this._playbackRate = t.playbackRate),
            (this._state.increasing = !0),
            this._rescheduleEvents();
        }
        static getDefaults() {
          return Object.assign(Tt.getDefaults(), {
            callback: K,
            humanize: !1,
            loop: !1,
            loopEnd: "1m",
            loopStart: 0,
            mute: !1,
            playbackRate: 1,
            probability: 1,
            value: null,
          });
        }
        _rescheduleEvents(t = -1) {
          this._state.forEachFrom(t, (t) => {
            let e;
            if ("started" === t.state) {
              -1 !== t.id && this.context.transport.clear(t.id);
              const n =
                t.time + Math.round(this.startOffset / this._playbackRate);
              if (!0 === this._loop || (m(this._loop) && this._loop > 1)) {
                (e = 1 / 0),
                  m(this._loop) && (e = this._loop * this._getLoopDuration());
                const s = this._state.getAfter(n);
                null !== s && (e = Math.min(e, s.time - n)),
                  e !== 1 / 0 &&
                    (this._state.setStateAtTime("stopped", n + e + 1, {
                      id: -1,
                    }),
                    (e = new Lt(this.context, e)));
                const i = new Lt(this.context, this._getLoopDuration());
                t.id = this.context.transport.scheduleRepeat(
                  this._tick.bind(this),
                  i,
                  new Lt(this.context, n),
                  e
                );
              } else
                t.id = this.context.transport.schedule(
                  this._tick.bind(this),
                  new Lt(this.context, n)
                );
            }
          });
        }
        get state() {
          return this._state.getValueAtTime(this.context.transport.ticks);
        }
        get startOffset() {
          return this._startOffset;
        }
        set startOffset(t) {
          this._startOffset = t;
        }
        get probability() {
          return this._probability;
        }
        set probability(t) {
          this._probability = t;
        }
        get humanize() {
          return this._humanize;
        }
        set humanize(t) {
          this._humanize = t;
        }
        start(t) {
          const e = this.toTicks(t);
          return (
            "stopped" === this._state.getValueAtTime(e) &&
              (this._state.add({
                id: -1,
                state: "started",
                time: e,
              }),
              this._rescheduleEvents(e)),
            this
          );
        }
        stop(t) {
          this.cancel(t);
          const e = this.toTicks(t);
          if ("started" === this._state.getValueAtTime(e)) {
            this._state.setStateAtTime("stopped", e, {
              id: -1,
            });
            const t = this._state.getBefore(e);
            let n = e;
            null !== t && (n = t.time), this._rescheduleEvents(n);
          }
          return this;
        }
        cancel(t) {
          t = I(t, -1 / 0);
          const e = this.toTicks(t);
          return (
            this._state.forEachFrom(e, (t) => {
              this.context.transport.clear(t.id);
            }),
            this._state.cancel(e),
            this
          );
        }
        _tick(t) {
          const e = this.context.transport.getTicksAtTime(t);
          if (!this.mute && "started" === this._state.getValueAtTime(e)) {
            if (this.probability < 1 && Math.random() > this.probability)
              return;
            if (this.humanize) {
              let e = 0.02;
              v(this.humanize) || (e = this.toSeconds(this.humanize)),
                (t += (2 * Math.random() - 1) * e);
            }
            this.callback(t, this.value);
          }
        }
        _getLoopDuration() {
          return Math.round(
            (this._loopEnd - this._loopStart) / this._playbackRate
          );
        }
        get loop() {
          return this._loop;
        }
        set loop(t) {
          (this._loop = t), this._rescheduleEvents();
        }
        get playbackRate() {
          return this._playbackRate;
        }
        set playbackRate(t) {
          (this._playbackRate = t), this._rescheduleEvents();
        }
        get loopEnd() {
          return new Lt(this.context, this._loopEnd).toSeconds();
        }
        set loopEnd(t) {
          (this._loopEnd = this.toTicks(t)),
            this._loop && this._rescheduleEvents();
        }
        get loopStart() {
          return new Lt(this.context, this._loopStart).toSeconds();
        }
        set loopStart(t) {
          (this._loopStart = this.toTicks(t)),
            this._loop && this._rescheduleEvents();
        }
        get progress() {
          if (this._loop) {
            const t = this.context.transport.ticks,
              e = this._state.get(t);
            if (null !== e && "started" === e.state) {
              const n = this._getLoopDuration();
              return ((t - e.time) % n) / n;
            }
            return 0;
          }
          return 0;
        }
        dispose() {
          return super.dispose(), this.cancel(), this._state.dispose(), this;
        }
      }
      class mn extends Tt {
        constructor() {
          super(q(mn.getDefaults(), arguments, ["callback", "interval"])),
            (this.name = "Loop");
          const t = q(mn.getDefaults(), arguments, ["callback", "interval"]);
          (this._event = new _n({
            context: this.context,
            callback: this._tick.bind(this),
            loop: !0,
            loopEnd: t.interval,
            playbackRate: t.playbackRate,
            probability: t.probability,
          })),
            (this.callback = t.callback),
            (this.iterations = t.iterations);
        }
        static getDefaults() {
          return Object.assign(Tt.getDefaults(), {
            interval: "4n",
            callback: K,
            playbackRate: 1,
            iterations: 1 / 0,
            probability: 1,
            mute: !1,
            humanize: !1,
          });
        }
        start(t) {
          return this._event.start(t), this;
        }
        stop(t) {
          return this._event.stop(t), this;
        }
        cancel(t) {
          return this._event.cancel(t), this;
        }
        _tick(t) {
          this.callback(t);
        }
        get state() {
          return this._event.state;
        }
        get progress() {
          return this._event.progress;
        }
        get interval() {
          return this._event.loopEnd;
        }
        set interval(t) {
          this._event.loopEnd = t;
        }
        get playbackRate() {
          return this._event.playbackRate;
        }
        set playbackRate(t) {
          this._event.playbackRate = t;
        }
        get humanize() {
          return this._event.humanize;
        }
        set humanize(t) {
          this._event.humanize = t;
        }
        get probability() {
          return this._event.probability;
        }
        set probability(t) {
          this._event.probability = t;
        }
        get mute() {
          return this._event.mute;
        }
        set mute(t) {
          this._event.mute = t;
        }
        get iterations() {
          return !0 === this._event.loop ? 1 / 0 : this._event.loop;
        }
        set iterations(t) {
          this._event.loop = t === 1 / 0 || t;
        }
        dispose() {
          return super.dispose(), this._event.dispose(), this;
        }
      }
      class gn extends _n {
        constructor() {
          super(q(gn.getDefaults(), arguments, ["callback", "events"])),
            (this.name = "Part"),
            (this._state = new Ot("stopped")),
            (this._events = new Set());
          const t = q(gn.getDefaults(), arguments, ["callback", "events"]);
          (this._state.increasing = !0),
            t.events.forEach((t) => {
              y(t) ? this.add(t[0], t[1]) : this.add(t);
            });
        }
        static getDefaults() {
          return Object.assign(_n.getDefaults(), {
            events: [],
          });
        }
        start(t, e) {
          const n = this.toTicks(t);
          if ("started" !== this._state.getValueAtTime(n)) {
            (e = I(e, this._loop ? this._loopStart : 0)),
              (e = this._loop ? I(e, this._loopStart) : I(e, 0));
            const t = this.toTicks(e);
            this._state.add({
              id: -1,
              offset: t,
              state: "started",
              time: n,
            }),
              this._forEach((e) => {
                this._startNote(e, n, t);
              });
          }
          return this;
        }
        _startNote(t, e, n) {
          (e -= n),
            this._loop
              ? t.startOffset >= this._loopStart &&
                t.startOffset < this._loopEnd
                ? (t.startOffset < n && (e += this._getLoopDuration()),
                  t.start(new Lt(this.context, e)))
                : t.startOffset < this._loopStart &&
                  t.startOffset >= n &&
                  ((t.loop = !1), t.start(new Lt(this.context, e)))
              : t.startOffset >= n && t.start(new Lt(this.context, e));
        }
        get startOffset() {
          return this._startOffset;
        }
        set startOffset(t) {
          (this._startOffset = t),
            this._forEach((t) => {
              t.startOffset += this._startOffset;
            });
        }
        stop(t) {
          const e = this.toTicks(t);
          return (
            this._state.cancel(e),
            this._state.setStateAtTime("stopped", e),
            this._forEach((e) => {
              e.stop(t);
            }),
            this
          );
        }
        at(t, e) {
          const n = new xt(this.context, t).toTicks(),
            s = new Lt(this.context, 1).toSeconds(),
            i = this._events.values();
          let o = i.next();
          for (; !o.done; ) {
            const t = o.value;
            if (Math.abs(n - t.startOffset) < s)
              return f(e) && (t.value = e), t;
            o = i.next();
          }
          return f(e) ? (this.add(t, e), this.at(t)) : null;
        }
        add(t, e) {
          t instanceof Object && Reflect.has(t, "time") && (t = (e = t).time);
          const n = this.toTicks(t);
          let s;
          return (
            e instanceof _n
              ? ((s = e), (s.callback = this._tick.bind(this)))
              : (s = new _n({
                  callback: this._tick.bind(this),
                  context: this.context,
                  value: e,
                })),
            (s.startOffset = n),
            s.set({
              humanize: this.humanize,
              loop: this.loop,
              loopEnd: this.loopEnd,
              loopStart: this.loopStart,
              playbackRate: this.playbackRate,
              probability: this.probability,
            }),
            this._events.add(s),
            this._restartEvent(s),
            this
          );
        }
        _restartEvent(t) {
          this._state.forEach((e) => {
            "started" === e.state
              ? this._startNote(t, e.time, e.offset)
              : t.stop(new Lt(this.context, e.time));
          });
        }
        remove(t, e) {
          return (
            g(t) && t.hasOwnProperty("time") && (t = (e = t).time),
            (t = this.toTicks(t)),
            this._events.forEach((n) => {
              n.startOffset === t &&
                (p(e) || (f(e) && n.value === e)) &&
                (this._events.delete(n), n.dispose());
            }),
            this
          );
        }
        clear() {
          return this._forEach((t) => t.dispose()), this._events.clear(), this;
        }
        cancel(t) {
          return (
            this._forEach((e) => e.cancel(t)),
            this._state.cancel(this.toTicks(t)),
            this
          );
        }
        _forEach(t) {
          return (
            this._events &&
              this._events.forEach((e) => {
                e instanceof gn ? e._forEach(t) : t(e);
              }),
            this
          );
        }
        _setAll(t, e) {
          this._forEach((n) => {
            n[t] = e;
          });
        }
        _tick(t, e) {
          this.mute || this.callback(t, e);
        }
        _testLoopBoundries(t) {
          this._loop &&
          (t.startOffset < this._loopStart || t.startOffset >= this._loopEnd)
            ? t.cancel(0)
            : "stopped" === t.state && this._restartEvent(t);
        }
        get probability() {
          return this._probability;
        }
        set probability(t) {
          (this._probability = t), this._setAll("probability", t);
        }
        get humanize() {
          return this._humanize;
        }
        set humanize(t) {
          (this._humanize = t), this._setAll("humanize", t);
        }
        get loop() {
          return this._loop;
        }
        set loop(t) {
          (this._loop = t),
            this._forEach((e) => {
              (e.loopStart = this.loopStart),
                (e.loopEnd = this.loopEnd),
                (e.loop = t),
                this._testLoopBoundries(e);
            });
        }
        get loopEnd() {
          return new Lt(this.context, this._loopEnd).toSeconds();
        }
        set loopEnd(t) {
          (this._loopEnd = this.toTicks(t)),
            this._loop &&
              this._forEach((e) => {
                (e.loopEnd = t), this._testLoopBoundries(e);
              });
        }
        get loopStart() {
          return new Lt(this.context, this._loopStart).toSeconds();
        }
        set loopStart(t) {
          (this._loopStart = this.toTicks(t)),
            this._loop &&
              this._forEach((t) => {
                (t.loopStart = this.loopStart), this._testLoopBoundries(t);
              });
        }
        get playbackRate() {
          return this._playbackRate;
        }
        set playbackRate(t) {
          (this._playbackRate = t), this._setAll("playbackRate", t);
        }
        get length() {
          return this._events.size;
        }
        dispose() {
          return super.dispose(), this.clear(), this;
        }
      }
      function* vn(t) {
        let e = 0;
        for (; e < t.length; ) (e = xn(e, t)), yield t[e], e++;
      }
      function* yn(t) {
        let e = t.length - 1;
        for (; e >= 0; ) (e = xn(e, t)), yield t[e], e--;
      }
      function* bn(t, e) {
        for (;;) yield* e(t);
      }
      function xn(t, e) {
        return B(t, 0, e.length - 1);
      }
      function* wn(t, e) {
        let n = e ? 0 : t.length - 1;
        for (;;)
          (n = xn(n, t)),
            yield t[n],
            e
              ? (n++, n >= t.length - 1 && (e = !1))
              : (n--, n <= 0 && (e = !0));
      }
      function* Tn(t) {
        let e = 0,
          n = 0;
        for (; e < t.length; )
          (e = xn(e, t)), yield t[e], n++, (e += n % 2 ? 2 : -1);
      }
      function* On(t) {
        let e = t.length - 1,
          n = 0;
        for (; e >= 0; ) (e = xn(e, t)), yield t[e], n++, (e += n % 2 ? -2 : 1);
      }
      function* Sn(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) e.push(n);
        for (; e.length > 0; ) {
          const n = xn(e.splice(Math.floor(e.length * Math.random()), 1)[0], t);
          yield t[n];
        }
      }
      function* Cn(t, e = "up", n = 0) {
        switch (
          (r(t.length > 0, "The array must have more than one value in it"), e)
        ) {
          case "up":
            yield* bn(t, vn);
          case "down":
            yield* bn(t, yn);
          case "upDown":
            yield* wn(t, !0);
          case "downUp":
            yield* wn(t, !1);
          case "alternateUp":
            yield* bn(t, Tn);
          case "alternateDown":
            yield* bn(t, On);
          case "random":
            yield* (function* (t) {
              for (;;) {
                const e = Math.floor(Math.random() * t.length);
                yield t[e];
              }
            })(t);
          case "randomOnce":
            yield* bn(t, Sn);
          case "randomWalk":
            yield* (function* (t) {
              let e = Math.floor(Math.random() * t.length);
              for (;;)
                0 === e
                  ? e++
                  : e === t.length - 1 || Math.random() < 0.5
                  ? e--
                  : e++,
                  yield t[e];
            })(t);
        }
      }
      class kn extends mn {
        constructor() {
          super(
            q(kn.getDefaults(), arguments, ["callback", "values", "pattern"])
          ),
            (this.name = "Pattern");
          const t = q(kn.getDefaults(), arguments, [
            "callback",
            "values",
            "pattern",
          ]);
          (this.callback = t.callback),
            (this._values = t.values),
            (this._pattern = Cn(t.values, t.pattern)),
            (this._type = t.pattern);
        }
        static getDefaults() {
          return Object.assign(mn.getDefaults(), {
            pattern: "up",
            values: [],
            callback: K,
          });
        }
        _tick(t) {
          const e = this._pattern.next();
          (this._value = e.value), this.callback(t, this._value);
        }
        get values() {
          return this._values;
        }
        set values(t) {
          (this._values = t), (this.pattern = this._type);
        }
        get value() {
          return this._value;
        }
        get pattern() {
          return this._type;
        }
        set pattern(t) {
          (this._type = t), (this._pattern = Cn(this._values, this._type));
        }
      }
      class An extends _n {
        constructor() {
          super(
            q(An.getDefaults(), arguments, [
              "callback",
              "events",
              "subdivision",
            ])
          ),
            (this.name = "Sequence"),
            (this._part = new gn({
              callback: this._seqCallback.bind(this),
              context: this.context,
            })),
            (this._events = []),
            (this._eventsArray = []);
          const t = q(An.getDefaults(), arguments, [
            "callback",
            "events",
            "subdivision",
          ]);
          (this._subdivision = this.toTicks(t.subdivision)),
            (this.events = t.events),
            (this.loop = t.loop),
            (this.loopStart = t.loopStart),
            (this.loopEnd = t.loopEnd),
            (this.playbackRate = t.playbackRate),
            (this.probability = t.probability),
            (this.humanize = t.humanize),
            (this.mute = t.mute),
            (this.playbackRate = t.playbackRate);
        }
        static getDefaults() {
          return Object.assign(F(_n.getDefaults(), ["value"]), {
            events: [],
            loop: !0,
            loopEnd: 0,
            loopStart: 0,
            subdivision: "8n",
          });
        }
        _seqCallback(t, e) {
          null !== e && this.callback(t, e);
        }
        get events() {
          return this._events;
        }
        set events(t) {
          this.clear(),
            (this._eventsArray = t),
            (this._events = this._createSequence(this._eventsArray)),
            this._eventsUpdated();
        }
        start(t, e) {
          return this._part.start(t, e ? this._indexTime(e) : e), this;
        }
        stop(t) {
          return this._part.stop(t), this;
        }
        get subdivision() {
          return new Lt(this.context, this._subdivision).toSeconds();
        }
        _createSequence(t) {
          return new Proxy(t, {
            get: (t, e) => t[e],
            set: (t, e, n) => (
              b(e) && isFinite(parseInt(e, 10)) && y(n)
                ? (t[e] = this._createSequence(n))
                : (t[e] = n),
              this._eventsUpdated(),
              !0
            ),
          });
        }
        _eventsUpdated() {
          this._part.clear(),
            this._rescheduleSequence(
              this._eventsArray,
              this._subdivision,
              this.startOffset
            ),
            (this.loopEnd = this.loopEnd);
        }
        _rescheduleSequence(t, e, n) {
          t.forEach((t, s) => {
            const i = s * e + n;
            if (y(t)) this._rescheduleSequence(t, e / t.length, i);
            else {
              const e = new Lt(this.context, i, "i").toSeconds();
              this._part.add(e, t);
            }
          });
        }
        _indexTime(t) {
          return new Lt(
            this.context,
            t * this._subdivision + this.startOffset
          ).toSeconds();
        }
        clear() {
          return this._part.clear(), this;
        }
        dispose() {
          return super.dispose(), this._part.dispose(), this;
        }
        get loop() {
          return this._part.loop;
        }
        set loop(t) {
          this._part.loop = t;
        }
        get loopStart() {
          return this._loopStart;
        }
        set loopStart(t) {
          (this._loopStart = t), (this._part.loopStart = this._indexTime(t));
        }
        get loopEnd() {
          return this._loopEnd;
        }
        set loopEnd(t) {
          (this._loopEnd = t),
            (this._part.loopEnd =
              0 === t
                ? this._indexTime(this._eventsArray.length)
                : this._indexTime(t));
        }
        get startOffset() {
          return this._part.startOffset;
        }
        set startOffset(t) {
          this._part.startOffset = t;
        }
        get playbackRate() {
          return this._part.playbackRate;
        }
        set playbackRate(t) {
          this._part.playbackRate = t;
        }
        get probability() {
          return this._part.probability;
        }
        set probability(t) {
          this._part.probability = t;
        }
        get progress() {
          return this._part.progress;
        }
        get humanize() {
          return this._part.humanize;
        }
        set humanize(t) {
          this._part.humanize = t;
        }
        get length() {
          return this._part.length;
        }
      }
      class Dn extends Ct {
        constructor() {
          super(Object.assign(q(Dn.getDefaults(), arguments, ["fade"]))),
            (this.name = "CrossFade"),
            (this._panner = this.context.createStereoPanner()),
            (this._split = this.context.createChannelSplitter(2)),
            (this._g2a = new Ee({
              context: this.context,
            })),
            (this.a = new Mt({
              context: this.context,
              gain: 0,
            })),
            (this.b = new Mt({
              context: this.context,
              gain: 0,
            })),
            (this.output = new Mt({
              context: this.context,
            })),
            (this._internalChannels = [this.a, this.b]);
          const t = q(Dn.getDefaults(), arguments, ["fade"]);
          (this.fade = new Rt({
            context: this.context,
            units: "normalRange",
            value: t.fade,
          })),
            $(this, "fade"),
            this.context.getConstant(1).connect(this._panner),
            this._panner.connect(this._split),
            (this._panner.channelCount = 1),
            (this._panner.channelCountMode = "explicit"),
            At(this._split, this.a.gain, 0),
            At(this._split, this.b.gain, 1),
            this.fade.chain(this._g2a, this._panner.pan),
            this.a.connect(this.output),
            this.b.connect(this.output);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            fade: 0.5,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.a.dispose(),
            this.b.dispose(),
            this.output.dispose(),
            this.fade.dispose(),
            this._g2a.dispose(),
            this._panner.disconnect(),
            this._split.disconnect(),
            this
          );
        }
      }
      class Mn extends Ct {
        constructor(t) {
          super(t),
            (this.name = "Effect"),
            (this._dryWet = new Dn({
              context: this.context,
            })),
            (this.wet = this._dryWet.fade),
            (this.effectSend = new Mt({
              context: this.context,
            })),
            (this.effectReturn = new Mt({
              context: this.context,
            })),
            (this.input = new Mt({
              context: this.context,
            })),
            (this.output = this._dryWet),
            this.input.fan(this._dryWet.a, this.effectSend),
            this.effectReturn.connect(this._dryWet.b),
            this.wet.setValueAtTime(t.wet, 0),
            (this._internalChannels = [this.effectReturn, this.effectSend]),
            $(this, "wet");
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            wet: 1,
          });
        }
        connectEffect(t) {
          return (
            this._internalChannels.push(t),
            this.effectSend.chain(t, this.effectReturn),
            this
          );
        }
        dispose() {
          return (
            super.dispose(),
            this._dryWet.dispose(),
            this.effectSend.dispose(),
            this.effectReturn.dispose(),
            this.wet.dispose(),
            this
          );
        }
      }
      class jn extends Mn {
        constructor(t) {
          super(t),
            (this.name = "LFOEffect"),
            (this._lfo = new Se({
              context: this.context,
              frequency: t.frequency,
              amplitude: t.depth,
            })),
            (this.depth = this._lfo.amplitude),
            (this.frequency = this._lfo.frequency),
            (this.type = t.type),
            $(this, ["frequency", "depth"]);
        }
        static getDefaults() {
          return Object.assign(Mn.getDefaults(), {
            frequency: 1,
            type: "sine",
            depth: 1,
          });
        }
        start(t) {
          return this._lfo.start(t), this;
        }
        stop(t) {
          return this._lfo.stop(t), this;
        }
        sync() {
          return this._lfo.sync(), this;
        }
        unsync() {
          return this._lfo.unsync(), this;
        }
        get type() {
          return this._lfo.type;
        }
        set type(t) {
          this._lfo.type = t;
        }
        dispose() {
          return (
            super.dispose(),
            this._lfo.dispose(),
            this.frequency.dispose(),
            this.depth.dispose(),
            this
          );
        }
      }
      class En extends jn {
        constructor() {
          super(
            q(En.getDefaults(), arguments, [
              "frequency",
              "baseFrequency",
              "octaves",
            ])
          ),
            (this.name = "AutoFilter");
          const t = q(En.getDefaults(), arguments, [
            "frequency",
            "baseFrequency",
            "octaves",
          ]);
          (this.filter = new Xe(
            Object.assign(t.filter, {
              context: this.context,
            })
          )),
            this.connectEffect(this.filter),
            this._lfo.connect(this.filter.frequency),
            (this.octaves = t.octaves),
            (this.baseFrequency = t.baseFrequency);
        }
        static getDefaults() {
          return Object.assign(jn.getDefaults(), {
            baseFrequency: 200,
            octaves: 2.6,
            filter: {
              type: "lowpass",
              rolloff: -12,
              Q: 1,
            },
          });
        }
        get baseFrequency() {
          return this._lfo.min;
        }
        set baseFrequency(t) {
          (this._lfo.min = this.toFrequency(t)), (this.octaves = this._octaves);
        }
        get octaves() {
          return this._octaves;
        }
        set octaves(t) {
          (this._octaves = t), (this._lfo.max = this._lfo.min * Math.pow(2, t));
        }
        dispose() {
          return super.dispose(), this.filter.dispose(), this;
        }
      }
      class Rn extends Ct {
        constructor() {
          super(Object.assign(q(Rn.getDefaults(), arguments, ["pan"]))),
            (this.name = "Panner"),
            (this._panner = this.context.createStereoPanner()),
            (this.input = this._panner),
            (this.output = this._panner);
          const t = q(Rn.getDefaults(), arguments, ["pan"]);
          (this.pan = new St({
            context: this.context,
            param: this._panner.pan,
            value: t.pan,
            minValue: -1,
            maxValue: 1,
          })),
            (this._panner.channelCount = t.channelCount),
            (this._panner.channelCountMode = "explicit"),
            $(this, "pan");
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            pan: 0,
            channelCount: 1,
          });
        }
        dispose() {
          return (
            super.dispose(), this._panner.disconnect(), this.pan.dispose(), this
          );
        }
      }
      class qn extends jn {
        constructor() {
          super(q(qn.getDefaults(), arguments, ["frequency"])),
            (this.name = "AutoPanner");
          const t = q(qn.getDefaults(), arguments, ["frequency"]);
          (this._panner = new Rn({
            context: this.context,
            channelCount: t.channelCount,
          })),
            this.connectEffect(this._panner),
            this._lfo.connect(this._panner.pan),
            (this._lfo.min = -1),
            (this._lfo.max = 1);
        }
        static getDefaults() {
          return Object.assign(jn.getDefaults(), {
            channelCount: 1,
          });
        }
        dispose() {
          return super.dispose(), this._panner.dispose(), this;
        }
      }
      class In extends Ct {
        constructor() {
          super(q(In.getDefaults(), arguments, ["smoothing"])),
            (this.name = "Follower");
          const t = q(In.getDefaults(), arguments, ["smoothing"]);
          (this._abs = this.input =
            new je({
              context: this.context,
            })),
            (this._lowpass = this.output =
              new hn({
                context: this.context,
                frequency: 1 / this.toSeconds(t.smoothing),
                type: "lowpass",
              })),
            this._abs.connect(this._lowpass),
            (this._smoothing = t.smoothing);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            smoothing: 0.05,
          });
        }
        get smoothing() {
          return this._smoothing;
        }
        set smoothing(t) {
          (this._smoothing = t),
            (this._lowpass.frequency = 1 / this.toSeconds(this.smoothing));
        }
        dispose() {
          return (
            super.dispose(), this._abs.dispose(), this._lowpass.dispose(), this
          );
        }
      }
      class Fn extends Mn {
        constructor() {
          super(
            q(Fn.getDefaults(), arguments, [
              "baseFrequency",
              "octaves",
              "sensitivity",
            ])
          ),
            (this.name = "AutoWah");
          const t = q(Fn.getDefaults(), arguments, [
            "baseFrequency",
            "octaves",
            "sensitivity",
          ]);
          (this._follower = new In({
            context: this.context,
            smoothing: t.follower,
          })),
            (this._sweepRange = new Ne({
              context: this.context,
              min: 0,
              max: 1,
              exponent: 0.5,
            })),
            (this._baseFrequency = this.toFrequency(t.baseFrequency)),
            (this._octaves = t.octaves),
            (this._inputBoost = new Mt({
              context: this.context,
            })),
            (this._bandpass = new Xe({
              context: this.context,
              rolloff: -48,
              frequency: 0,
              Q: t.Q,
            })),
            (this._peaking = new Xe({
              context: this.context,
              type: "peaking",
            })),
            (this._peaking.gain.value = t.gain),
            (this.gain = this._peaking.gain),
            (this.Q = this._bandpass.Q),
            this.effectSend.chain(
              this._inputBoost,
              this._follower,
              this._sweepRange
            ),
            this._sweepRange.connect(this._bandpass.frequency),
            this._sweepRange.connect(this._peaking.frequency),
            this.effectSend.chain(
              this._bandpass,
              this._peaking,
              this.effectReturn
            ),
            this._setSweepRange(),
            (this.sensitivity = t.sensitivity),
            $(this, ["gain", "Q"]);
        }
        static getDefaults() {
          return Object.assign(Mn.getDefaults(), {
            baseFrequency: 100,
            octaves: 6,
            sensitivity: 0,
            Q: 2,
            gain: 2,
            follower: 0.2,
          });
        }
        get octaves() {
          return this._octaves;
        }
        set octaves(t) {
          (this._octaves = t), this._setSweepRange();
        }
        get follower() {
          return this._follower.smoothing;
        }
        set follower(t) {
          this._follower.smoothing = t;
        }
        get baseFrequency() {
          return this._baseFrequency;
        }
        set baseFrequency(t) {
          (this._baseFrequency = this.toFrequency(t)), this._setSweepRange();
        }
        get sensitivity() {
          return ct(1 / this._inputBoost.gain.value);
        }
        set sensitivity(t) {
          this._inputBoost.gain.value = 1 / at(t);
        }
        _setSweepRange() {
          (this._sweepRange.min = this._baseFrequency),
            (this._sweepRange.max = Math.min(
              this._baseFrequency * Math.pow(2, this._octaves),
              this.context.sampleRate / 2
            ));
        }
        dispose() {
          return (
            super.dispose(),
            this._follower.dispose(),
            this._sweepRange.dispose(),
            this._bandpass.dispose(),
            this._peaking.dispose(),
            this._inputBoost.dispose(),
            this
          );
        }
      }
      an(
        "bit-crusher",
        "\n\tclass BitCrusherWorklet extends SingleIOProcessor {\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: \"bits\",\n\t\t\t\tdefaultValue: 12,\n\t\t\t\tminValue: 1,\n\t\t\t\tmaxValue: 16,\n\t\t\t\tautomationRate: 'k-rate'\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, _channel, parameters) {\n\t\t\tconst step = Math.pow(0.5, parameters.bits - 1);\n\t\t\tconst val = step * Math.floor(input / step + 0.5);\n\t\t\treturn val;\n\t\t}\n\t}\n"
      );
      class Vn extends Mn {
        constructor() {
          super(q(Vn.getDefaults(), arguments, ["bits"])),
            (this.name = "BitCrusher");
          const t = q(Vn.getDefaults(), arguments, ["bits"]);
          (this._bitCrusherWorklet = new Nn({
            context: this.context,
            bits: t.bits,
          })),
            this.connectEffect(this._bitCrusherWorklet),
            (this.bits = this._bitCrusherWorklet.bits);
        }
        static getDefaults() {
          return Object.assign(Mn.getDefaults(), {
            bits: 4,
          });
        }
        dispose() {
          return super.dispose(), this._bitCrusherWorklet.dispose(), this;
        }
      }
      class Nn extends cn {
        constructor() {
          super(q(Nn.getDefaults(), arguments)),
            (this.name = "BitCrusherWorklet");
          const t = q(Nn.getDefaults(), arguments);
          (this.input = new Mt({
            context: this.context,
          })),
            (this.output = new Mt({
              context: this.context,
            })),
            (this.bits = new St({
              context: this.context,
              value: t.bits,
              units: "positive",
              minValue: 1,
              maxValue: 16,
              param: this._dummyParam,
              swappable: !0,
            }));
        }
        static getDefaults() {
          return Object.assign(cn.getDefaults(), {
            bits: 12,
          });
        }
        _audioWorkletName() {
          return "bit-crusher";
        }
        onReady(t) {
          kt(this.input, t, this.output);
          const e = t.parameters.get("bits");
          this.bits.setParam(e);
        }
        dispose() {
          return (
            super.dispose(),
            this.input.dispose(),
            this.output.dispose(),
            this.bits.dispose(),
            this
          );
        }
      }
      class Pn extends Mn {
        constructor() {
          super(q(Pn.getDefaults(), arguments, ["order"])),
            (this.name = "Chebyshev");
          const t = q(Pn.getDefaults(), arguments, ["order"]);
          (this._shaper = new de({
            context: this.context,
            length: 4096,
          })),
            (this._order = t.order),
            this.connectEffect(this._shaper),
            (this.order = t.order),
            (this.oversample = t.oversample);
        }
        static getDefaults() {
          return Object.assign(Mn.getDefaults(), {
            order: 1,
            oversample: "none",
          });
        }
        _getCoefficient(t, e, n) {
          return (
            n.has(e) ||
              (0 === e
                ? n.set(e, 0)
                : 1 === e
                ? n.set(e, t)
                : n.set(
                    e,
                    2 * t * this._getCoefficient(t, e - 1, n) -
                      this._getCoefficient(t, e - 2, n)
                  )),
            n.get(e)
          );
        }
        get order() {
          return this._order;
        }
        set order(t) {
          (this._order = t),
            this._shaper.setMap((e) => this._getCoefficient(e, t, new Map()));
        }
        get oversample() {
          return this._shaper.oversample;
        }
        set oversample(t) {
          this._shaper.oversample = t;
        }
        dispose() {
          return super.dispose(), this._shaper.dispose(), this;
        }
      }
      class Ln extends Ct {
        constructor() {
          super(q(Ln.getDefaults(), arguments, ["channels"])),
            (this.name = "Split");
          const t = q(Ln.getDefaults(), arguments, ["channels"]);
          (this._splitter =
            this.input =
            this.output =
              this.context.createChannelSplitter(t.channels)),
            (this._internalChannels = [this._splitter]);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            channels: 2,
          });
        }
        dispose() {
          return super.dispose(), this._splitter.disconnect(), this;
        }
      }
      class zn extends Ct {
        constructor() {
          super(q(zn.getDefaults(), arguments, ["channels"])),
            (this.name = "Merge");
          const t = q(zn.getDefaults(), arguments, ["channels"]);
          this._merger =
            this.output =
            this.input =
              this.context.createChannelMerger(t.channels);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            channels: 2,
          });
        }
        dispose() {
          return super.dispose(), this._merger.disconnect(), this;
        }
      }
      class Bn extends Ct {
        constructor(t) {
          super(t),
            (this.name = "StereoEffect"),
            (this.input = new Mt({
              context: this.context,
            })),
            (this.input.channelCount = 2),
            (this.input.channelCountMode = "explicit"),
            (this._dryWet = this.output =
              new Dn({
                context: this.context,
                fade: t.wet,
              })),
            (this.wet = this._dryWet.fade),
            (this._split = new Ln({
              context: this.context,
              channels: 2,
            })),
            (this._merge = new zn({
              context: this.context,
              channels: 2,
            })),
            this.input.connect(this._split),
            this.input.connect(this._dryWet.a),
            this._merge.connect(this._dryWet.b),
            $(this, ["wet"]);
        }
        connectEffectLeft(...t) {
          this._split.connect(t[0], 0, 0),
            kt(...t),
            At(t[t.length - 1], this._merge, 0, 0);
        }
        connectEffectRight(...t) {
          this._split.connect(t[0], 1, 0),
            kt(...t),
            At(t[t.length - 1], this._merge, 0, 1);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            wet: 1,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._dryWet.dispose(),
            this._split.dispose(),
            this._merge.dispose(),
            this
          );
        }
      }
      class Wn extends Bn {
        constructor(t) {
          super(t),
            (this.feedback = new Rt({
              context: this.context,
              value: t.feedback,
              units: "normalRange",
            })),
            (this._feedbackL = new Mt({
              context: this.context,
            })),
            (this._feedbackR = new Mt({
              context: this.context,
            })),
            (this._feedbackSplit = new Ln({
              context: this.context,
              channels: 2,
            })),
            (this._feedbackMerge = new zn({
              context: this.context,
              channels: 2,
            })),
            this._merge.connect(this._feedbackSplit),
            this._feedbackMerge.connect(this._split),
            this._feedbackSplit.connect(this._feedbackL, 0, 0),
            this._feedbackL.connect(this._feedbackMerge, 0, 0),
            this._feedbackSplit.connect(this._feedbackR, 1, 0),
            this._feedbackR.connect(this._feedbackMerge, 0, 1),
            this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain),
            $(this, ["feedback"]);
        }
        static getDefaults() {
          return Object.assign(Bn.getDefaults(), {
            feedback: 0.5,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.feedback.dispose(),
            this._feedbackL.dispose(),
            this._feedbackR.dispose(),
            this._feedbackSplit.dispose(),
            this._feedbackMerge.dispose(),
            this
          );
        }
      }
      class Un extends Wn {
        constructor() {
          super(
            q(Un.getDefaults(), arguments, ["frequency", "delayTime", "depth"])
          ),
            (this.name = "Chorus");
          const t = q(Un.getDefaults(), arguments, [
            "frequency",
            "delayTime",
            "depth",
          ]);
          (this._depth = t.depth),
            (this._delayTime = t.delayTime / 1e3),
            (this._lfoL = new Se({
              context: this.context,
              frequency: t.frequency,
              min: 0,
              max: 1,
            })),
            (this._lfoR = new Se({
              context: this.context,
              frequency: t.frequency,
              min: 0,
              max: 1,
              phase: 180,
            })),
            (this._delayNodeL = new Qt({
              context: this.context,
            })),
            (this._delayNodeR = new Qt({
              context: this.context,
            })),
            (this.frequency = this._lfoL.frequency),
            $(this, ["frequency"]),
            this._lfoL.frequency.connect(this._lfoR.frequency),
            this.connectEffectLeft(this._delayNodeL),
            this.connectEffectRight(this._delayNodeR),
            this._lfoL.connect(this._delayNodeL.delayTime),
            this._lfoR.connect(this._delayNodeR.delayTime),
            (this.depth = this._depth),
            (this.type = t.type),
            (this.spread = t.spread);
        }
        static getDefaults() {
          return Object.assign(Wn.getDefaults(), {
            frequency: 1.5,
            delayTime: 3.5,
            depth: 0.7,
            type: "sine",
            spread: 180,
            feedback: 0,
            wet: 0.5,
          });
        }
        get depth() {
          return this._depth;
        }
        set depth(t) {
          this._depth = t;
          const e = this._delayTime * t;
          (this._lfoL.min = Math.max(this._delayTime - e, 0)),
            (this._lfoL.max = this._delayTime + e),
            (this._lfoR.min = Math.max(this._delayTime - e, 0)),
            (this._lfoR.max = this._delayTime + e);
        }
        get delayTime() {
          return 1e3 * this._delayTime;
        }
        set delayTime(t) {
          (this._delayTime = t / 1e3), (this.depth = this._depth);
        }
        get type() {
          return this._lfoL.type;
        }
        set type(t) {
          (this._lfoL.type = t), (this._lfoR.type = t);
        }
        get spread() {
          return this._lfoR.phase - this._lfoL.phase;
        }
        set spread(t) {
          (this._lfoL.phase = 90 - t / 2), (this._lfoR.phase = t / 2 + 90);
        }
        start(t) {
          return this._lfoL.start(t), this._lfoR.start(t), this;
        }
        stop(t) {
          return this._lfoL.stop(t), this._lfoR.stop(t), this;
        }
        sync() {
          return this._lfoL.sync(), this._lfoR.sync(), this;
        }
        unsync() {
          return this._lfoL.unsync(), this._lfoR.unsync(), this;
        }
        dispose() {
          return (
            super.dispose(),
            this._lfoL.dispose(),
            this._lfoR.dispose(),
            this._delayNodeL.dispose(),
            this._delayNodeR.dispose(),
            this.frequency.dispose(),
            this
          );
        }
      }
      class Gn extends Mn {
        constructor() {
          super(q(Gn.getDefaults(), arguments, ["distortion"])),
            (this.name = "Distortion");
          const t = q(Gn.getDefaults(), arguments, ["distortion"]);
          (this._shaper = new de({
            context: this.context,
            length: 4096,
          })),
            (this._distortion = t.distortion),
            this.connectEffect(this._shaper),
            (this.distortion = t.distortion),
            (this.oversample = t.oversample);
        }
        static getDefaults() {
          return Object.assign(Mn.getDefaults(), {
            distortion: 0.4,
            oversample: "none",
          });
        }
        get distortion() {
          return this._distortion;
        }
        set distortion(t) {
          this._distortion = t;
          const e = 100 * t,
            n = Math.PI / 180;
          this._shaper.setMap((t) =>
            Math.abs(t) < 0.001
              ? 0
              : ((3 + e) * t * 20 * n) / (Math.PI + e * Math.abs(t))
          );
        }
        get oversample() {
          return this._shaper.oversample;
        }
        set oversample(t) {
          this._shaper.oversample = t;
        }
        dispose() {
          return super.dispose(), this._shaper.dispose(), this;
        }
      }
      class Yn extends Mn {
        constructor(t) {
          super(t),
            (this.name = "FeedbackEffect"),
            (this._feedbackGain = new Mt({
              context: this.context,
              gain: t.feedback,
              units: "normalRange",
            })),
            (this.feedback = this._feedbackGain.gain),
            $(this, "feedback"),
            this.effectReturn.chain(this._feedbackGain, this.effectSend);
        }
        static getDefaults() {
          return Object.assign(Mn.getDefaults(), {
            feedback: 0.125,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._feedbackGain.dispose(),
            this.feedback.dispose(),
            this
          );
        }
      }
      class Qn extends Yn {
        constructor() {
          super(q(Qn.getDefaults(), arguments, ["delayTime", "feedback"])),
            (this.name = "FeedbackDelay");
          const t = q(Qn.getDefaults(), arguments, ["delayTime", "feedback"]);
          (this._delayNode = new Qt({
            context: this.context,
            delayTime: t.delayTime,
            maxDelay: t.maxDelay,
          })),
            (this.delayTime = this._delayNode.delayTime),
            this.connectEffect(this._delayNode),
            $(this, "delayTime");
        }
        static getDefaults() {
          return Object.assign(Yn.getDefaults(), {
            delayTime: 0.25,
            maxDelay: 1,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._delayNode.dispose(),
            this.delayTime.dispose(),
            this
          );
        }
      }
      class Zn extends Ct {
        constructor(t) {
          super(t),
            (this.name = "PhaseShiftAllpass"),
            (this.input = new Mt({
              context: this.context,
            })),
            (this.output = new Mt({
              context: this.context,
            })),
            (this.offset90 = new Mt({
              context: this.context,
            }));
          (this._bank0 = this._createAllPassFilterBank([
            0.6923878, 0.9360654322959, 0.988229522686, 0.9987488452737,
          ])),
            (this._bank1 = this._createAllPassFilterBank([
              0.4021921162426, 0.856171088242, 0.9722909545651, 0.9952884791278,
            ])),
            (this._oneSampleDelay = this.context.createIIRFilter(
              [0, 1],
              [1, 0]
            )),
            kt(this.input, ...this._bank0, this._oneSampleDelay, this.output),
            kt(this.input, ...this._bank1, this.offset90);
        }
        _createAllPassFilterBank(t) {
          return t.map((t) => {
            const e = [
              [t * t, 0, -1],
              [1, 0, -t * t],
            ];
            return this.context.createIIRFilter(e[0], e[1]);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.input.dispose(),
            this.output.dispose(),
            this.offset90.dispose(),
            this._bank0.forEach((t) => t.disconnect()),
            this._bank1.forEach((t) => t.disconnect()),
            this._oneSampleDelay.disconnect(),
            this
          );
        }
      }
      class Xn extends Mn {
        constructor() {
          super(q(Xn.getDefaults(), arguments, ["frequency"])),
            (this.name = "FrequencyShifter");
          const t = q(Xn.getDefaults(), arguments, ["frequency"]);
          (this.frequency = new Rt({
            context: this.context,
            units: "frequency",
            value: t.frequency,
            minValue: -this.context.sampleRate / 2,
            maxValue: this.context.sampleRate / 2,
          })),
            (this._sine = new ue({
              context: this.context,
              type: "sine",
            })),
            (this._cosine = new he({
              context: this.context,
              phase: -90,
              type: "sine",
            })),
            (this._sineMultiply = new fe({
              context: this.context,
            })),
            (this._cosineMultiply = new fe({
              context: this.context,
            })),
            (this._negate = new Re({
              context: this.context,
            })),
            (this._add = new we({
              context: this.context,
            })),
            (this._phaseShifter = new Zn({
              context: this.context,
            })),
            this.effectSend.connect(this._phaseShifter),
            this.frequency.fan(this._sine.frequency, this._cosine.frequency),
            this._phaseShifter.offset90.connect(this._cosineMultiply),
            this._cosine.connect(this._cosineMultiply.factor),
            this._phaseShifter.connect(this._sineMultiply),
            this._sine.connect(this._sineMultiply.factor),
            this._sineMultiply.connect(this._negate),
            this._cosineMultiply.connect(this._add),
            this._negate.connect(this._add.addend),
            this._add.connect(this.effectReturn);
          const e = this.immediate();
          this._sine.start(e), this._cosine.start(e);
        }
        static getDefaults() {
          return Object.assign(Mn.getDefaults(), {
            frequency: 0,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.frequency.dispose(),
            this._add.dispose(),
            this._cosine.dispose(),
            this._cosineMultiply.dispose(),
            this._negate.dispose(),
            this._phaseShifter.dispose(),
            this._sine.dispose(),
            this._sineMultiply.dispose(),
            this
          );
        }
      }
      const Hn = [
          1557 / 44100,
          1617 / 44100,
          1491 / 44100,
          1422 / 44100,
          1277 / 44100,
          1356 / 44100,
          1188 / 44100,
          1116 / 44100,
        ],
        $n = [225, 556, 441, 341];
      class Jn extends Bn {
        constructor() {
          super(q(Jn.getDefaults(), arguments, ["roomSize", "dampening"])),
            (this.name = "Freeverb"),
            (this._combFilters = []),
            (this._allpassFiltersL = []),
            (this._allpassFiltersR = []);
          const t = q(Jn.getDefaults(), arguments, ["roomSize", "dampening"]);
          (this.roomSize = new Rt({
            context: this.context,
            value: t.roomSize,
            units: "normalRange",
          })),
            (this._allpassFiltersL = $n.map((t) => {
              const e = this.context.createBiquadFilter();
              return (e.type = "allpass"), (e.frequency.value = t), e;
            })),
            (this._allpassFiltersR = $n.map((t) => {
              const e = this.context.createBiquadFilter();
              return (e.type = "allpass"), (e.frequency.value = t), e;
            })),
            (this._combFilters = Hn.map((e, n) => {
              const s = new ln({
                context: this.context,
                dampening: t.dampening,
                delayTime: e,
              });
              return (
                n < Hn.length / 2
                  ? this.connectEffectLeft(s, ...this._allpassFiltersL)
                  : this.connectEffectRight(s, ...this._allpassFiltersR),
                this.roomSize.connect(s.resonance),
                s
              );
            })),
            $(this, ["roomSize"]);
        }
        static getDefaults() {
          return Object.assign(Bn.getDefaults(), {
            roomSize: 0.7,
            dampening: 3e3,
          });
        }
        get dampening() {
          return this._combFilters[0].dampening;
        }
        set dampening(t) {
          this._combFilters.forEach((e) => (e.dampening = t));
        }
        dispose() {
          return (
            super.dispose(),
            this._allpassFiltersL.forEach((t) => t.disconnect()),
            this._allpassFiltersR.forEach((t) => t.disconnect()),
            this._combFilters.forEach((t) => t.dispose()),
            this.roomSize.dispose(),
            this
          );
        }
      }
      const Kn = [0.06748, 0.06404, 0.08212, 0.09004],
        ts = [0.773, 0.802, 0.753, 0.733],
        es = [347, 113, 37];
      class ns extends Bn {
        constructor() {
          super(q(ns.getDefaults(), arguments, ["roomSize"])),
            (this.name = "JCReverb"),
            (this._allpassFilters = []),
            (this._feedbackCombFilters = []);
          const t = q(ns.getDefaults(), arguments, ["roomSize"]);
          (this.roomSize = new Rt({
            context: this.context,
            value: t.roomSize,
            units: "normalRange",
          })),
            (this._scaleRoomSize = new Te({
              context: this.context,
              min: -0.733,
              max: 0.197,
            })),
            (this._allpassFilters = es.map((t) => {
              const e = this.context.createBiquadFilter();
              return (e.type = "allpass"), (e.frequency.value = t), e;
            })),
            (this._feedbackCombFilters = Kn.map((t, e) => {
              const n = new un({
                context: this.context,
                delayTime: t,
              });
              return (
                this._scaleRoomSize.connect(n.resonance),
                (n.resonance.value = ts[e]),
                e < Kn.length / 2
                  ? this.connectEffectLeft(...this._allpassFilters, n)
                  : this.connectEffectRight(...this._allpassFilters, n),
                n
              );
            })),
            this.roomSize.connect(this._scaleRoomSize),
            $(this, ["roomSize"]);
        }
        static getDefaults() {
          return Object.assign(Bn.getDefaults(), {
            roomSize: 0.5,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._allpassFilters.forEach((t) => t.disconnect()),
            this._feedbackCombFilters.forEach((t) => t.dispose()),
            this.roomSize.dispose(),
            this._scaleRoomSize.dispose(),
            this
          );
        }
      }
      class ss extends Wn {
        constructor(t) {
          super(t),
            this._feedbackL.disconnect(),
            this._feedbackL.connect(this._feedbackMerge, 0, 1),
            this._feedbackR.disconnect(),
            this._feedbackR.connect(this._feedbackMerge, 0, 0),
            $(this, ["feedback"]);
        }
      }
      class is extends ss {
        constructor() {
          super(q(is.getDefaults(), arguments, ["delayTime", "feedback"])),
            (this.name = "PingPongDelay");
          const t = q(is.getDefaults(), arguments, ["delayTime", "feedback"]);
          (this._leftDelay = new Qt({
            context: this.context,
            maxDelay: t.maxDelay,
          })),
            (this._rightDelay = new Qt({
              context: this.context,
              maxDelay: t.maxDelay,
            })),
            (this._rightPreDelay = new Qt({
              context: this.context,
              maxDelay: t.maxDelay,
            })),
            (this.delayTime = new Rt({
              context: this.context,
              units: "time",
              value: t.delayTime,
            })),
            this.connectEffectLeft(this._leftDelay),
            this.connectEffectRight(this._rightPreDelay, this._rightDelay),
            this.delayTime.fan(
              this._leftDelay.delayTime,
              this._rightDelay.delayTime,
              this._rightPreDelay.delayTime
            ),
            this._feedbackL.disconnect(),
            this._feedbackL.connect(this._rightDelay),
            $(this, ["delayTime"]);
        }
        static getDefaults() {
          return Object.assign(ss.getDefaults(), {
            delayTime: 0.25,
            maxDelay: 1,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._leftDelay.dispose(),
            this._rightDelay.dispose(),
            this._rightPreDelay.dispose(),
            this.delayTime.dispose(),
            this
          );
        }
      }
      class os extends Yn {
        constructor() {
          super(q(os.getDefaults(), arguments, ["pitch"])),
            (this.name = "PitchShift");
          const t = q(os.getDefaults(), arguments, ["pitch"]);
          (this._frequency = new Rt({
            context: this.context,
          })),
            (this._delayA = new Qt({
              maxDelay: 1,
              context: this.context,
            })),
            (this._lfoA = new Se({
              context: this.context,
              min: 0,
              max: 0.1,
              type: "sawtooth",
            }).connect(this._delayA.delayTime)),
            (this._delayB = new Qt({
              maxDelay: 1,
              context: this.context,
            })),
            (this._lfoB = new Se({
              context: this.context,
              min: 0,
              max: 0.1,
              type: "sawtooth",
              phase: 180,
            }).connect(this._delayB.delayTime)),
            (this._crossFade = new Dn({
              context: this.context,
            })),
            (this._crossFadeLFO = new Se({
              context: this.context,
              min: 0,
              max: 1,
              type: "triangle",
              phase: 90,
            }).connect(this._crossFade.fade)),
            (this._feedbackDelay = new Qt({
              delayTime: t.delayTime,
              context: this.context,
            })),
            (this.delayTime = this._feedbackDelay.delayTime),
            $(this, "delayTime"),
            (this._pitch = t.pitch),
            (this._windowSize = t.windowSize),
            this._delayA.connect(this._crossFade.a),
            this._delayB.connect(this._crossFade.b),
            this._frequency.fan(
              this._lfoA.frequency,
              this._lfoB.frequency,
              this._crossFadeLFO.frequency
            ),
            this.effectSend.fan(this._delayA, this._delayB),
            this._crossFade.chain(this._feedbackDelay, this.effectReturn);
          const e = this.now();
          this._lfoA.start(e),
            this._lfoB.start(e),
            this._crossFadeLFO.start(e),
            (this.windowSize = this._windowSize);
        }
        static getDefaults() {
          return Object.assign(Yn.getDefaults(), {
            pitch: 0,
            windowSize: 0.1,
            delayTime: 0,
            feedback: 0,
          });
        }
        get pitch() {
          return this._pitch;
        }
        set pitch(t) {
          this._pitch = t;
          let e = 0;
          t < 0
            ? ((this._lfoA.min = 0),
              (this._lfoA.max = this._windowSize),
              (this._lfoB.min = 0),
              (this._lfoB.max = this._windowSize),
              (e = ut(t - 1) + 1))
            : ((this._lfoA.min = this._windowSize),
              (this._lfoA.max = 0),
              (this._lfoB.min = this._windowSize),
              (this._lfoB.max = 0),
              (e = ut(t) - 1)),
            (this._frequency.value = e * (1.2 / this._windowSize));
        }
        get windowSize() {
          return this._windowSize;
        }
        set windowSize(t) {
          (this._windowSize = this.toSeconds(t)), (this.pitch = this._pitch);
        }
        dispose() {
          return (
            super.dispose(),
            this._frequency.dispose(),
            this._delayA.dispose(),
            this._delayB.dispose(),
            this._lfoA.dispose(),
            this._lfoB.dispose(),
            this._crossFade.dispose(),
            this._crossFadeLFO.dispose(),
            this._feedbackDelay.dispose(),
            this
          );
        }
      }
      class rs extends Bn {
        constructor() {
          super(
            q(rs.getDefaults(), arguments, [
              "frequency",
              "octaves",
              "baseFrequency",
            ])
          ),
            (this.name = "Phaser");
          const t = q(rs.getDefaults(), arguments, [
            "frequency",
            "octaves",
            "baseFrequency",
          ]);
          (this._lfoL = new Se({
            context: this.context,
            frequency: t.frequency,
            min: 0,
            max: 1,
          })),
            (this._lfoR = new Se({
              context: this.context,
              frequency: t.frequency,
              min: 0,
              max: 1,
              phase: 180,
            })),
            (this._baseFrequency = this.toFrequency(t.baseFrequency)),
            (this._octaves = t.octaves),
            (this.Q = new Rt({
              context: this.context,
              value: t.Q,
              units: "positive",
            })),
            (this._filtersL = this._makeFilters(t.stages, this._lfoL)),
            (this._filtersR = this._makeFilters(t.stages, this._lfoR)),
            (this.frequency = this._lfoL.frequency),
            (this.frequency.value = t.frequency),
            this.connectEffectLeft(...this._filtersL),
            this.connectEffectRight(...this._filtersR),
            this._lfoL.frequency.connect(this._lfoR.frequency),
            (this.baseFrequency = t.baseFrequency),
            (this.octaves = t.octaves),
            this._lfoL.start(),
            this._lfoR.start(),
            $(this, ["frequency", "Q"]);
        }
        static getDefaults() {
          return Object.assign(Bn.getDefaults(), {
            frequency: 0.5,
            octaves: 3,
            stages: 10,
            Q: 10,
            baseFrequency: 350,
          });
        }
        _makeFilters(t, e) {
          const n = [];
          for (let s = 0; s < t; s++) {
            const t = this.context.createBiquadFilter();
            (t.type = "allpass"),
              this.Q.connect(t.Q),
              e.connect(t.frequency),
              n.push(t);
          }
          return n;
        }
        get octaves() {
          return this._octaves;
        }
        set octaves(t) {
          this._octaves = t;
          const e = this._baseFrequency * Math.pow(2, t);
          (this._lfoL.max = e), (this._lfoR.max = e);
        }
        get baseFrequency() {
          return this._baseFrequency;
        }
        set baseFrequency(t) {
          (this._baseFrequency = this.toFrequency(t)),
            (this._lfoL.min = this._baseFrequency),
            (this._lfoR.min = this._baseFrequency),
            (this.octaves = this._octaves);
        }
        dispose() {
          return (
            super.dispose(),
            this.Q.dispose(),
            this._lfoL.dispose(),
            this._lfoR.dispose(),
            this._filtersL.forEach((t) => t.disconnect()),
            this._filtersR.forEach((t) => t.disconnect()),
            this.frequency.dispose(),
            this
          );
        }
      }
      class as extends Mn {
        constructor() {
          super(q(as.getDefaults(), arguments, ["decay"])),
            (this.name = "Reverb"),
            (this._convolver = this.context.createConvolver()),
            (this.ready = Promise.resolve());
          const t = q(as.getDefaults(), arguments, ["decay"]);
          (this._decay = t.decay),
            (this._preDelay = t.preDelay),
            this.generate(),
            this.connectEffect(this._convolver);
        }
        static getDefaults() {
          return Object.assign(Mn.getDefaults(), {
            decay: 1.5,
            preDelay: 0.01,
          });
        }
        get decay() {
          return this._decay;
        }
        set decay(t) {
          a((t = this.toSeconds(t)), 0.001), (this._decay = t), this.generate();
        }
        get preDelay() {
          return this._preDelay;
        }
        set preDelay(t) {
          a((t = this.toSeconds(t)), 0), (this._preDelay = t), this.generate();
        }
        generate() {
          return S(this, void 0, void 0, function* () {
            const t = this.ready,
              e = new et(
                2,
                this._decay + this._preDelay,
                this.context.sampleRate
              ),
              n = new ie({
                context: e,
              }),
              s = new ie({
                context: e,
              }),
              i = new zn({
                context: e,
              });
            n.connect(i, 0, 0), s.connect(i, 0, 1);
            const o = new Mt({
              context: e,
            }).toDestination();
            i.connect(o),
              n.start(0),
              s.start(0),
              o.gain.setValueAtTime(0, 0),
              o.gain.setValueAtTime(1, this._preDelay),
              o.gain.exponentialApproachValueAtTime(
                0,
                this._preDelay,
                this.decay
              );
            const r = e.render();
            return (
              (this.ready = r.then(K)),
              yield t,
              (this._convolver.buffer = (yield r).get()),
              this
            );
          });
        }
        dispose() {
          return super.dispose(), this._convolver.disconnect(), this;
        }
      }
      class cs extends Ct {
        constructor() {
          super(q(cs.getDefaults(), arguments)),
            (this.name = "MidSideSplit"),
            (this._split = this.input =
              new Ln({
                channels: 2,
                context: this.context,
              })),
            (this._midAdd = new we({
              context: this.context,
            })),
            (this.mid = new fe({
              context: this.context,
              value: Math.SQRT1_2,
            })),
            (this._sideSubtract = new qe({
              context: this.context,
            })),
            (this.side = new fe({
              context: this.context,
              value: Math.SQRT1_2,
            })),
            this._split.connect(this._midAdd, 0),
            this._split.connect(this._midAdd.addend, 1),
            this._split.connect(this._sideSubtract, 0),
            this._split.connect(this._sideSubtract.subtrahend, 1),
            this._midAdd.connect(this.mid),
            this._sideSubtract.connect(this.side);
        }
        dispose() {
          return (
            super.dispose(),
            this.mid.dispose(),
            this.side.dispose(),
            this._midAdd.dispose(),
            this._sideSubtract.dispose(),
            this._split.dispose(),
            this
          );
        }
      }
      class us extends Ct {
        constructor() {
          super(q(us.getDefaults(), arguments)),
            (this.name = "MidSideMerge"),
            (this.mid = new Mt({
              context: this.context,
            })),
            (this.side = new Mt({
              context: this.context,
            })),
            (this._left = new we({
              context: this.context,
            })),
            (this._leftMult = new fe({
              context: this.context,
              value: Math.SQRT1_2,
            })),
            (this._right = new qe({
              context: this.context,
            })),
            (this._rightMult = new fe({
              context: this.context,
              value: Math.SQRT1_2,
            })),
            (this._merge = this.output =
              new zn({
                context: this.context,
              })),
            this.mid.fan(this._left),
            this.side.connect(this._left.addend),
            this.mid.connect(this._right),
            this.side.connect(this._right.subtrahend),
            this._left.connect(this._leftMult),
            this._right.connect(this._rightMult),
            this._leftMult.connect(this._merge, 0, 0),
            this._rightMult.connect(this._merge, 0, 1);
        }
        dispose() {
          return (
            super.dispose(),
            this.mid.dispose(),
            this.side.dispose(),
            this._leftMult.dispose(),
            this._rightMult.dispose(),
            this._left.dispose(),
            this._right.dispose(),
            this
          );
        }
      }
      class hs extends Mn {
        constructor(t) {
          super(t),
            (this.name = "MidSideEffect"),
            (this._midSideMerge = new us({
              context: this.context,
            })),
            (this._midSideSplit = new cs({
              context: this.context,
            })),
            (this._midSend = this._midSideSplit.mid),
            (this._sideSend = this._midSideSplit.side),
            (this._midReturn = this._midSideMerge.mid),
            (this._sideReturn = this._midSideMerge.side),
            this.effectSend.connect(this._midSideSplit),
            this._midSideMerge.connect(this.effectReturn);
        }
        connectEffectMid(...t) {
          this._midSend.chain(...t, this._midReturn);
        }
        connectEffectSide(...t) {
          this._sideSend.chain(...t, this._sideReturn);
        }
        dispose() {
          return (
            super.dispose(),
            this._midSideSplit.dispose(),
            this._midSideMerge.dispose(),
            this._midSend.dispose(),
            this._sideSend.dispose(),
            this._midReturn.dispose(),
            this._sideReturn.dispose(),
            this
          );
        }
      }
      class ls extends hs {
        constructor() {
          super(q(ls.getDefaults(), arguments, ["width"])),
            (this.name = "StereoWidener");
          const t = q(ls.getDefaults(), arguments, ["width"]);
          (this.width = new Rt({
            context: this.context,
            value: t.width,
            units: "normalRange",
          })),
            $(this, ["width"]),
            (this._twoTimesWidthMid = new fe({
              context: this.context,
              value: 2,
            })),
            (this._twoTimesWidthSide = new fe({
              context: this.context,
              value: 2,
            })),
            (this._midMult = new fe({
              context: this.context,
            })),
            this._twoTimesWidthMid.connect(this._midMult.factor),
            this.connectEffectMid(this._midMult),
            (this._oneMinusWidth = new qe({
              context: this.context,
            })),
            this._oneMinusWidth.connect(this._twoTimesWidthMid),
            At(this.context.getConstant(1), this._oneMinusWidth),
            this.width.connect(this._oneMinusWidth.subtrahend),
            (this._sideMult = new fe({
              context: this.context,
            })),
            this.width.connect(this._twoTimesWidthSide),
            this._twoTimesWidthSide.connect(this._sideMult.factor),
            this.connectEffectSide(this._sideMult);
        }
        static getDefaults() {
          return Object.assign(hs.getDefaults(), {
            width: 0.5,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.width.dispose(),
            this._midMult.dispose(),
            this._sideMult.dispose(),
            this._twoTimesWidthMid.dispose(),
            this._twoTimesWidthSide.dispose(),
            this._oneMinusWidth.dispose(),
            this
          );
        }
      }
      class ds extends Bn {
        constructor() {
          super(q(ds.getDefaults(), arguments, ["frequency", "depth"])),
            (this.name = "Tremolo");
          const t = q(ds.getDefaults(), arguments, ["frequency", "depth"]);
          (this._lfoL = new Se({
            context: this.context,
            type: t.type,
            min: 1,
            max: 0,
          })),
            (this._lfoR = new Se({
              context: this.context,
              type: t.type,
              min: 1,
              max: 0,
            })),
            (this._amplitudeL = new Mt({
              context: this.context,
            })),
            (this._amplitudeR = new Mt({
              context: this.context,
            })),
            (this.frequency = new Rt({
              context: this.context,
              value: t.frequency,
              units: "frequency",
            })),
            (this.depth = new Rt({
              context: this.context,
              value: t.depth,
              units: "normalRange",
            })),
            $(this, ["frequency", "depth"]),
            this.connectEffectLeft(this._amplitudeL),
            this.connectEffectRight(this._amplitudeR),
            this._lfoL.connect(this._amplitudeL.gain),
            this._lfoR.connect(this._amplitudeR.gain),
            this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency),
            this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude),
            (this.spread = t.spread);
        }
        static getDefaults() {
          return Object.assign(Bn.getDefaults(), {
            frequency: 10,
            type: "sine",
            depth: 0.5,
            spread: 180,
          });
        }
        start(t) {
          return this._lfoL.start(t), this._lfoR.start(t), this;
        }
        stop(t) {
          return this._lfoL.stop(t), this._lfoR.stop(t), this;
        }
        sync() {
          return (
            this._lfoL.sync(),
            this._lfoR.sync(),
            this.context.transport.syncSignal(this.frequency),
            this
          );
        }
        unsync() {
          return (
            this._lfoL.unsync(),
            this._lfoR.unsync(),
            this.context.transport.unsyncSignal(this.frequency),
            this
          );
        }
        get type() {
          return this._lfoL.type;
        }
        set type(t) {
          (this._lfoL.type = t), (this._lfoR.type = t);
        }
        get spread() {
          return this._lfoR.phase - this._lfoL.phase;
        }
        set spread(t) {
          (this._lfoL.phase = 90 - t / 2), (this._lfoR.phase = t / 2 + 90);
        }
        dispose() {
          return (
            super.dispose(),
            this._lfoL.dispose(),
            this._lfoR.dispose(),
            this._amplitudeL.dispose(),
            this._amplitudeR.dispose(),
            this.frequency.dispose(),
            this.depth.dispose(),
            this
          );
        }
      }
      class ps extends Mn {
        constructor() {
          super(q(ps.getDefaults(), arguments, ["frequency", "depth"])),
            (this.name = "Vibrato");
          const t = q(ps.getDefaults(), arguments, ["frequency", "depth"]);
          (this._delayNode = new Qt({
            context: this.context,
            delayTime: 0,
            maxDelay: t.maxDelay,
          })),
            (this._lfo = new Se({
              context: this.context,
              type: t.type,
              min: 0,
              max: t.maxDelay,
              frequency: t.frequency,
              phase: -90,
            })
              .start()
              .connect(this._delayNode.delayTime)),
            (this.frequency = this._lfo.frequency),
            (this.depth = this._lfo.amplitude),
            (this.depth.value = t.depth),
            $(this, ["frequency", "depth"]),
            this.effectSend.chain(this._delayNode, this.effectReturn);
        }
        static getDefaults() {
          return Object.assign(Mn.getDefaults(), {
            maxDelay: 0.005,
            frequency: 5,
            depth: 0.1,
            type: "sine",
          });
        }
        get type() {
          return this._lfo.type;
        }
        set type(t) {
          this._lfo.type = t;
        }
        dispose() {
          return (
            super.dispose(),
            this._delayNode.dispose(),
            this._lfo.dispose(),
            this.frequency.dispose(),
            this.depth.dispose(),
            this
          );
        }
      }
      class fs extends Ct {
        constructor() {
          super(q(fs.getDefaults(), arguments, ["type", "size"])),
            (this.name = "Analyser"),
            (this._analysers = []),
            (this._buffers = []);
          const t = q(fs.getDefaults(), arguments, ["type", "size"]);
          (this.input =
            this.output =
            this._gain =
              new Mt({
                context: this.context,
              })),
            (this._split = new Ln({
              context: this.context,
              channels: t.channels,
            })),
            this.input.connect(this._split),
            a(t.channels, 1);
          for (let e = 0; e < t.channels; e++)
            (this._analysers[e] = this.context.createAnalyser()),
              this._split.connect(this._analysers[e], e, 0);
          (this.size = t.size), (this.type = t.type);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            size: 1024,
            smoothing: 0.8,
            type: "fft",
            channels: 1,
          });
        }
        getValue() {
          return (
            this._analysers.forEach((t, e) => {
              const n = this._buffers[e];
              "fft" === this._type
                ? t.getFloatFrequencyData(n)
                : "waveform" === this._type && t.getFloatTimeDomainData(n);
            }),
            1 === this.channels ? this._buffers[0] : this._buffers
          );
        }
        get size() {
          return this._analysers[0].frequencyBinCount;
        }
        set size(t) {
          this._analysers.forEach((e, n) => {
            (e.fftSize = 2 * t), (this._buffers[n] = new Float32Array(t));
          });
        }
        get channels() {
          return this._analysers.length;
        }
        get type() {
          return this._type;
        }
        set type(t) {
          r("waveform" === t || "fft" === t, "Analyser: invalid type: " + t),
            (this._type = t);
        }
        get smoothing() {
          return this._analysers[0].smoothingTimeConstant;
        }
        set smoothing(t) {
          this._analysers.forEach((e) => (e.smoothingTimeConstant = t));
        }
        dispose() {
          return (
            super.dispose(),
            this._analysers.forEach((t) => t.disconnect()),
            this._split.dispose(),
            this._gain.dispose(),
            this
          );
        }
      }
      class _s extends Ct {
        constructor() {
          super(q(_s.getDefaults(), arguments)),
            (this.name = "MeterBase"),
            (this.input =
              this.output =
              this._analyser =
                new fs({
                  context: this.context,
                  size: 256,
                  type: "waveform",
                }));
        }
        dispose() {
          return super.dispose(), this._analyser.dispose(), this;
        }
      }
      class ms extends _s {
        constructor() {
          super(q(ms.getDefaults(), arguments, ["smoothing"])),
            (this.name = "Meter"),
            (this._rms = 0);
          const t = q(ms.getDefaults(), arguments, ["smoothing"]);
          (this.input =
            this.output =
            this._analyser =
              new fs({
                context: this.context,
                size: 256,
                type: "waveform",
                channels: t.channels,
              })),
            (this.smoothing = t.smoothing),
            (this.normalRange = t.normalRange);
        }
        static getDefaults() {
          return Object.assign(_s.getDefaults(), {
            smoothing: 0.8,
            normalRange: !1,
            channels: 1,
          });
        }
        getLevel() {
          return (
            d("'getLevel' has been changed to 'getValue'"), this.getValue()
          );
        }
        getValue() {
          const t = this._analyser.getValue(),
            e = (1 === this.channels ? [t] : t).map((t) => {
              const e = t.reduce((t, e) => t + e * e, 0),
                n = Math.sqrt(e / t.length);
              return (
                (this._rms = Math.max(n, this._rms * this.smoothing)),
                this.normalRange ? this._rms : ct(this._rms)
              );
            });
          return 1 === this.channels ? e[0] : e;
        }
        get channels() {
          return this._analyser.channels;
        }
        dispose() {
          return super.dispose(), this._analyser.dispose(), this;
        }
      }
      class gs extends _s {
        constructor() {
          super(q(gs.getDefaults(), arguments, ["size"])), (this.name = "FFT");
          const t = q(gs.getDefaults(), arguments, ["size"]);
          (this.normalRange = t.normalRange),
            (this._analyser.type = "fft"),
            (this.size = t.size);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            normalRange: !1,
            size: 1024,
            smoothing: 0.8,
          });
        }
        getValue() {
          return this._analyser
            .getValue()
            .map((t) => (this.normalRange ? at(t) : t));
        }
        get size() {
          return this._analyser.size;
        }
        set size(t) {
          this._analyser.size = t;
        }
        get smoothing() {
          return this._analyser.smoothing;
        }
        set smoothing(t) {
          this._analyser.smoothing = t;
        }
        getFrequencyOfIndex(t) {
          return (
            r(
              0 <= t && t < this.size,
              "index must be greater than or equal to 0 and less than " +
                this.size
            ),
            (t * this.context.sampleRate) / (2 * this.size)
          );
        }
      }
      class vs extends _s {
        constructor() {
          super(q(vs.getDefaults(), arguments)),
            (this.name = "DCMeter"),
            (this._analyser.type = "waveform"),
            (this._analyser.size = 256);
        }
        getValue() {
          return this._analyser.getValue()[0];
        }
      }
      class ys extends _s {
        constructor() {
          super(q(ys.getDefaults(), arguments, ["size"])),
            (this.name = "Waveform");
          const t = q(ys.getDefaults(), arguments, ["size"]);
          (this._analyser.type = "waveform"), (this.size = t.size);
        }
        static getDefaults() {
          return Object.assign(_s.getDefaults(), {
            size: 1024,
          });
        }
        getValue() {
          return this._analyser.getValue();
        }
        get size() {
          return this._analyser.size;
        }
        set size(t) {
          this._analyser.size = t;
        }
      }
      class bs extends Ct {
        constructor() {
          super(q(bs.getDefaults(), arguments, ["solo"])), (this.name = "Solo");
          const t = q(bs.getDefaults(), arguments, ["solo"]);
          (this.input = this.output =
            new Mt({
              context: this.context,
            })),
            bs._allSolos.has(this.context) ||
              bs._allSolos.set(this.context, new Set()),
            bs._allSolos.get(this.context).add(this),
            (this.solo = t.solo);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            solo: !1,
          });
        }
        get solo() {
          return this._isSoloed();
        }
        set solo(t) {
          t ? this._addSolo() : this._removeSolo(),
            bs._allSolos.get(this.context).forEach((t) => t._updateSolo());
        }
        get muted() {
          return 0 === this.input.gain.value;
        }
        _addSolo() {
          bs._soloed.has(this.context) ||
            bs._soloed.set(this.context, new Set()),
            bs._soloed.get(this.context).add(this);
        }
        _removeSolo() {
          bs._soloed.has(this.context) &&
            bs._soloed.get(this.context).delete(this);
        }
        _isSoloed() {
          return (
            bs._soloed.has(this.context) &&
            bs._soloed.get(this.context).has(this)
          );
        }
        _noSolos() {
          return (
            !bs._soloed.has(this.context) ||
            (bs._soloed.has(this.context) &&
              0 === bs._soloed.get(this.context).size)
          );
        }
        _updateSolo() {
          this._isSoloed() || this._noSolos()
            ? (this.input.gain.value = 1)
            : (this.input.gain.value = 0);
        }
        dispose() {
          return (
            super.dispose(),
            bs._allSolos.get(this.context).delete(this),
            this._removeSolo(),
            this
          );
        }
      }
      (bs._allSolos = new Map()), (bs._soloed = new Map());
      class xs extends Ct {
        constructor() {
          super(q(xs.getDefaults(), arguments, ["pan", "volume"])),
            (this.name = "PanVol");
          const t = q(xs.getDefaults(), arguments, ["pan", "volume"]);
          (this._panner = this.input =
            new Rn({
              context: this.context,
              pan: t.pan,
              channelCount: t.channelCount,
            })),
            (this.pan = this._panner.pan),
            (this._volume = this.output =
              new Zt({
                context: this.context,
                volume: t.volume,
              })),
            (this.volume = this._volume.volume),
            this._panner.connect(this._volume),
            (this.mute = t.mute),
            $(this, ["pan", "volume"]);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            mute: !1,
            pan: 0,
            volume: 0,
            channelCount: 1,
          });
        }
        get mute() {
          return this._volume.mute;
        }
        set mute(t) {
          this._volume.mute = t;
        }
        dispose() {
          return (
            super.dispose(),
            this._panner.dispose(),
            this.pan.dispose(),
            this._volume.dispose(),
            this.volume.dispose(),
            this
          );
        }
      }
      class ws extends Ct {
        constructor() {
          super(q(ws.getDefaults(), arguments, ["volume", "pan"])),
            (this.name = "Channel");
          const t = q(ws.getDefaults(), arguments, ["volume", "pan"]);
          (this._solo = this.input =
            new bs({
              solo: t.solo,
              context: this.context,
            })),
            (this._panVol = this.output =
              new xs({
                context: this.context,
                pan: t.pan,
                volume: t.volume,
                mute: t.mute,
                channelCount: t.channelCount,
              })),
            (this.pan = this._panVol.pan),
            (this.volume = this._panVol.volume),
            this._solo.connect(this._panVol),
            $(this, ["pan", "volume"]);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            pan: 0,
            volume: 0,
            mute: !1,
            solo: !1,
            channelCount: 1,
          });
        }
        get solo() {
          return this._solo.solo;
        }
        set solo(t) {
          this._solo.solo = t;
        }
        get muted() {
          return this._solo.muted || this.mute;
        }
        get mute() {
          return this._panVol.mute;
        }
        set mute(t) {
          this._panVol.mute = t;
        }
        _getBus(t) {
          return (
            ws.buses.has(t) ||
              ws.buses.set(
                t,
                new Mt({
                  context: this.context,
                })
              ),
            ws.buses.get(t)
          );
        }
        send(t, e = 0) {
          const n = this._getBus(t),
            s = new Mt({
              context: this.context,
              units: "decibels",
              gain: e,
            });
          return this.connect(s), s.connect(n), s;
        }
        receive(t) {
          return this._getBus(t).connect(this), this;
        }
        dispose() {
          return (
            super.dispose(),
            this._panVol.dispose(),
            this.pan.dispose(),
            this.volume.dispose(),
            this._solo.dispose(),
            this
          );
        }
      }
      ws.buses = new Map();
      class Ts extends Ct {
        constructor() {
          super(
            q(Ts.getDefaults(), arguments, ["lowFrequency", "highFrequency"])
          ),
            (this.name = "MultibandSplit"),
            (this.input = new Mt({
              context: this.context,
            })),
            (this.output = void 0),
            (this.low = new Xe({
              context: this.context,
              frequency: 0,
              type: "lowpass",
            })),
            (this._lowMidFilter = new Xe({
              context: this.context,
              frequency: 0,
              type: "highpass",
            })),
            (this.mid = new Xe({
              context: this.context,
              frequency: 0,
              type: "lowpass",
            })),
            (this.high = new Xe({
              context: this.context,
              frequency: 0,
              type: "highpass",
            })),
            (this._internalChannels = [this.low, this.mid, this.high]);
          const t = q(Ts.getDefaults(), arguments, [
            "lowFrequency",
            "highFrequency",
          ]);
          (this.lowFrequency = new Rt({
            context: this.context,
            units: "frequency",
            value: t.lowFrequency,
          })),
            (this.highFrequency = new Rt({
              context: this.context,
              units: "frequency",
              value: t.highFrequency,
            })),
            (this.Q = new Rt({
              context: this.context,
              units: "positive",
              value: t.Q,
            })),
            this.input.fan(this.low, this.high),
            this.input.chain(this._lowMidFilter, this.mid),
            this.lowFrequency.fan(
              this.low.frequency,
              this._lowMidFilter.frequency
            ),
            this.highFrequency.fan(this.mid.frequency, this.high.frequency),
            this.Q.connect(this.low.Q),
            this.Q.connect(this._lowMidFilter.Q),
            this.Q.connect(this.mid.Q),
            this.Q.connect(this.high.Q),
            $(this, ["high", "mid", "low", "highFrequency", "lowFrequency"]);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            Q: 1,
            highFrequency: 2500,
            lowFrequency: 400,
          });
        }
        dispose() {
          return (
            super.dispose(),
            J(this, ["high", "mid", "low", "highFrequency", "lowFrequency"]),
            this.low.dispose(),
            this._lowMidFilter.dispose(),
            this.mid.dispose(),
            this.high.dispose(),
            this.lowFrequency.dispose(),
            this.highFrequency.dispose(),
            this.Q.dispose(),
            this
          );
        }
      }
      class Os extends Ct {
        constructor() {
          super(...arguments),
            (this.name = "Listener"),
            (this.positionX = new St({
              context: this.context,
              param: this.context.rawContext.listener.positionX,
            })),
            (this.positionY = new St({
              context: this.context,
              param: this.context.rawContext.listener.positionY,
            })),
            (this.positionZ = new St({
              context: this.context,
              param: this.context.rawContext.listener.positionZ,
            })),
            (this.forwardX = new St({
              context: this.context,
              param: this.context.rawContext.listener.forwardX,
            })),
            (this.forwardY = new St({
              context: this.context,
              param: this.context.rawContext.listener.forwardY,
            })),
            (this.forwardZ = new St({
              context: this.context,
              param: this.context.rawContext.listener.forwardZ,
            })),
            (this.upX = new St({
              context: this.context,
              param: this.context.rawContext.listener.upX,
            })),
            (this.upY = new St({
              context: this.context,
              param: this.context.rawContext.listener.upY,
            })),
            (this.upZ = new St({
              context: this.context,
              param: this.context.rawContext.listener.upZ,
            }));
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            forwardX: 0,
            forwardY: 0,
            forwardZ: -1,
            upX: 0,
            upY: 1,
            upZ: 0,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.positionX.dispose(),
            this.positionY.dispose(),
            this.positionZ.dispose(),
            this.forwardX.dispose(),
            this.forwardY.dispose(),
            this.forwardZ.dispose(),
            this.upX.dispose(),
            this.upY.dispose(),
            this.upZ.dispose(),
            this
          );
        }
      }
      G((t) => {
        t.listener = new Os({
          context: t,
        });
      }),
        Q((t) => {
          t.listener.dispose();
        });
      class Ss extends Ct {
        constructor() {
          super(
            q(Ss.getDefaults(), arguments, [
              "positionX",
              "positionY",
              "positionZ",
            ])
          ),
            (this.name = "Panner3D");
          const t = q(Ss.getDefaults(), arguments, [
            "positionX",
            "positionY",
            "positionZ",
          ]);
          (this._panner =
            this.input =
            this.output =
              this.context.createPanner()),
            (this.panningModel = t.panningModel),
            (this.maxDistance = t.maxDistance),
            (this.distanceModel = t.distanceModel),
            (this.coneOuterGain = t.coneOuterGain),
            (this.coneOuterAngle = t.coneOuterAngle),
            (this.coneInnerAngle = t.coneInnerAngle),
            (this.refDistance = t.refDistance),
            (this.rolloffFactor = t.rolloffFactor),
            (this.positionX = new St({
              context: this.context,
              param: this._panner.positionX,
              value: t.positionX,
            })),
            (this.positionY = new St({
              context: this.context,
              param: this._panner.positionY,
              value: t.positionY,
            })),
            (this.positionZ = new St({
              context: this.context,
              param: this._panner.positionZ,
              value: t.positionZ,
            })),
            (this.orientationX = new St({
              context: this.context,
              param: this._panner.orientationX,
              value: t.orientationX,
            })),
            (this.orientationY = new St({
              context: this.context,
              param: this._panner.orientationY,
              value: t.orientationY,
            })),
            (this.orientationZ = new St({
              context: this.context,
              param: this._panner.orientationZ,
              value: t.orientationZ,
            }));
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            coneInnerAngle: 360,
            coneOuterAngle: 360,
            coneOuterGain: 0,
            distanceModel: "inverse",
            maxDistance: 1e4,
            orientationX: 0,
            orientationY: 0,
            orientationZ: 0,
            panningModel: "equalpower",
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            refDistance: 1,
            rolloffFactor: 1,
          });
        }
        setPosition(t, e, n) {
          return (
            (this.positionX.value = t),
            (this.positionY.value = e),
            (this.positionZ.value = n),
            this
          );
        }
        setOrientation(t, e, n) {
          return (
            (this.orientationX.value = t),
            (this.orientationY.value = e),
            (this.orientationZ.value = n),
            this
          );
        }
        get panningModel() {
          return this._panner.panningModel;
        }
        set panningModel(t) {
          this._panner.panningModel = t;
        }
        get refDistance() {
          return this._panner.refDistance;
        }
        set refDistance(t) {
          this._panner.refDistance = t;
        }
        get rolloffFactor() {
          return this._panner.rolloffFactor;
        }
        set rolloffFactor(t) {
          this._panner.rolloffFactor = t;
        }
        get distanceModel() {
          return this._panner.distanceModel;
        }
        set distanceModel(t) {
          this._panner.distanceModel = t;
        }
        get coneInnerAngle() {
          return this._panner.coneInnerAngle;
        }
        set coneInnerAngle(t) {
          this._panner.coneInnerAngle = t;
        }
        get coneOuterAngle() {
          return this._panner.coneOuterAngle;
        }
        set coneOuterAngle(t) {
          this._panner.coneOuterAngle = t;
        }
        get coneOuterGain() {
          return this._panner.coneOuterGain;
        }
        set coneOuterGain(t) {
          this._panner.coneOuterGain = t;
        }
        get maxDistance() {
          return this._panner.maxDistance;
        }
        set maxDistance(t) {
          this._panner.maxDistance = t;
        }
        dispose() {
          return (
            super.dispose(),
            this._panner.disconnect(),
            this.orientationX.dispose(),
            this.orientationY.dispose(),
            this.orientationZ.dispose(),
            this.positionX.dispose(),
            this.positionY.dispose(),
            this.positionZ.dispose(),
            this
          );
        }
      }
      class Cs extends Ct {
        constructor() {
          super(q(Cs.getDefaults(), arguments)), (this.name = "Recorder");
          const t = q(Cs.getDefaults(), arguments);
          (this.input = new Mt({
            context: this.context,
          })),
            r(Cs.supported, "Media Recorder API is not available"),
            (this._stream = this.context.createMediaStreamDestination()),
            this.input.connect(this._stream),
            (this._recorder = new MediaRecorder(this._stream.stream, {
              mimeType: t.mimeType,
            }));
        }
        static getDefaults() {
          return Ct.getDefaults();
        }
        get mimeType() {
          return this._recorder.mimeType;
        }
        static get supported() {
          return null !== w && Reflect.has(w, "MediaRecorder");
        }
        get state() {
          return "inactive" === this._recorder.state
            ? "stopped"
            : "paused" === this._recorder.state
            ? "paused"
            : "started";
        }
        start() {
          return S(this, void 0, void 0, function* () {
            r("started" !== this.state, "Recorder is already started");
            const t = new Promise((t) => {
              const e = () => {
                this._recorder.removeEventListener("start", e, !1), t();
              };
              this._recorder.addEventListener("start", e, !1);
            });
            return this._recorder.start(), yield t;
          });
        }
        stop() {
          return S(this, void 0, void 0, function* () {
            r("stopped" !== this.state, "Recorder is not started");
            const t = new Promise((t) => {
              const e = (n) => {
                this._recorder.removeEventListener("dataavailable", e, !1),
                  t(n.data);
              };
              this._recorder.addEventListener("dataavailable", e, !1);
            });
            return this._recorder.stop(), yield t;
          });
        }
        pause() {
          return (
            r("started" === this.state, "Recorder must be started"),
            this._recorder.pause(),
            this
          );
        }
        dispose() {
          return (
            super.dispose(),
            this.input.dispose(),
            this._stream.disconnect(),
            this
          );
        }
      }
      class ks extends Ct {
        constructor() {
          super(q(ks.getDefaults(), arguments, ["threshold", "ratio"])),
            (this.name = "Compressor"),
            (this._compressor = this.context.createDynamicsCompressor()),
            (this.input = this._compressor),
            (this.output = this._compressor);
          const t = q(ks.getDefaults(), arguments, ["threshold", "ratio"]);
          (this.threshold = new St({
            minValue: this._compressor.threshold.minValue,
            maxValue: this._compressor.threshold.maxValue,
            context: this.context,
            convert: !1,
            param: this._compressor.threshold,
            units: "decibels",
            value: t.threshold,
          })),
            (this.attack = new St({
              minValue: this._compressor.attack.minValue,
              maxValue: this._compressor.attack.maxValue,
              context: this.context,
              param: this._compressor.attack,
              units: "time",
              value: t.attack,
            })),
            (this.release = new St({
              minValue: this._compressor.release.minValue,
              maxValue: this._compressor.release.maxValue,
              context: this.context,
              param: this._compressor.release,
              units: "time",
              value: t.release,
            })),
            (this.knee = new St({
              minValue: this._compressor.knee.minValue,
              maxValue: this._compressor.knee.maxValue,
              context: this.context,
              convert: !1,
              param: this._compressor.knee,
              units: "decibels",
              value: t.knee,
            })),
            (this.ratio = new St({
              minValue: this._compressor.ratio.minValue,
              maxValue: this._compressor.ratio.maxValue,
              context: this.context,
              convert: !1,
              param: this._compressor.ratio,
              units: "positive",
              value: t.ratio,
            })),
            $(this, ["knee", "release", "attack", "ratio", "threshold"]);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            attack: 0.003,
            knee: 30,
            ratio: 12,
            release: 0.25,
            threshold: -24,
          });
        }
        get reduction() {
          return this._compressor.reduction;
        }
        dispose() {
          return (
            super.dispose(),
            this._compressor.disconnect(),
            this.attack.dispose(),
            this.release.dispose(),
            this.threshold.dispose(),
            this.ratio.dispose(),
            this.knee.dispose(),
            this
          );
        }
      }
      class As extends Ct {
        constructor() {
          super(
            Object.assign(
              q(As.getDefaults(), arguments, ["threshold", "smoothing"])
            )
          ),
            (this.name = "Gate");
          const t = q(As.getDefaults(), arguments, ["threshold", "smoothing"]);
          (this._follower = new In({
            context: this.context,
            smoothing: t.smoothing,
          })),
            (this._gt = new Fe({
              context: this.context,
              value: at(t.threshold),
            })),
            (this.input = new Mt({
              context: this.context,
            })),
            (this._gate = this.output =
              new Mt({
                context: this.context,
              })),
            this.input.connect(this._gate),
            this.input.chain(this._follower, this._gt, this._gate.gain);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            smoothing: 0.1,
            threshold: -40,
          });
        }
        get threshold() {
          return ct(this._gt.value);
        }
        set threshold(t) {
          this._gt.value = at(t);
        }
        get smoothing() {
          return this._follower.smoothing;
        }
        set smoothing(t) {
          this._follower.smoothing = t;
        }
        dispose() {
          return (
            super.dispose(),
            this.input.dispose(),
            this._follower.dispose(),
            this._gt.dispose(),
            this._gate.dispose(),
            this
          );
        }
      }
      class Ds extends Ct {
        constructor() {
          super(Object.assign(q(Ds.getDefaults(), arguments, ["threshold"]))),
            (this.name = "Limiter");
          const t = q(Ds.getDefaults(), arguments, ["threshold"]);
          (this._compressor =
            this.input =
            this.output =
              new ks({
                context: this.context,
                ratio: 20,
                attack: 0,
                release: 0,
                threshold: t.threshold,
              })),
            (this.threshold = this._compressor.threshold),
            $(this, "threshold");
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            threshold: -12,
          });
        }
        get reduction() {
          return this._compressor.reduction;
        }
        dispose() {
          return (
            super.dispose(),
            this._compressor.dispose(),
            this.threshold.dispose(),
            this
          );
        }
      }
      class Ms extends Ct {
        constructor() {
          super(Object.assign(q(Ms.getDefaults(), arguments))),
            (this.name = "MidSideCompressor");
          const t = q(Ms.getDefaults(), arguments);
          (this._midSideSplit = this.input =
            new cs({
              context: this.context,
            })),
            (this._midSideMerge = this.output =
              new us({
                context: this.context,
              })),
            (this.mid = new ks(
              Object.assign(t.mid, {
                context: this.context,
              })
            )),
            (this.side = new ks(
              Object.assign(t.side, {
                context: this.context,
              })
            )),
            this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid),
            this._midSideSplit.side.chain(this.side, this._midSideMerge.side),
            $(this, ["mid", "side"]);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            mid: {
              ratio: 3,
              threshold: -24,
              release: 0.03,
              attack: 0.02,
              knee: 16,
            },
            side: {
              ratio: 6,
              threshold: -30,
              release: 0.25,
              attack: 0.03,
              knee: 10,
            },
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.mid.dispose(),
            this.side.dispose(),
            this._midSideSplit.dispose(),
            this._midSideMerge.dispose(),
            this
          );
        }
      }
      class js extends Ct {
        constructor() {
          super(Object.assign(q(js.getDefaults(), arguments))),
            (this.name = "MultibandCompressor");
          const t = q(js.getDefaults(), arguments);
          (this._splitter = this.input =
            new Ts({
              context: this.context,
              lowFrequency: t.lowFrequency,
              highFrequency: t.highFrequency,
            })),
            (this.lowFrequency = this._splitter.lowFrequency),
            (this.highFrequency = this._splitter.highFrequency),
            (this.output = new Mt({
              context: this.context,
            })),
            (this.low = new ks(
              Object.assign(t.low, {
                context: this.context,
              })
            )),
            (this.mid = new ks(
              Object.assign(t.mid, {
                context: this.context,
              })
            )),
            (this.high = new ks(
              Object.assign(t.high, {
                context: this.context,
              })
            )),
            this._splitter.low.chain(this.low, this.output),
            this._splitter.mid.chain(this.mid, this.output),
            this._splitter.high.chain(this.high, this.output),
            $(this, ["high", "mid", "low", "highFrequency", "lowFrequency"]);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            lowFrequency: 250,
            highFrequency: 2e3,
            low: {
              ratio: 6,
              threshold: -30,
              release: 0.25,
              attack: 0.03,
              knee: 10,
            },
            mid: {
              ratio: 3,
              threshold: -24,
              release: 0.03,
              attack: 0.02,
              knee: 16,
            },
            high: {
              ratio: 3,
              threshold: -24,
              release: 0.03,
              attack: 0.02,
              knee: 16,
            },
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._splitter.dispose(),
            this.low.dispose(),
            this.mid.dispose(),
            this.high.dispose(),
            this.output.dispose(),
            this
          );
        }
      }
      class Es extends Ct {
        constructor() {
          super(q(Es.getDefaults(), arguments, ["low", "mid", "high"])),
            (this.name = "EQ3"),
            (this.output = new Mt({
              context: this.context,
            })),
            (this._internalChannels = []);
          const t = q(Es.getDefaults(), arguments, ["low", "mid", "high"]);
          (this.input = this._multibandSplit =
            new Ts({
              context: this.context,
              highFrequency: t.highFrequency,
              lowFrequency: t.lowFrequency,
            })),
            (this._lowGain = new Mt({
              context: this.context,
              gain: t.low,
              units: "decibels",
            })),
            (this._midGain = new Mt({
              context: this.context,
              gain: t.mid,
              units: "decibels",
            })),
            (this._highGain = new Mt({
              context: this.context,
              gain: t.high,
              units: "decibels",
            })),
            (this.low = this._lowGain.gain),
            (this.mid = this._midGain.gain),
            (this.high = this._highGain.gain),
            (this.Q = this._multibandSplit.Q),
            (this.lowFrequency = this._multibandSplit.lowFrequency),
            (this.highFrequency = this._multibandSplit.highFrequency),
            this._multibandSplit.low.chain(this._lowGain, this.output),
            this._multibandSplit.mid.chain(this._midGain, this.output),
            this._multibandSplit.high.chain(this._highGain, this.output),
            $(this, ["low", "mid", "high", "lowFrequency", "highFrequency"]),
            (this._internalChannels = [this._multibandSplit]);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            high: 0,
            highFrequency: 2500,
            low: 0,
            lowFrequency: 400,
            mid: 0,
          });
        }
        dispose() {
          return (
            super.dispose(),
            J(this, ["low", "mid", "high", "lowFrequency", "highFrequency"]),
            this._multibandSplit.dispose(),
            this.lowFrequency.dispose(),
            this.highFrequency.dispose(),
            this._lowGain.dispose(),
            this._midGain.dispose(),
            this._highGain.dispose(),
            this.low.dispose(),
            this.mid.dispose(),
            this.high.dispose(),
            this.Q.dispose(),
            this
          );
        }
      }
      class Rs extends Ct {
        constructor() {
          super(q(Rs.getDefaults(), arguments, ["url", "onload"])),
            (this.name = "Convolver"),
            (this._convolver = this.context.createConvolver());
          const t = q(Rs.getDefaults(), arguments, ["url", "onload"]);
          (this._buffer = new tt(t.url, (e) => {
            (this.buffer = e), t.onload();
          })),
            (this.input = new Mt({
              context: this.context,
            })),
            (this.output = new Mt({
              context: this.context,
            })),
            this._buffer.loaded && (this.buffer = this._buffer),
            (this.normalize = t.normalize),
            this.input.chain(this._convolver, this.output);
        }
        static getDefaults() {
          return Object.assign(Ct.getDefaults(), {
            normalize: !0,
            onload: K,
          });
        }
        load(t) {
          return S(this, void 0, void 0, function* () {
            this.buffer = yield this._buffer.load(t);
          });
        }
        get buffer() {
          return this._buffer.length ? this._buffer : null;
        }
        set buffer(t) {
          t && this._buffer.set(t),
            this._convolver.buffer &&
              (this.input.disconnect(),
              this._convolver.disconnect(),
              (this._convolver = this.context.createConvolver()),
              this.input.chain(this._convolver, this.output));
          const e = this._buffer.get();
          this._convolver.buffer = e || null;
        }
        get normalize() {
          return this._convolver.normalize;
        }
        set normalize(t) {
          this._convolver.normalize = t;
        }
        dispose() {
          return (
            super.dispose(),
            this._buffer.dispose(),
            this._convolver.disconnect(),
            this
          );
        }
      }
      function qs() {
        return it().now();
      }
      function Is() {
        return it().immediate();
      }
      const Fs = it().transport;
      function Vs() {
        return it().transport;
      }
      const Ns = it().destination,
        Ps = it().destination;
      function Ls() {
        return it().destination;
      }
      const zs = it().listener;
      function Bs() {
        return it().listener;
      }
      const Ws = it().draw;
      function Us() {
        return it().draw;
      }
      const Gs = it();
      function Ys() {
        return tt.loaded();
      }
      const Qs = tt,
        Zs = $t,
        Xs = se;
    },
  ]);
});
//# sourceMappingURL=Tone.js.map;
let stylesheet = document.styleSheets[0];
let moreExpanded = false;
let divider = document.getElementById("divider");
let moreMenu = document.getElementById("more-menu");

let aboutPage = document.getElementById("aboutPage");
let downloadPage = document.getElementById("downloadPage");
let processingPage = document.getElementById("processingPage");
let mail = document.getElementById("mail");

let playStop = document.getElementById("play-stop");
let more = document.getElementById("more");
let volDial = document.getElementById("volDial");
let volHigh = document.getElementById("volHigh");
let volLow = document.getElementById("volLow");
let volSpeaker = document.getElementById("volSpeaker");
let vol = 85;

function initUI() {
  showContent();
  updateVol();
  initMore();
  initPlayStop();
}

function showContent() {
  var arr = window.location.href.split("/");
  var finalSection = arr[arr.length - 1].split("?")[0];
  switch (finalSection) {
    case "downloads":
      document.title = "lofi generator - Downloads";
      getInventory();
      downloadPage.style.opacity = 1.0;
      downloadPage.style.pointerEvents = "auto";
      downloadPage.style.display = "block";

      main.style.opacity = 0;
      main.style.pointerEvents = "none";
      aboutPage.style.opacity = 0;
      aboutPage.style.pointerEvents = "none";
      processingPage.style.opacity = 0;
      processingPage.style.pointerEvents = "none";
      break;
    case "about":
      document.title = "lofi generator - About";
      aboutPage.style.opacity = 1.0;
      aboutPage.style.pointerEvents = "auto";
      mail.href = decodeEmail("znvygb:qlyna@ybsvtrarengbe.pbz");

      main.style.opacity = 0;
      main.style.pointerEvents = "none";
      processingPage.style.opacity = 0;
      processingPage.style.pointerEvents = "none";
      downloadPage.style.opacity = 0;
      downloadPage.style.pointerEvents = "none";
      downloadPage.style.display = "none";
      break;
    case "processing":
      document.title = "lofi generator - Processing Order";
      processingPage.style.opacity = 1.0;
      processingPage.style.pointerEvents = "auto";

      main.style.opacity = 0;
      main.style.pointerEvents = "none";
      aboutPage.style.opacity = 0;
      aboutPage.style.pointerEvents = "none";
      downloadPage.style.opacity = 0;
      downloadPage.style.pointerEvents = "none";
      downloadPage.style.display = "none";

      // reset processing page
      var message = document.getElementById("processingPageMessage");
      var loader = document.getElementById("processingLoader");
      var backLink = document.getElementById("processingBackLink");
      loader.style.opacity = 1;
      loader.style.display = "block";
      backLink.style.display = "none";
      message.innerHTML =
        "<h2>processing your purchase...</h2>Confirming stock and retrieving your download link.";
      message.style.opacity = 1;

      finalisePurchase();
      break;
    default:
      document.title = "lofi generator";
      main.style.opacity = 1;
      main.style.pointerEvents = "auto";

      processingPage.style.opacity = 0;
      processingPage.style.pointerEvents = "none";
      aboutPage.style.opacity = 0;
      aboutPage.style.pointerEvents = "none";
      downloadPage.style.opacity = 0;
      downloadPage.style.pointerEvents = "none";
      downloadPage.style.display = "none";
  }
}

window.addEventListener("popstate", showContent);

function updateProcessingPage(status, response) {
  var message = document.getElementById("processingPageMessage");
  var loader = document.getElementById("processingLoader");
  var backLink = document.getElementById("processingBackLink");

  // Fade out processing message and loader
  loader.style.opacity = 0;
  message.style.opacity = 0;

  // choose message to display based on server response
  var newMessage;
  switch (status) {
    case 200:
      // Processed successfully
      newMessage =
        "<h2>thank you <3</h2>Download your music at the link below (a copy has also been emailed to you).<br><br><div style='text-align:center;'><a class='btn' style='max-width:25vh' target='_blank' href=" +
        response.downloadLink +
        ">Download!</a></div><br><br>If you encounter any problems, don't hesitate to get in contact at <a href='" +
        decodeEmail("znvygb:qlyna@ybsvtrarengbe.pbz") +
        "'>" +
        decodeEmail("qlyna@ybsvtrarengbe.pbz") +
        "</a><br><br><b>Your order reference is " +
        response.orderRef +
        ".</b>";
      break;
    case 210:
      // Already processed (user probably reloaded the page)
      newMessage =
        "<h2>thank you <3</h2>Your download link has been emailed to the address you provided at checkout. <b>Your order reference is " +
        response.orderRef +
        ".</b><br><br>If you encounter any problems, don't hesitate to get in contact at <a href='" +
        decodeEmail("znvygb:qlyna@ybsvtrarengbe.pbz") +
        "'>" +
        decodeEmail("qlyna@ybsvtrarengbe.pbz") +
        "</a>";
      break;
    case 211:
      // Out of stock
      newMessage =
        "<h2>sorry!</h2>Your order couldn't be fulfilled because this item is now out of stock.<br><br>Check back again soon or consider the <a style='text-decoration:underline' target='_blank' href='https://dylanturner.bandcamp.com/album/generated-beats-volume-1'>album on bandcamp</a> if you need tracks in a hurry and don't mind that they're not unique.<br><br>You haven't been charged and your funds will be automatically released.";
      break;
    case 400:
    // Invalid request
    default:
      newMessage =
        "<h2>sorry!</h2>Something went wrong. This usually happens if you visit this page without successfully completing the checkout first.<br><br>If you're trying to make a purchase please try again or <a style='text-decoration:underline' href='" +
        decodeEmail("znvygb:qlyna@ybsvtrarengbe.pbz") +
        "'>get in contact</a> if you think there's a problem with the site.";
  }

  // After fade, update the message
  setTimeout(function () {
    message.style.opacity = 1;
    message.innerHTML = newMessage;
    loader.style.display = "none";
    backLink.style.display = "inline-block";
  }, 300);
}

function updateVol() {
  volDial.style.transform =
    "translateY(-50%) translateX(-50%) rotate(" + vol / (100 / 270) + "deg)";
  volDial.style.borderRight = vol > 33.33 ? "solid #fff" : "";
  volDial.style.borderTop = vol > 66.67 ? "solid #fff" : "";

  let volLowX = -20 + (vol / 100) * 3.5;
  let volHighX = 0 + (vol / 100) * 5;

  volLow.style.transform = "translateY(-50%) translateX(" + volLowX + "%)";
  volHigh.style.transform = "translateY(-50%) translateX(" + volHighX + "%)";
  volLow.style.opacity = vol > 33.33 ? 1 : vol / 33.33;
  volHigh.style.opacity = vol < 33.33 ? 0 : (vol - 33.33) / 66.67;
  volSpeaker.style.transform =
    vol < 1
      ? "translateY(-50%) translateX(-60%)"
      : "translateY(-50%) translateX(-70%)";

  Tone.Master.volume.value = 30 * Math.log10(vol / 100);
}

function volTouch(event) {
  event.preventDefault();

  var startX = event.touches[0].clientX;
  var startY = event.touches[0].clientY;
  var startVol = vol;

  function drag(e) {
    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;
    volDrag(currentX, currentY, startX, startY, startVol);
  }

  window.addEventListener("touchmove", drag);
  window.addEventListener("touchend", function letgo() {
    window.removeEventListener("touchmove", drag);
    window.removeEventListener("touchend", letgo);
  });
}

function volClick(event) {
  var startX = event.clientX;
  var startY = event.clientY;
  var startVol = vol;
  stylesheet.insertRule("#volDial { opacity: 1 }", stylesheet.cssRules.length);

  function drag(e) {
    volDrag(e.clientX, e.clientY, startX, startY, startVol);
  }

  window.addEventListener("mousemove", drag);
  window.addEventListener("mouseup", function letgo() {
    window.removeEventListener("mousemove", drag);
    window.removeEventListener("mouseup", letgo);
    stylesheet.deleteRule(stylesheet.cssRules.length - 1);
  });
}

function volDrag(x, y, startX, startY, startVol) {
  var moveDist = (x - startX + startY - y) / window.innerHeight;
  var volChange = (moveDist / 0.25) * 100;
  // 1/4 screen height = 100% volume change
  vol = Math.max(Math.min(startVol + volChange, 100), 0);
  // Clamp new volume between 0-100
  updateVol();
}

function initMore() {
  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.innerHTML = "<circle fill='#FFF' cy='50' cx='12' r='12'/>";
  svg.innerHTML += "<circle fill='#FFF' cy='50' cx='50' r='12'/>";
  svg.innerHTML += "<circle fill='#FFF' cy='50' cx='88' r='12'/>";
  more.appendChild(svg);
}

function moreClick() {
  if (moreExpanded) {
    moreClose();
  } else {
    moreExpand();
  }
}

function moreExpand() {
  moreExpanded = true;
  more.removeChild(more.firstChild);

  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.innerHTML =
    "<circle fill='#FFF' cy='50' cx='12' r='10'><animate/></circle>";
  svg.innerHTML +=
    "<circle fill='#FFF' cy='50' cx='50' r='10'><animate/></circle>";
  svg.innerHTML +=
    "<circle fill='#FFF' cy='50' cx='88' r='10'><animate/></circle>";
  svg.innerHTML +=
    "<path d='M50 50 L50 50 L50 50' stroke='#FFF' stroke-width='20' fill='none' stroke-linejoin='round'><animate/></path>";

  let circles = [...svg.childNodes];
  let path = circles.pop();

  for (var i = 0; i < 3; i++) {
    let anim = circles[i].firstChild;
    anim.setAttribute("dur", "1s");
    anim.setAttribute("attributeType", "XML");
    anim.setAttribute("attributeName", "cy");
    anim.setAttribute("fill", "freeze");
    anim.setAttribute("calcMode", "spline");
    anim.setAttribute("keySplines", "0.25 0.75 0.25 1");
    anim.setAttribute("keyTimes", "0;1");
    let values = i == 1 ? "50;35" : "50;65";
    anim.setAttribute("values", values);
  }

  let anim = path.firstChild;
  anim.setAttribute("dur", "1s");
  anim.setAttribute("attributeType", "XML");
  anim.setAttribute("attributeName", "d");
  anim.setAttribute("fill", "freeze");
  anim.setAttribute("calcMode", "spline");
  anim.setAttribute("keySplines", "0.25 0.75 0.25 1");
  anim.setAttribute("keyTimes", "0;1");
  let initPath = "M50 50 L50 50 L50 50";
  let finalPath = "M12 65 L50 35 L88 65";
  let values = initPath + ";" + finalPath;
  anim.setAttribute("values", values);

  more.appendChild(svg);

  divider.style.opacity = 0.3;
  divider.style.width = "35vh";
  // divider.style.marginTop = '5vh';
  moreMenu.style.opacity = 1;
  moreMenu.style.top = "84%";
  moreMenu.style.pointerEvents = "auto";
}

function moreClose() {
  moreExpanded = false;

  more.removeChild(more.firstChild);
  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");

  svg.innerHTML =
    "<circle fill='#FFF' cy='65' cx='12' r='12'><animate/></circle>";
  svg.innerHTML +=
    "<circle fill='#FFF' cy='35' cx='50' r='12'><animate/></circle>";
  svg.innerHTML +=
    "<circle fill='#FFF' cy='65' cx='88' r='12'><animate/></circle>";
  svg.innerHTML +=
    "<path d='M12 65 L50 35 L88 65' stroke='#FFF' stroke-width='18' fill='none' stroke-linejoin='round'><animate/></path>";

  let circles = [...svg.childNodes];
  let path = circles.pop();

  for (var i = 0; i < 3; i++) {
    let anim = circles[i].firstChild;
    anim.setAttribute("dur", "1s");
    anim.setAttribute("attributeType", "XML");
    anim.setAttribute("attributeName", "cy");
    anim.setAttribute("fill", "freeze");
    anim.setAttribute("calcMode", "spline");
    anim.setAttribute("keySplines", "0.25 0.75 0.25 1");
    anim.setAttribute("keyTimes", "0;1");
    let values = i == 1 ? "35;50" : "65;50";
    anim.setAttribute("values", values);
  }

  let anim = path.firstChild;
  anim.setAttribute("dur", "1s");
  anim.setAttribute("attributeType", "XML");
  anim.setAttribute("attributeName", "d");
  anim.setAttribute("fill", "freeze");
  anim.setAttribute("calcMode", "spline");
  anim.setAttribute("keySplines", "0.25 0.75 0.25 1");
  anim.setAttribute("keyTimes", "0;1");
  let initPath = "M12 65 L50 35 L88 65";
  let finalPath = "M50 50 L50 50 L50 50";
  let values = initPath + ";" + finalPath;
  anim.setAttribute("values", values);

  more.appendChild(svg);

  divider.style.opacity = 0.1;
  divider.style.width = "0vh";
  moreMenu.style.opacity = 0;
  moreMenu.style.top = "80%";
  moreMenu.style.pointerEvents = "none";
}

function initPlayStop() {
  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.innerHTML =
    "<path d='M15 15 L85 50 L85 50 L15 85 Z' stroke='#FFF' stroke-width='20' fill='#fff' stroke-linejoin='round'/>";
  playStop.appendChild(svg);
}

function stopToPlay() {
  playStop.removeChild(playStop.firstChild);
  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.innerHTML =
    "<path d='M10 10 L90 10 L90 90 L10 90 Z' stroke='#FFF' stroke-width='20' fill='#fff' stroke-linejoin='round'><animate/></path>";

  let anim = svg.firstChild.firstChild;
  anim.setAttribute("dur", "0.5s");
  anim.setAttribute("attributeType", "XML");
  anim.setAttribute("attributeName", "d");
  anim.setAttribute("fill", "freeze");
  anim.setAttribute("calcMode", "spline");
  anim.setAttribute("keySplines", "0.25 0.75 0.25 1");
  anim.setAttribute("keyTimes", "0;1");
  let initPath = "M10 10 L90 10 L90 90 L10 90 Z";
  let finalPath = "M15 15 L85 50 L85 50 L15 85 Z";
  let values = initPath + ";" + finalPath;
  anim.setAttribute("values", values);

  playStop.appendChild(svg);
}

function playToStop() {
  playStop.removeChild(playStop.firstChild);
  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.innerHTML =
    "<path d='M15 15 L85 50 L85 50 L15 85 Z' stroke='#FFF' stroke-width='20' fill='#fff' stroke-linejoin='round'><animate/></path>";

  let anim = svg.firstChild.firstChild;
  anim.setAttribute("dur", "0.5s");
  anim.setAttribute("attributeType", "XML");
  anim.setAttribute("attributeName", "d");
  anim.setAttribute("fill", "freeze");
  anim.setAttribute("calcMode", "spline");
  anim.setAttribute("keySplines", "0.25 0.75 0.25 1");
  anim.setAttribute("keyTimes", "0;1");
  let initPath = "M15 15 L85 50 L85 50 L15 85 Z";
  let finalPath = "M10 10 L90 10 L90 90 L10 90 Z";
  let values = initPath + ";" + finalPath;
  anim.setAttribute("values", values);

  playStop.appendChild(svg);
}

function playClick() {
  Tone.start();
  if (Tone.Transport.state != "stopped") {
    stop();
    stopToPlay();
  } else if (!awaitingLoad) {
    onStart();
    playToStop();
  }
}

function skipClick() {
  if (Tone.Transport.state == "stopped") {
    playToStop();
  }
  skip();
}

function aboutClick() {
  window.history.pushState("about", "lofi generator - About", "/about");
  document.title = "lofi generator - About";
  aboutPage.style.opacity = 1.0;
  aboutPage.style.pointerEvents = "auto";

  main.style.opacity = 0;
  main.style.pointerEvents = "none";

  mail.href = decodeEmail("znvygb:qlyna@ybsvtrarengbe.pbz");
}

function backClick() {
  window.history.pushState(
    {
      pageTitle: "lofi generator - listen",
    },
    "",
    "/"
  );
  document.title = "lofi generator";
  aboutPage.style.opacity = 0;
  aboutPage.style.pointerEvents = "none";
  downloadPage.style.opacity = 0;
  downloadPage.style.pointerEvents = "none";
  downloadPage.style.display = "none";
  processingPage.style.opacity = 0;
  processingPage.style.pointerEvents = "none";

  main.style.opacity = 1;
  main.style.pointerEvents = "auto";
}

function downloadClick() {
  getInventory();
  window.history.pushState(
    {
      pageTitle: "lofi generator - downloads",
    },
    "",
    "/downloads"
  );
  document.title = "lofi generator - Downloads";

  downloadPage.style.pointerEvents = "auto";
  downloadPage.style.display = "block";
  setTimeout(function () {
    downloadPage.style.opacity = 1.0;
  }, 0);

  main.style.opacity = 0;
  main.style.pointerEvents = "none";
  aboutPage.style.opacity = 0;
  aboutPage.style.pointerEvents = "none";
  document.body.style.overflowY = "auto";
}
let snareRing = document.getElementById("snare");
let hatRing = document.getElementById("hat");
let chordalRing = document.getElementById("chordal");
let main = document.getElementById("main");

function pulseKick(time) {
  Tone.Draw.schedule(function () {
    // playStop.style.transform = 'translateY(-50%) translateX(-50%) rotate('+between(0,360)+'deg)';
    playStop.style.transition = "width 0.1s, height 0.1s";
    playStop.style.width = playStop.style.height =
      4 - (between(2, 3) * vol) / 100 + "vh";
  }, time);

  Tone.Draw.schedule(function () {
    playStop.style.transition = "width 0.5s, height 0.5s";
    playStop.style.width = playStop.style.height = "4vh";
  }, time + Tone.Time("16n").toSeconds());
}

function pulseSnare(time) {
  Tone.Draw.schedule(function () {
    snareRing.style.transform =
      "translateY(-50%) translateX(-50%) rotate(" + between(0, 180) + "deg)";
    snareRing.style.transition = "width 0.1s, height 0.1s";
    snareRing.style.width = 10 + (between(15, 20) * vol) / 100 + "vh";
    snareRing.style.height = 10 + (between(15, 20) * vol) / 100 + "vh";
  }, time);

  Tone.Draw.schedule(function () {
    snareRing.style.transition = "width 1s, height 1s, transform 1s";
    snareRing.style.width = snareRing.style.height = "10vh";
  }, time + Tone.Time("16n").toSeconds());
}

function pulseHat(time) {
  Tone.Draw.schedule(function () {
    hatRing.style.transform =
      "translateY(-50%) translateX(-50%) rotate(" + between(0, 180) + "deg)";
    hatRing.style.transition = "width 0.1s, height 0.1s";
    hatRing.style.width = 15 + (between(15, 20) * vol) / 100 + "vh";
    hatRing.style.height = 15 + (between(15, 20) * vol) / 100 + "vh";
  }, time);

  Tone.Draw.schedule(function () {
    hatRing.style.transition = "width 1s, height 1s, transform 1s";
    hatRing.style.width = hatRing.style.height = "15vh";
  }, time + Tone.Time("16n").toSeconds());
}

function pulseChordal(time) {
  Tone.Draw.schedule(function () {
    chordalRing.style.transform =
      "translateY(-50%) translateX(-50%) rotate(" + between(0, 180) + "deg)";
    chordalRing.style.transition = "width 0.1s, height 0.1s";
    chordalRing.style.width = 10 + (between(15, 20) * vol) / 100 + "vh";
    chordalRing.style.height = 10 + (between(15, 20) * vol) / 100 + "vh";
  }, time);

  Tone.Draw.schedule(function () {
    chordalRing.style.transition = "width 4s, height 4s, transform 1s";
    chordalRing.style.width = chordalRing.style.height = "10vh";
    // chordalRing.style.width = chordalRing.style.height = '7vh'
  }, time + Tone.Time("16n").toSeconds());
}

function stopVisualiser() {
  chordalRing.style.transition = "width 4s, height 4s, opacity 0.6s";
  chordalRing.style.width = chordalRing.style.height = "0";
  chordalRing.style.opacity = 0;
  hatRing.style.transition = "width 2s, height 2s, opacity 1s";
  hatRing.style.width = hatRing.style.height = "0";
  hatRing.style.opacity = 0;
  snareRing.style.transition = "width 2s, height 2s, opacity 0.6s";
  snareRing.style.width = snareRing.style.height = "0";
  snareRing.style.opacity = 0;
  playStop.style.transition = "width 0.5s, height 0.5s";
  playStop.style.width = playStop.style.height = "4vh";
  Tone.Draw.cancel();
}

function initVisualiser() {
  if (chordalRing) {
    chordalRing.remove();
  }
  chordalRing = document.createElement("div");
  chordalRing.id = "chordal";
  chordalRing.className = "visualiser";
  main.insertBefore(chordalRing, playStop);

  if (snareRing) {
    snareRing.remove();
  }
  snareRing = document.createElement("div");
  snareRing.id = "snare";
  snareRing.className = "visualiser";
  main.insertBefore(snareRing, playStop);

  if (hatRing) {
    hatRing.remove();
  }
  hatRing = document.createElement("div");
  hatRing.id = "hat";
  hatRing.className = "visualiser";
  main.insertBefore(hatRing, playStop);
}
let awaitingLoad = false;
let loader = document.getElementById("loader");

let cacheAvailable = "caches" in self;
let currency = "usd";

function startPlaying(song) {
  if (!checkLoaded(song)) {
    awaitingLoad = true;
    loader.style.display = "block";
    setTimeout(function () {
      startPlaying(song);
    }, 50);
  } else {
    awaitingLoad = false;
    loader.style.display = "none";
    initVisualiser();
    song.transport.start();
  }
}

function checkLoaded(song) {
  var sounds = [
    kick.sampler,
    snare.sampler,
    hat.sampler,
    song.chordal,
    song.bass,
    song.lead,
    song.ambience,
    song.vinyl,
  ];
  for (var i = 0; i < sounds.length; i++) {
    if (!sounds[i]) {
      return false;
    }
    if (sounds[i].loaded === false) {
      return false;
    }
  }
  return true;
}

function getAudioBufferFromFilepath(cache, filepath) {
  return new Promise((resolve) => {
    if (cache) {
      // Try to find the file in cache
      cache.match(filepath).then((response) => {
        // If it's not there, add it
        if (response === undefined) {
          cache.add(filepath).then(function () {
            cache
              .match(filepath)
              .then((newresponse) => newresponse.arrayBuffer())
              .then((arrayBuffer) =>
                Tone.getContext().decodeAudioData(arrayBuffer)
              )
              .then((audioBuffer) => {
                resolve(audioBuffer);
              });
          });
        } else {
          response
            .arrayBuffer()
            .then((arrayBuffer) =>
              Tone.getContext().decodeAudioData(arrayBuffer)
            )
            .then((audioBuffer) => {
              resolve(audioBuffer);
            });
        }
      });
    } else {
      // cache isn't available, just fetch the file
      fetch(filepath)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => Tone.getContext().decodeAudioData(arrayBuffer))
        .then((audioBuffer) => {
          resolve(audioBuffer);
        });
    }
  });
}

function checkBuffersLoaded(map) {
  // Returns true if every value of the map has been overwritten with an audioBuffer
  for (const note in map) {
    if (typeof map[note] !== "object") {
      return false;
    }
  }
  return true;
}

function selectCurrency(selected) {
  currency = selected;

  var usd = document.getElementById("usd");
  var aud = document.getElementById("aud");

  var lfu20price = document.getElementById("LFU20price");
  var lfu20ppt = document.getElementById("LFU20ppt");
  var lfu100price = document.getElementById("LFU100price");
  var lfu100ppt = document.getElementById("LFU100ppt");
  var lfc50price = document.getElementById("LFC50price");
  var lfc50ppt = document.getElementById("LFC50ppt");

  if (selected == "aud") {
    // update currency indicator
    usd.classList.remove("selected");
    aud.classList.add("selected");

    // update prices
    lfu20price.textContent = "A$5";
    lfu20ppt.textContent = "$0.25";
    lfu100price.textContent = "A$10";
    lfu100ppt.textContent = "$0.10";
    lfc50price.textContent = "A$9";
    lfc50ppt.textContent = "$0.18";
  } else {
    // update currency indicator
    aud.classList.remove("selected");
    usd.classList.add("selected");

    // update prices
    lfu20price.textContent = "$4";
    lfu20ppt.textContent = "$0.20";
    lfu100price.textContent = "$8";
    lfu100ppt.textContent = "$0.08";
    lfc50price.textContent = "~$7";
    lfc50ppt.textContent = "$0.14";
  }
}

function getInventory() {
  // don't query the db if the stock has been checked in the last 5 minutes
  var now = Date.now();
  if (inventoryUpdated > now - 300000) {
    return;
  }

  // query the db and update the ui
  fetch("/.netlify/functions/check-stock", {
    method: "POST",
  }).then((res) => {
    if (res.status == 200) {
      res.json().then((data) => {
        ["LFU20", "LFU100"].forEach((sku) =>
          updateStockIndicator(sku, data[sku])
        );
        inventoryUpdated = Date.now();
      });
    }
  });
}

function updateStockIndicator(sku, stock) {
  var indicator = document.getElementById(sku + "stock");
  var btn = document.getElementById(sku + "btn");

  if (stock) {
    // console.log(sku+' is in stock');
    indicator.textContent = stock;
    btn.textContent = "Buy";
    btn.classList.remove("btn-disabled");
    btn.onclick = function () {
      checkout(sku);
    };
  } else {
    // console.log(sku+' is out of stock');
    indicator.textContent = "out of stock";
    btn.textContent = "Out of stock";
    btn.classList.add("btn-disabled");
    btn.onclick = "";
  }
}

async function finalisePurchase() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const session_id = urlParams.get("session_id");

  var data = {
    session_id: session_id,
  };

  var response = await fetch("/.netlify/functions/handle-purchase", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  var status = response.status;
  response = await response.json();

  updateProcessingPage(status, response);
}

async function checkout(sku) {
  var data = {
    sku: sku,
    currency: currency,
  };

  const response = await fetch("/.netlify/functions/create-checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  const stripe = Stripe(response.publishableKey);
  const { error } = await stripe.redirectToCheckout({
    sessionId: response.sessionId,
  });

  if (error) {
    console.error(error);
  }
}

// Utility functions

// Returns a random float between min and max
function between(min, max) {
  var range = max - min;
  return min + Math.random() * range;
}

// returns a boolean. 'prob' is between 0 and 1. Higher is more likely to return True
function chance(prob) {
  if (prob <= 0) {
    return false;
  }
  return Boolean(Math.random() < prob);
}

// Chooses one item from the given array. Optional 'probs' array specifies the likelyhood of each corresponding array item
function choose(arr, probs) {
  // Check if probs is valid and normalise it
  total = 0;
  invalid = true;
  if (probs && probs.length == arr.length) {
    invalid = false;
    probs.forEach(function (prob) {
      if (typeof prob == "number" && prob >= 0) {
        total += prob;
      } else {
        invalid = true;
      }
    });
  }
  if (invalid || total == 0) {
    probs = [];
    for (var i = 0; i < arr.length; i++) {
      probs.push(1 / arr.length);
    }
  } else {
    probs = probs.map((x) => (x * 1) / total);
  }

  // Probs is now valid and normalised, return a randomly selected item
  var rand = Math.random();
  var cumulativeProb = 0;
  for (var i = 0; i < arr.length; i++) {
    cumulativeProb += probs[i];
    if (cumulativeProb > rand) {
      return arr[i];
    }
  }
}

// Takes [thing, probability] pairs and returns one array containing all the 'things' that were selected.
// The 'probability' determines the likelyhood of that 'thing' being selected
function chooseSome(...items) {
  var arr = [];
  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    if (chance(item[1])) {
      arr.push(item[0]);
    }
  }
  return arr;
}

// email protection from bots
function decodeEmail(a) {
  return a.replace(/[a-zA-Z]/g, function (c) {
    return String.fromCharCode(
      (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
    );
  });
}
const rt = {
  C: 0,
  Cs: 1,
  D: 2,
  Ds: 3,
  E: 4,
  F: 5,
  Fs: 6,
  G: 7,
  Gs: 8,
  A: 9,
  As: 10,
  B: 11,
};

const tp = {
  Triad: [0, 4, 7],
  // Triad
  FirstInv: [4, 7, 0],
  // 3rd in base
  SecondInv: [7, 0, 4],
  // 5th in base
  Maj6th: [0, 4, 7, 9],
  // Major 6th
  Dom7th: [0, 4, 7, 10],
  // 7th
  Dom7thThirdInv: [10, 0, 4, 7],
  // Dom 7th, 7th in base (C7/Bb)
  Maj7th: [0, 4, 7, 11],
  // Major 7th
  Maj7thThirdInv: [11, 0, 4, 7],
  // Major 7th, 7th in base (Cmaj7/B)
  Add9: [0, 4, 7, 2],
  // Add9
  Add9ThirdInv: [2, 4, 7, 0],
  // Add9, 9th in base (C/D)

  Sus2: [0, 2, 7],
  // Sus2
  Sus4: [0, 5, 7],
  // Sus4
  Sus42: [0, 2, 5, 7],
  // Sus42

  MinTriad: [0, 3, 7],
  // Minor Triad
  MinFirstInv: [3, 7, 0],
  // 3rd in base
  MinSecondInv: [7, 0, 3],
  // 5th in base
  Min6th: [0, 3, 7, 9],
  // Minor triad with 6th
  Min7th: [0, 3, 7, 10],
  // Minor 7th
  Min7thThirdInv: [10, 0, 3, 7],
  // Minor 7th, 7th in base (Amin7/G)
  MinAdd9: [0, 3, 7, 2],
  // Add9
  MinAdd9ThirdInv: [2, 3, 7, 0],
  // Add9, 9th in base (Cmin/D)

  Maj7th9th: [0, 4, 7, 11, 2],
  // Maj 9th
  Min7th9th: [0, 3, 7, 10, 2],
  Dom7th9th: [0, 4, 7, 10, 2],
  // Dom 7th 9th

  Dom7thFlat9: [0, 4, 7, 10, 1],
  // 7th + Flat 9
  Dim: [0, 3, 6, 9],
  // Diminished 7th
  HalfDim: [0, 3, 6, 10],
};

function connectKit() {
  hat.connect(filter);
  kick.connect(filter);
  snare.connect(filter);
}

function chooseVinyl() {
  return new Promise((resolve) => {
    var index = Math.floor(between(0, vinyls.length));
    vinyls[index].connect(gain).then((player) => {
      player.playbackRate = between(0.7, 1);
      player.volume.value = between(-19, -16);
      resolve(player);
    });
  });
}

function chooseAmbience() {
  return new Promise((resolve) => {
    var index = Math.floor(between(0, ambiences.length));
    ambiences[index].connect(gain).then((player) => {
      player.playbackRate = between(0.9, 1);
      player.volume.value = between(-18, -14);
      resolve(player);
    });
  });
}

function chooseChordal() {
  var chordal = choose([
    rhodes1,
    rhodes0,
    piano0,
    piano1,
    kalimba,
    synth0,
    marimba,
  ]);

  return chordal.connect(chordalFilter);
}

function chooseLead() {
  var lead = choose([
    rhodes1,
    rhodes0,
    piano1,
    kalimba,
    synth0,
    dantranh,
    marimba,
    violinpizz,
    guitar,
    uke,
  ]);

  return lead.connect(leadFilter);
}

function chooseBass(ducking, bpm) {
  var bass = choose(getBassInstrumentOptions(ducking, bpm));
  // If it hasn't been created yet, create the Tone Sampler
  return bass.connect(bassGain);
}

function getBassInstrumentOptions(bassDucking, bpm) {
  var bassOptions = [];
  if (bassDucking) {
    bassOptions = [bass2, rhodes1, bass3];
  } else {
    bassOptions = bpm < 75 ? [bass1, bass3] : [bass0, bass1, bass3];
  }
  return bassOptions;
}

// Returns prog in format: [[0,4,7], [5,9,0], [0,4,7], [5,9,0]]
function getProg(key) {
  var progType = choose([0, 1, 2, 3, 4, 5, 6], [1, 3, 1, 1, 0.5, 1, 1]);
  // var progType = 4;
  // console.log('progtype: '+progType);
  var chords = [];

  switch (progType) {
    case 0:
      // I IV I IV (or IV I IV I)
      for (var i = 0; i < 2; i++) {
        chords.push(
          choose([
            // I
            [rt.C, tp.Triad],
            [rt.C, tp.FirstInv],
            [rt.C, tp.SecondInv],
            [rt.C, tp.Maj7th], // [rt.C, tp.Maj7th9th],
            [rt.C, tp.Maj6th],
          ])
        );

        chords.push(
          choose([
            // IV or V
            [rt.F, tp.Triad],
            [rt.F, tp.FirstInv],
            [rt.F, tp.SecondInv],
            [rt.F, tp.Maj7th],
            [rt.F, tp.Maj7th9th],
            [rt.F, tp.Maj6th],
            [rt.F, tp.Add9],
            [rt.G, tp.Triad],
            [rt.G, tp.FirstInv],
            [rt.G, tp.SecondInv],
            [rt.G, tp.Maj6th],
            [rt.G, tp.Add9],
          ])
        );
      }
      // Maybe change the order
      if (chance(0.5)) {
        first = chords.shift();
        chords.push(first);
      }
      break;
    case 1:
      // ii V I
      chords.push(
        choose([
          // ii
          [rt.D, tp.MinTriad],
          [rt.D, tp.MinFirstInv],
          [rt.D, tp.MinSecondInv],
          [rt.D, tp.Min7th],
          [rt.D, tp.Min7th9th],
          [rt.D, tp.Min6th],
          [rt.F, tp.Triad],
          [rt.F, tp.FirstInv],
          [rt.F, tp.SecondInv],
          [rt.F, tp.Maj7th],
          [rt.F, tp.Maj7th9th],
          [rt.F, tp.Maj6th],
          [rt.F, tp.Add9],
        ])
      );

      chords.push(
        choose([
          // V or iii or Dim
          [rt.G, tp.Triad],
          [rt.G, tp.FirstInv],
          [rt.G, tp.SecondInv],
          [rt.G, tp.Maj6th],
          [rt.G, tp.Dom7th],
          [rt.G, tp.Dom7th9th],
          [rt.G, tp.Add9],
          [rt.D, tp.Dim],
          [rt.D, tp.HalfDim],
          [rt.F, tp.Dim],
          [rt.F, tp.HalfDim],
          [rt.E, tp.MinTriad],
          [rt.E, tp.MinFirstInv],
          [rt.E, tp.MinSecondInv],
          [rt.E, tp.Min7th],
          [rt.E, tp.Min7th9th],
          [rt.E, tp.Min6th],
        ])
      );

      for (var i = 0; i < choose([1, 2]); i++) {
        chords.push(
          choose([
            // I
            [rt.C, tp.Triad],
            [rt.C, tp.FirstInv],
            [rt.C, tp.SecondInv],
            [rt.C, tp.Maj7th],
            [rt.C, tp.Maj7th9th],
            [rt.C, tp.Maj6th],
          ])
        );
      }
      break;
    case 2:
      // IV ii I
      chords.push(
        choose([
          // IV
          [rt.F, tp.Triad],
          [rt.F, tp.FirstInv],
          [rt.F, tp.SecondInv],
          [rt.F, tp.Maj7th],
          [rt.F, tp.Maj7th9th],
          [rt.F, tp.Maj6th],
          [rt.F, tp.Add9],
        ])
      );

      chords.push(
        choose([
          // ii
          [rt.D, tp.MinTriad],
          [rt.D, tp.MinFirstInv],
          [rt.D, tp.MinSecondInv],
          [rt.D, tp.Min7th],
          [rt.D, tp.Min7th9th],
          [rt.D, tp.Min6th],
        ])
      );

      for (var i = 0; i < choose([1, 2]); i++) {
        chords.push(
          choose([
            // I
            [rt.C, tp.Triad],
            [rt.C, tp.FirstInv],
            [rt.C, tp.SecondInv],
            [rt.C, tp.Maj7th],
            [rt.C, tp.Maj7th9th],
            [rt.C, tp.Maj6th],
          ])
        );
      }
      break;
    case 3:
      // IV I ii I
      chords.push(
        choose([
          // IV
          [rt.F, tp.Triad],
          [rt.F, tp.FirstInv],
          [rt.F, tp.SecondInv],
          [rt.F, tp.Maj7th],
          [rt.F, tp.Maj7th9th],
          [rt.F, tp.Maj6th],
          [rt.F, tp.Add9],
        ])
      );

      chords.push(
        choose([
          // I
          [rt.C, tp.Triad],
          [rt.C, tp.FirstInv],
          [rt.C, tp.SecondInv],
          [rt.C, tp.Maj7th],
          [rt.C, tp.Maj7th9th],
          [rt.C, tp.Maj6th],
        ])
      );

      chords.push(
        choose([
          // ii
          [rt.D, tp.MinTriad],
          [rt.D, tp.MinFirstInv],
          [rt.D, tp.MinSecondInv],
          [rt.D, tp.Min7th],
          [rt.D, tp.Min7th9th],
          [rt.D, tp.Min6th],
        ])
      );

      chords.push(
        choose([
          // I
          [rt.C, tp.Triad],
          [rt.C, tp.FirstInv],
          [rt.C, tp.SecondInv],
          [rt.C, tp.Maj7th],
          [rt.C, tp.Maj7th9th],
          [rt.C, tp.Maj6th],
        ])
      );

      // Maybe change the order
      if (chance(0.25)) {
        first = chords.shift();
        chords.push(first);
      }
      break;
    case 4:
      // I iii ii iii (or I V ii V etc)
      chords.push(
        choose([
          // I
          [rt.C, tp.Triad],
          [rt.C, tp.FirstInv],
          [rt.C, tp.SecondInv],
          [rt.C, tp.Maj7th],
          [rt.C, tp.Maj7th9th],
          [rt.C, tp.Maj6th],
        ])
      );

      chords.push(
        choose([
          // iii
          [rt.E, tp.MinTriad],
          [rt.E, tp.MinFirstInv],
          [rt.E, tp.MinSecondInv],
          [rt.E, tp.Min7th],
          [rt.E, tp.Min7th9th],
          [rt.E, tp.Min6th],
          [rt.G, tp.Triad],
          [rt.G, tp.FirstInv],
          [rt.G, tp.SecondInv],
          [rt.G, tp.Maj6th],
        ])
      );

      chords.push(
        choose([
          // ii
          [rt.D, tp.MinTriad],
          [rt.D, tp.MinFirstInv],
          [rt.D, tp.MinSecondInv],
          [rt.D, tp.Min7th],
          [rt.D, tp.Min7th9th],
          [rt.D, tp.Min6th],
        ])
      );

      chords.push(
        choose([
          // iii
          [rt.E, tp.MinTriad],
          [rt.E, tp.MinFirstInv],
          [rt.E, tp.MinSecondInv],
          [rt.E, tp.Min7th],
          [rt.E, tp.Min7th9th],
          [rt.E, tp.Min6th],
          [rt.G, tp.Triad],
          [rt.G, tp.FirstInv],
          [rt.G, tp.SecondInv],
          [rt.G, tp.Maj6th],
        ])
      );

      // Maybe change the order
      if (chance(0.5)) {
        first = chords.shift();
        chords.push(first);
      }
      break;
    case 5:
      // IV (ii or iii) vi
      chords.push(
        choose([
          // I
          [rt.F, tp.Triad],
          [rt.F, tp.FirstInv],
          [rt.F, tp.SecondInv],
          [rt.F, tp.Maj7th],
          [rt.F, tp.Maj6th],
          [rt.F, tp.Add9],
        ])
      );

      chords.push(
        choose([
          // ii or iii or Dim
          [rt.D, tp.MinTriad],
          [rt.D, tp.MinFirstInv],
          [rt.D, tp.MinSecondInv],
          [rt.D, tp.Min7th],
          [rt.D, tp.Min7th9th],
          [rt.D, tp.Min6th],
          [rt.D, tp.Dim],
          [rt.D, tp.HalfDim],
          [rt.E, tp.MinTriad],
          [rt.E, tp.MinFirstInv],
          [rt.E, tp.MinSecondInv],
          [rt.E, tp.Min7th],
          [rt.E, tp.Min7th9th],
          [rt.E, tp.Min6th],
          [rt.F, tp.Dim],
          [rt.F, tp.HalfDim],
        ])
      );

      chords.push(
        choose([
          // vi
          [rt.A, tp.MinTriad],
          [rt.A, tp.MinFirstInv],
          [rt.A, tp.MinSecondInv],
          [rt.A, tp.Min7th],
        ])
      );
      break;
    case 6:
      // (IV or ii) (Dim or V) iii vi
      chords.push(
        choose([
          // I
          [rt.F, tp.Triad],
          [rt.F, tp.FirstInv],
          [rt.F, tp.SecondInv],
          [rt.F, tp.Maj7th],
          [rt.F, tp.Maj6th],
          [rt.F, tp.Add9],
          [rt.D, tp.MinTriad],
          [rt.D, tp.MinFirstInv],
          [rt.D, tp.MinSecondInv],
          [rt.D, tp.Min7th],
          [rt.D, tp.Min7th9th],
          [rt.D, tp.Min6th],
        ])
      );

      if (chance(0.4)) {
        chords.push(
          choose([
            // Dim or V
            [rt.G, tp.Triad],
            [rt.G, tp.FirstInv],
            [rt.G, tp.SecondInv],
            [rt.G, tp.Maj6th],
            [rt.G, tp.Dom7th],
            [rt.G, tp.Dom7th9th],
            [rt.G, tp.Add9],
          ])
        );
        chords.push(
          choose([
            // iii
            [rt.E, tp.MinTriad],
            [rt.E, tp.MinFirstInv],
            [rt.E, tp.MinSecondInv],
            [rt.E, tp.Min7th],
            [rt.E, tp.Min7th9th],
            [rt.E, tp.Min6th],
          ])
        );
      } else {
        chords.push(
          choose([
            // Dim or V
            [rt.D, tp.Dim],
            [rt.D, tp.HalfDim],
            [rt.F, tp.Dim],
            [rt.F, tp.HalfDim],
          ])
        );
        if (chance(0.5)) {
          chords.push(
            choose([
              // iii
              [rt.E, tp.MinTriad],
              [rt.E, tp.MinFirstInv],
              [rt.E, tp.MinSecondInv],
              [rt.E, tp.Min7th],
              [rt.E, tp.Min7th9th],
              [rt.E, tp.Min6th],
            ])
          );
        }
      }

      chords.push(
        choose([
          // vi
          [rt.A, tp.MinTriad],
          [rt.A, tp.MinFirstInv],
          [rt.A, tp.MinSecondInv],
          [rt.A, tp.Min7th],
        ])
      );
      break;
  }
  // reformat from root - type pairs to a single note array, and add key
  for (var i = 0; i < chords.length; i++) {
    var root = chords[i][0];
    var notes = chords[i][1];
    chords[i] = notes.map((x) => (x + root + key) % 12);
  }
  return chords;
}

function getBassSimple(prog, progRhythm, halfspeed) {
  let notes = prog.map((x) => Tone.Frequency(x[0] + 36, "midi"));
  let bassline = [];
  let eighths = halfspeed ? 32 : 16;
  for (var i = 0; i < eighths; i++) {
    bassline.push(0);
  }
  let pos = 0;
  for (var i = 0; i < progRhythm.length; i++) {
    bassline[pos] = [notes[i], progRhythm[i]];
    pos += progRhythm[i].toSeconds() / Tone.Time("8n").toSeconds();
  }
  return bassline;
}

function getBassRhythmic(prog, progRhythm, halfspeed) {
  let notes = prog.map((x) => Tone.Frequency(x[0] + 36, "midi"));

  // find the lowest and highest bass notes
  let low = 0;
  let high = 0;
  for (var i = 1; i < notes.length; i++) {
    if (notes[i].toMidi() < notes[low].toMidi()) {
      low = i;
    }
    if (notes[i].toMidi() > notes[high].toMidi()) {
      high = i;
    }
  }

  // Decide whether the lowest bass note should be transposed up, or the highest note transposed down
  let transposeUp = true;
  if (notes[high].toMidi() > 45) {
    transposeUp = false;
  }

  let bassline = [];

  for (var i = 0; i < progRhythm.length; i++) {
    let chordEighths = Math.round(
      progRhythm[i].toSeconds() / Tone.Time("8n").toSeconds()
    );
    let chord = prog[i];
    let pos = 0;
    let notePlayed = false;
    while (pos < chordEighths) {
      var dur;
      if (chance(0.7) || Boolean(!notePlayed && chordEighths - dur < 3)) {
        // Trigger note
        notePlayed = true;
        dur = choose([1, 2, 3, 4, 6, 8], [0.5, 1.5, 0.5, 1, 0.5, 0.5]);
        dur = dur > chordEighths - pos ? chordEighths - pos : dur;
        var note = notes[i];
        if (i == low && transposeUp) {
          if (note.toMidi() < 38 && chance(0.5)) {
            note = note.transpose(12);
          }
        } else if (i == high && !transposeUp) {
          if (chance(0.5)) {
            note = note.transpose(-12);
          }
        }
        bassline.push([note, Tone.Time(dur * Tone.Time("8n").toSeconds())]);
        for (var j = 0; j < dur - 1; j++) {
          bassline.push(null);
        }
      } else {
        // rest
        dur = chordEighths - pos > 1 ? choose([1, 2]) : 1;
        for (var j = 0; j < dur; j++) {
          bassline.push(null);
        }
      }
      pos += dur;
    }
  }
  return bassline;
}

function getProgVoiced(prog, progRhythm, halfspeed) {
  let voicings = getVoicings(prog);
  let progVoiced = [];
  let eighths = halfspeed ? 32 : 16;
  for (var i = 0; i < eighths; i++) {
    progVoiced.push(0);
  }
  let pos = 0;
  for (var i = 0; i < progRhythm.length; i++) {
    progVoiced[pos] = [voicings[i], progRhythm[i]];
    pos += Math.round(progRhythm[i].toSeconds() / Tone.Time("8n").toSeconds());
  }
  return progVoiced;
}

function getVoicings(originalProg) {
  // Make clone of prog, so we don't update the original song.prog
  var newProg = [];
  for (var i = 0; i < originalProg.length; i++) {
    newProg.push([...originalProg[i]]);
  }

  var maxSpacing = Math.floor(between(16, 28));
  var spacer = Math.floor(maxSpacing / 8);

  // if the chord only has three notes, add the octave above the lowest note
  for (var i = 0; i < newProg.length; i++) {
    if (newProg[i].length == 3) {
      newProg[i].push(newProg[i][0] + 12);
    }
  }

  for (var i = 0; i < newProg.length; i++) {
    // Start by spacing out the voicing
    var spaced = false;
    while (!spaced) {
      spaced = true;

      // Sort the chord notes ascending
      newProg[i].sort(function (a, b) {
        return a - b;
      });

      for (var j = 1; j < newProg[i].length; j++) {
        if (newProg[i][j] - newProg[i][j - 1] < spacer) {
          newProg[i][j] += 12;
          spaced = false;
        }
      }
    }

    // Now compress it if it's total range is > maxSpacing
    var compressed = false;
    while (!compressed) {
      compressed = true;
      for (var j = 1; j < newProg[i].length; j++) {
        if (newProg[i][j] - newProg[i][0] > maxSpacing) {
          newProg[i][j] -= 12;
          compressed = false;
        }
      }
    }
  }
  return newProg.map((x) => x.map((y) => Tone.Frequency(y + 60, "midi")));
}

function getProgRhythm(numChords, halfspeed) {
  const double = [
    ["2n", "2n"],
    ["4n", "2n."],
    ["2n.", "4n"],
  ];

  const triple = [
    ["2n", "4n", "4n"],
    ["4n", "2n", "4n"],
  ];

  if (numChords == 3) {
    var doub = choose(double, [0.6, 0.2, 0.2]);
    var rhythm = choose([["1m"].concat(doub), doub.concat(["1m"])]);
  } else if (numChords == 4) {
    var rhythm = choose(
      [
        ["1m"].concat(choose(triple)),
        choose(triple).concat(["1m"]),
        choose(double, [0.6, 0.2, 0.2]).concat(choose(double, [0.6, 0.2, 0.2])),
      ],
      [0.2, 0.2, 0.6]
    );
  }

  if (halfspeed) {
    return rhythm.map((x) => Tone.Time(Tone.Time(x).toSeconds() * 2));
  }
  return rhythm.map((x) => Tone.Time(x));
}

function getMelody(key, prog, progRhythm, halfspeed) {
  let scale = [0, 2, 4, 5, 7, 9, 11].map((x) => (x + key) % 12);
  let rangeRand = Math.min(key + Math.floor(between(12, 25)), 30);
  let range = [rangeRand, rangeRand + 16];
  let phrase = [];
  let phrase2 = [];

  // Make an array showing which note (or rest) is playing on each sixteenth.
  for (var i = 0; i < progRhythm.length; i++) {
    let chordEighths = Math.round(
      progRhythm[i].toSeconds() / Tone.Time("8n").toSeconds()
    );
    let chord = prog[i];
    let numMelodyNotes = halfspeed ? chordEighths : chordEighths * 2;
    for (j = 0; j < numMelodyNotes; j++) {
      let chosen = chooseNote(phrase, scale, chord, range, Boolean(j == 0));
      phrase.push(chosen);
      if (i < progRhythm.length - 1) {
        phrase2.push(chosen);
      } else {
        phrase2.push(chooseNote(phrase2, scale, chord, range, Boolean(j == 0)));
      }
    }
  }

  phrase = phrase.concat(phrase2);
  if (halfspeed) {
    for (var i = phrase.length - 1; i >= 0; i--) {
      phrase.splice(i, 0, phrase[i]);
    }
  }

  // Convert into note trigger info ([note, dur],0,0,[note,dur], etc)
  let formatted = [];
  let prev = null;
  for (var i = 0; i < phrase.length; i += 2) {
    if (phrase[i] == prev || phrase[i] == null) {
      // Nothing to trigger for first 16th
      if (phrase[i] == phrase[i + 1] || phrase[i + 1] == null) {
        // Nothing to trigger at all
        formatted.push(null);
      } else {
        // Something to trigger in second 16th only
        let note = Tone.Frequency(phrase[i + 1] + 48, "midi");
        let dur = getMelodyNoteDuration(phrase, i + 1);
        formatted.push([null, [note, dur]]);
      }
    } else {
      // Something to trigger in first 16th
      if (phrase[i] == phrase[i + 1] || phrase[i + 1] == null) {
        // something to trigger immediately, nothing to trigger in second 16th
        let note = Tone.Frequency(phrase[i] + 48, "midi");
        let dur = getMelodyNoteDuration(phrase, i);
        formatted.push([[note, dur], null]);
      } else {
        // something to trigger in both 16ths
        let firstNote = Tone.Frequency(phrase[i] + 48, "midi");
        let firstDur = halfspeed ? Tone.Time("8n") : Tone.Time("16n");
        let secondNote = Tone.Frequency(phrase[i + 1] + 48, "midi");
        let secondDur = getMelodyNoteDuration(phrase, i + 1);
        formatted.push([
          [firstNote, firstDur],
          [secondNote, secondDur],
        ]);
      }
    }
    prev = phrase[i + 1];
  }
  return formatted;
}

function getMelodyNoteDuration(phrase, pos, halfspeed) {
  dur = 1;
  end = false;
  while (!end) {
    if (pos == phrase.length) {
      end = true;
    } else {
      pos++;
      if (phrase[pos] == phrase[pos + 1]) {
        dur++;
      } else {
        end = true;
      }
    }
  }
  dur = halfspeed ? dur * 2 : dur;
  return Tone.Time(dur * Tone.Time("16n").toSeconds());
}

function getHarmoniousNotes(
  scale,
  chord,
  intervals = [0, 2, 3, 4, 7, 9, 10, 11]
) {
  let harmonious = [...chord];

  // If chord contains notes not in the scale, return chord notes as the only harmonious notes
  for (var i = 0; i < chord.length; i++) {
    if (!scale.includes(chord[i])) {
      return harmonious;
    }
  }

  // Add more notes to harmonious if they are in the scale and one of the allowable intervals above the chord root
  let possibilities = intervals.map((x) => (x + chord[0]) % 12);
  for (var i = 0; i < possibilities.length; i++) {
    if (
      scale.includes(possibilities[i]) &&
      !harmonious.includes(possibilities[i])
    ) {
      harmonious.push(possibilities[i]);
    }
  }

  return harmonious;
}

function chooseNote(phrase, scale, chord, range, newChord) {
  // Set lastNote and lastSixteenth
  let lastSixteenth = phrase.length > 0 ? phrase[phrase.length - 1] : null;
  let lastNote = lastSixteenth;
  if (lastNote === null) {
    for (var i = phrase.length; i > 0; i--) {
      if (phrase[i - 1]) {
        lastNote = phrase[i - 1];
        break;
      }
    }
  }

  // Find out how long the current note or rest has been held for
  let sustained = 0;
  for (var i = phrase.length; i > 0; i--) {
    if (phrase[i - 1] == lastSixteenth) {
      sustained++;
    } else {
      break;
    }
  }

  // Determine the harmonious notes
  let harmonious = getHarmoniousNotes(scale, chord);
  let mostHarmonious = getHarmoniousNotes(scale, chord, [0, 3, 4, 7]);
  let quarterBeat = phrase.length % 4 == 0 ? true : false;

  let changeChance = phrase.length % 2 == 0 ? 0.15 : 0.05;
  // More likely to change on an eighth note
  changeChance += quarterBeat ? 0.1 : 0;
  // increase again if it's a quarter note
  changeChance += newChord ? 0.2 : 0;
  // increase if a new chord will be played on this sixteenth
  changeChance += sustained / 32;
  changeChance = Math.min(changeChance, 1);

  // Determine probabilities of actions based on what we know
  let firstProb;
  let restProb;
  let repeatProb;
  let stepProb;
  let leapProb;

  if (lastNote) {
    firstProb = 0;
    if (lastSixteenth) {
      // last sixteenth was playing a note
      restProb = changeChance / 8;
      repeatProb = harmonious.includes(lastSixteenth % 12)
        ? 1 - changeChance
        : 0.25 * (1 - changeChance);
      // quarter prob of sustaining if it's discordant
      stepProb = changeChance / 2;
      leapProb = changeChance / 8;
    } else {
      // last sixteenth was a rest
      restProb = (1 - changeChance) / 3;
      // skew probabilities to favour fewer rests
      repeatProb = harmonious.includes(lastNote % 12) ? changeChance / 3 : 0;
      // don't allow repeating of last played note if it's discordant
      stepProb = changeChance / 2;
      leapProb = changeChance / 8;
    }
  } else {
    // No note has played yet
    firstProb = Math.min(changeChance * 5, 1);
    repeatProb = 0;
    stepProb = 0;
    leapProb = 0;
    restProb = 1 - firstProb;
  }

  let probabilities = [firstProb, repeatProb, stepProb, leapProb, restProb];
  // console.log(probabilities);

  // Choose an action
  let action = choose(
    ["first", "repeat", "step", "leap", "rest"],
    probabilities
  );
  let note;

  switch (action) {
    case "first":
      note = range[0] + Math.floor(between(3, 13));
      let dir = choose([-1, 1]);
      while (!chord.includes(note % 12)) {
        note += dir;
      }
      break;
    case "repeat":
      note = lastNote;
      break;
    case "step":
      // Find all possible step options
      var allowable = quarterBeat ? [...mostHarmonious] : [...harmonious];
      var options = [];
      for (var i = 1; i <= 2; i++) {
        if (
          allowable.includes((lastNote + i) % 12) &&
          lastNote + i <= range[1]
        ) {
          options.push(lastNote + i);
        }
        if (
          allowable.includes((lastNote - i) % 12) &&
          lastNote - i >= range[0]
        ) {
          options.push(lastNote - i);
        }
      }
      if (options.length > 0) {
        // If no options, leap instead
        note = choose(options);
        // console.log('no step options');
        break;
      }
    case "leap":
      // Find all possible leap options
      var allowable = quarterBeat ? [...mostHarmonious] : [...harmonious];
      var options = [];
      for (var i = 0; i < allowable.length; i++) {
        for (var j = 0; j < 6; j++) {
          let candidate = allowable[i] + 12 * j;
          if (candidate <= range[1] && candidate >= range[0]) {
            let dist = Math.abs(lastNote - candidate);
            if (dist < 13 && dist > 2 && dist != 6) {
              // keep within an octave and rule out tritones
              options.push(candidate);
            }
          }
        }
      }
      if (options.length > 0) {
        // If no options, don't select a note and don't break, take a rest instead
        note = choose(options);
        break;
      } else {
        // console.log('no leap options');
      }
    case "rest":
      note = null;
      break;
  }
  // if (note !== null && !harmonious.includes(note%12)) {
  //   console.log(action);
  //   console.log('note ('+note%12+') not in harmonious: '+harmonious);
  // }
  return note;
}

function getHarmony(key, prog, progRhythm, halfspeed, melody) {
  let scale = [0, 2, 4, 5, 7, 9, 11].map((x) => (x + key) % 12);
  let lower = chance(0.7) ? true : false;
  // Whether to favour lower or higher harmonies

  // Figure out which chord is playing for each eighth beat
  let chordIndices = [];
  for (var i = 0; i < progRhythm.length; i++) {
    let chordEighths = Math.round(
      progRhythm[i].toSeconds() / Tone.Time("8n").toSeconds()
    );
    for (j = 0; j < chordEighths; j++) {
      chordIndices.push(i);
    }
  }

  let harmony = [];
  for (var i = 0; i < melody.length; i++) {
    if (!melody[i]) {
      harmony.push(null);
    } else {
      let eighth = [];
      let chord = prog[chordIndices[i % chordIndices.length]];
      for (var j = 0; j < melody[i].length; j++) {
        if (!melody[i][j]) {
          eighth.push(null);
        } else {
          let sixteenth = [...melody[i][j]];
          let melodyNote = sixteenth[0].toMidi();

          // more limited options than the main melody. Must be the root, third or fifth of the underlying chord
          let harmonious = getHarmoniousNotes(scale, chord, [0, 3, 4, 7]);

          // Find harmony note options
          let options = [];
          for (var k = -9; k <= 9; k++) {
            var candidate = melodyNote + k;
            if (harmonious.includes(candidate % 12)) {
              let dist = Math.abs(melodyNote - candidate);
              if (dist > 2 && dist != 6) {
                // Rule out tritones or anything smaller than a minor 3rd
                options.push(candidate);
              }
            }
          }

          if (options.length >= 2) {
            options = lower
              ? options.slice(0, 2)
              : options.slice(-2, options.length);
          }

          let note =
            options.length > 0
              ? choose(options)
              : choose([melodyNote + 12, melodyNote - 12]);
          sixteenth[0] = Tone.Frequency(note, "midi");
          eighth.push(sixteenth);
        }
      }
      harmony.push(eighth);
    }
  }
  return harmony;
}

function getKickPattern() {
  return [
    1,
    0,
    0,
    0,
    choose([0, 1], [0.8, 0.2]),
    choose([0, 1]),
    0,
    choose([0, 1], [0.8, 0.2]),
    1,
    0,
    0,
    0,
    choose([0, 1], [0.8, 0.2]),
    choose([0, 1]),
    0,
    choose([0, 1], [0.8, 0.2]),
  ];
}

function getSnarePattern() {
  return [
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    choose([0, 1], [0.9, 0.1]),
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    choose([0, 1], [0.9, 0.1]),
  ];
}

function getHatPattern() {
  if (chance(0.5)) {
    return [
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.2, 0.8]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.1, 0.9]),
      choose([0, 1], [0.2, 0.8]),
    ];
  } else {
    return [
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      choose([0, 1]),
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      choose([0, 1]),
    ];
  }
}

function getKickFill(kickPattern, shortFill) {
  var fill = [];

  for (var i = 0; i < 8; i++) {
    var chosen;
    if (fill.length == 0) {
      chosen = choose(
        [
          [0, 1],
          [1, 0],
          [0, 0],
        ],
        [0.2, 0.5, 0.3]
      );
    } else {
      // find out the last eighth beat
      var last = fill[fill.length - 1];

      // Find out how many notes have already been added to the sequence
      var numNotes = 0;
      for (var j = 0; j < fill.length; j++) {
        if (fill[j][0] || fill[j][1]) {
          numNotes++;
        }
      }

      var chanceBoost = 0;
      if (i == 4 || i == 7) {
        chanceBoost = 1;
      }

      if (!last[0] && !last[1]) {
        // nothing was played for the last eighth
        chosen = choose(
          [
            [0, 1],
            [1, 0],
            [0, 0],
          ],
          [1 + chanceBoost, 2 + chanceBoost, 2 + numNotes]
        );
      } else if (last[1]) {
        // something was played last sixteenth
        chosen = [0, 0];
      } else {
        // something was played last eighth, but not last sixteenth
        chosen = choose(
          [
            [0, 1],
            [1, 0],
            [0, 0],
          ],
          [1 + chanceBoost, 1 + chanceBoost, 2 + numNotes]
        );
      }
    }
    fill.push(chosen);
  }

  var regularEighths = [...kickPattern];
  if (shortFill) {
    // Use only the second half of the fill
    regularEighths = regularEighths.concat(regularEighths.slice(0, 12));
    fill = fill.slice(4);
  } else {
    regularEighths = regularEighths.concat(regularEighths.slice(0, 8));
  }
  var regular = regularEighths.map((x) => [x, 0]);

  return regular.concat(fill);
}

function getSnareFill(snarePattern, shortFill) {
  var fill = [];

  for (var i = 0; i < 8; i++) {
    var chosen;
    if (fill.length == 0) {
      chosen = choose(
        [
          [0, 1],
          [1, 0],
          [0, 0],
        ],
        [0.2, 0.2, 0.6]
      );
    } else {
      // find out the last eighth beat
      var last = fill[fill.length - 1];

      // Find out how many notes have already been added to the sequence
      var numNotes = 0;
      for (var j = 0; j < fill.length; j++) {
        if (fill[j][0] || fill[j][1]) {
          numNotes++;
        }
      }

      var chanceBoost = 0;
      if (i == 2 || i == 6) {
        chanceBoost = 1;
      }

      if (!last[0] && !last[1]) {
        // nothing was played for the last eighth
        chosen = choose(
          [
            [0, 1],
            [1, 0],
            [0, 0],
          ],
          [1 + chanceBoost, 2 + chanceBoost, 2 + numNotes]
        );
      } else if (last[1]) {
        // something was played last sixteenth
        chosen = [0, 0];
      } else {
        // something was played last eighth, but not last sixteenth
        chosen = choose(
          [
            [0, 1],
            [1, 0],
            [0, 0],
          ],
          [1 + chanceBoost, 1 + chanceBoost, 2 + numNotes]
        );
      }
    }
    fill.push(chosen);
  }

  var regularEighths = [...snarePattern];
  if (shortFill) {
    // Use only the second half of the fill
    regularEighths = regularEighths.concat(regularEighths.slice(0, 12));
    fill = fill.slice(4);
  } else {
    regularEighths = regularEighths.concat(regularEighths.slice(0, 8));
  }
  var regular = regularEighths.map((x) => [x, 0]);

  return regular.concat(fill);
}

function getHatFill(hatPattern, shortFill) {
  var fill = [];
  var sparsePattern = true;
  for (var i = 1; i < 6; i += 2) {
    if (hatPattern[i]) {
      sparsePattern = false;
      break;
    }
  }

  if (sparsePattern) {
    for (var i = 0; i < 8; i++) {
      fill.push(
        choose([
          [0, 1],
          [1, 0],
          [0, 0],
        ])
      );
    }
  } else {
    for (var i = 0; i < 8; i++) {
      fill.push(
        choose(
          [
            [0, 1],
            [1, 0],
            [0, 0],
            [1, 1],
          ],
          [1, 1, 1, 0.8]
        )
      );
    }
  }

  var regularEighths = [...hatPattern];
  if (shortFill) {
    // Use only the second half of the fill
    regularEighths = regularEighths.concat(regularEighths.slice(0, 12));
    fill = fill.slice(4);
  } else {
    regularEighths = regularEighths.concat(regularEighths.slice(0, 8));
  }
  var regular = regularEighths.map((x) => [x, 0]);

  return regular.concat(fill);
}

function getSection(song, parts) {
  return function (now) {
    now += 0.15;
    let pos = song.transport.position.split(":").map((x) => parseInt(x, 10));
    let eighths = Math.floor(pos[0] * 8 + pos[1] * 2 + pos[2] / 2);
    for (var i = 0; i < parts.length; i++) {
      parts[i](now, eighths, song);
    }
  };
} // globals
let gain,
  vibratoSlow,
  vibratoFast,
  lowpass,
  filter,
  chordalGain,
  chordalVerb,
  chordalEcho,
  chordalChorus,
  chordalFilter,
  leadGain,
  leadVerb,
  leadEcho,
  leadChorus,
  leadFilter,
  bassGain,
  limiter,
  finalGain;

const ext = Tone.ToneAudioBuffer.supportsType("webm") ? "webm" : "aac";

function initNodes() {
  // Effects Chain
  limiter = new Tone.Limiter(-0.8).toDestination();
  finalGain = new Tone.Gain(3, "decibels").connect(limiter);
  gain = new Tone.Gain(1).connect(finalGain);
  vibratoSlow = new Tone.Vibrato(0.5, 0.2).connect(gain);
  vibratoFast = new Tone.Vibrato(7, 0.06).connect(vibratoSlow);
  lowpass = new Tone.Filter(20000, "lowpass").connect(vibratoFast);
  filter = new Tone.Filter(20, "highpass").connect(lowpass);

  chordalGain = new Tone.Gain(1).connect(filter);
  chordalVerb = new Tone.Reverb(1).connect(chordalGain);
  chordalEcho = new Tone.FeedbackDelay("8n", 0.2).connect(chordalVerb);
  chordalChorus = new Tone.Chorus(4, 2.5, 0.5).connect(chordalEcho).start();
  chordalFilter = new Tone.Filter(20, "highpass").connect(chordalChorus);

  leadGain = new Tone.Gain(1).connect(filter);
  leadVerb = new Tone.Reverb(1).connect(leadGain);
  leadEcho = new Tone.FeedbackDelay("8n", 0.2).connect(leadVerb);
  leadChorus = new Tone.Chorus(4, 2.5, 0.5).connect(leadEcho).start();
  leadFilter = new Tone.Filter(20, "highpass").connect(leadChorus);

  bassGain = new Tone.Gain(1).connect(filter);
}
initNodes();

// Extras
// var extras = new Tone.Sampler({
//     urls: {
//       'C1': '0.'+ext,
//       'D1': '1.'+ext,
//       'E1': '2.'+ext,
//       'F#1': '3.'+ext,
//       'G#1': '4.'+ext,
//       'A#1': '5.'+ext,
//     },
//     baseUrl: 'audio/lofi/final/extras/'
// }).connect(filter)
// extras.volume.value = -24;

// Instruments and Ambiences are initialised as objects containing loading instructions
class Ambience {
  constructor(playerConstructor) {
    this.player = null;
    this.isLoaded = false;
    this.playerConstructor = playerConstructor;
  }

  load(cache) {
    return new Promise((resolve) => {
      var filepath = this.playerConstructor.url;
      getAudioBufferFromFilepath(cache, filepath).then((buffer) => {
        this.playerConstructor.url = buffer;
        this.isLoaded = true;
        resolve();
      });
    });
  }

  create() {
    var self = this;
    return new Promise((resolve) => {
      if (!self.isLoaded) {
        self.load().then(function () {
          self.player = new Tone.Player(self.playerConstructor);
          resolve(self.player);
        });
      } else {
        self.player = new Tone.Player(self.playerConstructor);
        resolve(self.player);
      }
    });
  }

  connect(node) {
    return new Promise((resolve) => {
      if (!this.player) {
        this.create().then((player) => resolve(player.connect(node)));
      } else {
        resolve(this.player.connect(node));
      }
    });
  }
}

class Instrument {
  constructor(samplerConstructor, vol, attack, release) {
    this.sampler = null;
    this.isLoaded = false;
    this.samplerConstructor = samplerConstructor;
    this.vol = vol;
    this.attack = attack;
    this.release = release;
  }

  load(cache) {
    return new Promise((resolve) => {
      var map = this.samplerConstructor.urls;
      var baseUrl = this.samplerConstructor.baseUrl;

      for (const note in map) {
        var filepath = baseUrl + map[note];
        getAudioBufferFromFilepath(cache, filepath).then((buffer) => {
          map[note] = buffer;
          if (checkBuffersLoaded(map)) {
            this.isLoaded = true;
            resolve();
          }
        });
      }
    });
  }

  create() {
    var self = this;
    return new Promise((resolve) => {
      if (!self.isLoaded) {
        if (cacheAvailable) {
          caches.open("audio-cache").then((cache) => {
            self.load(cache).then(function () {
              self.sampler = new Tone.Sampler(self.samplerConstructor);
              self.sampler.volume.value = self.vol;
              self.sampler.attack = self.attack;
              self.sampler.release = self.release;
              resolve(self.sampler);
            });
          });
        } else {
          self.load().then(function () {
            self.sampler = new Tone.Sampler(self.samplerConstructor);
            self.sampler.volume.value = self.vol;
            self.sampler.attack = self.attack;
            self.sampler.release = self.release;
            resolve(self.sampler);
          });
        }
      } else {
        self.sampler = new Tone.Sampler(self.samplerConstructor);
        self.sampler.volume.value = self.vol;
        self.sampler.attack = self.attack;
        self.sampler.release = self.release;
        resolve(self.sampler);
      }
    });
  }

  connect(node) {
    return new Promise((resolve) => {
      if (!this.sampler) {
        this.create().then((sampler) => resolve(sampler.connect(node)));
      } else {
        resolve(this.sampler.connect(node));
      }
    });
  }
}

// ambiences and vinyls
let ambiences = Array(7).fill(null);
let vinyls = Array(4).fill(null);

for (var i = 0; i < ambiences.length; i++) {
  ambiences[i] = new Ambience({
    url: "audio/ambience/ambience" + i + "." + ext,
    loop: true,
    fadein: 2,
    volume: -14,
  });
}

for (var i = 0; i < vinyls.length; i++) {
  vinyls[i] = new Ambience({
    url: "audio/ambience/vinyl" + i + "." + ext,
    loop: true,
    fadein: 2,
    volume: -16,
  });
}

var piano0 = new Instrument(
  {
    urls: {
      A1: "A1." + ext,
      A2: "A2." + ext,
      A6: "A6." + ext,
      A7: "A7." + ext,
      "A#0": "As0." + ext,
      "A#3": "As3." + ext,
      "A#4": "As4." + ext,
      "A#5": "As5." + ext,

      C1: "C1." + ext,
      C2: "C2." + ext,
      C3: "C3." + ext,
      C4: "C4." + ext,
      C5: "C5." + ext,
      C6: "C6." + ext,
      C7: "C7." + ext,
      C8: "C8." + ext,

      D3: "D3." + ext,
      D4: "D4." + ext,
      D5: "D5." + ext,
      "D#1": "Ds1." + ext,
      "D#2": "Ds2." + ext,
      "D#6": "Ds6." + ext,
      "D#7": "Ds7." + ext,

      E3: "E3." + ext,
      E4: "E4." + ext,
      E5: "E5." + ext,

      "F#1": "Fs1." + ext,
      "F#2": "Fs2." + ext,
      "F#3": "Fs3." + ext,
      "F#4": "Fs4." + ext,
      "F#5": "Fs5." + ext,
      "F#6": "Fs6." + ext,
      "F#7": "Fs7." + ext,

      G7: "G7." + ext,
      "G#3": "Gs3." + ext,
      "G#4": "Gs4." + ext,
      "G#5": "Gs5." + ext,
    },
    baseUrl: "audio/piano_kawai/",
  },
  10,
  0,
  0.1
);

var piano1 = new Instrument(
  {
    urls: {
      A2: "A2." + ext,
      A3: "A3." + ext,
      A4: "A4." + ext,
      A5: "A5." + ext,
      A6: "A6." + ext,
      A7: "A7." + ext,

      "C#1": "Cs1." + ext,
      "C#2": "Cs2." + ext,
      "C#3": "Cs3." + ext,
      "C#4": "Cs4." + ext,
      "C#5": "Cs5." + ext,
      "C#6": "Cs6." + ext,
      "C#7": "Cs7." + ext,

      C8: "C8." + ext,

      F1: "F1." + ext,
      F2: "F2." + ext,
      F3: "F3." + ext,
      F4: "F4." + ext,
      F5: "F5." + ext,
      F6: "F6." + ext,
      F7: "F7." + ext,
    },
    baseUrl: "audio/piano_upright/",
  },
  2,
  0,
  0.3
);

var rhodes0 = new Instrument(
  {
    urls: {
      C2: "C2." + ext,
      C3: "C3." + ext,
      C4: "C4." + ext,
      C5: "C5." + ext,

      E2: "E2." + ext,
      E3: "E3." + ext,
      E4: "E4." + ext,

      G2: "G2." + ext,
      G3: "G3." + ext,
      G4: "G4." + ext,
      G5: "G5." + ext,
    },
    baseUrl: "audio/rhodes0/",
  },
  -20,
  0,
  0.3
);

var rhodes1 = new Instrument(
  {
    urls: {
      C2: "C2." + ext,
      C3: "C3." + ext,
      C4: "C4." + ext,
      C5: "C5." + ext,
      C6: "C6." + ext,
      C7: "C7." + ext,

      E1: "E1." + ext,
      E2: "E2." + ext,
      E3: "E3." + ext,
      E4: "E4." + ext,
      E5: "E5." + ext,
      E6: "E6." + ext,
      E7: "E7." + ext,

      "G#1": "Gs1." + ext,
      "G#2": "Gs2." + ext,
      "G#3": "Gs3." + ext,
      "G#4": "Gs4." + ext,
      "G#5": "Gs5." + ext,
      "G#6": "Gs6." + ext,
    },
    baseUrl: "audio/rhodes1/",
  },
  -18,
  0,
  0.3
);

// Synth
var synth0 = new Instrument(
  {
    urls: {
      "C#2": "Cs1." + ext,
      "F#2": "Fs1." + ext,
      B2: "B1." + ext,
      E3: "E2." + ext,
      A3: "A2." + ext,
      D4: "D3." + ext,
      G4: "G3." + ext,
      C5: "C4." + ext,
      F5: "F4." + ext,
      "A#5": "As4." + ext,
      "D#6": "Ds5." + ext,
      "G#6": "Gs5." + ext,
      "C#7": "Cs6." + ext,
    },
    baseUrl: "audio/synth/",
  },
  -12,
  0,
  0.1
);

// Kalmiba
var kalimba = new Instrument(
  {
    urls: {
      C4: "C4." + ext,
      D4: "D4." + ext,
      "F#4": "Fs4." + ext,
      A4: "A4." + ext,
      C5: "C5." + ext,
      E5: "E5." + ext,
      G5: "G5." + ext,
      B5: "B5." + ext,
    },
    baseUrl: "audio/kalimba/",
  },
  -12,
  0,
  2
);

// Dan tranh
var dantranh = new Instrument(
  {
    urls: {
      B2: "B2." + ext,
      B3: "B3." + ext,
      B4: "B4." + ext,
      B5: "B5." + ext,
      "D#3": "Ds3." + ext,
      "D#4": "Ds4." + ext,
      "D#5": "Ds5." + ext,
      "F#3": "Fs3." + ext,
      "F#4": "Fs4." + ext,
      "F#5": "Fs5." + ext,
      "G#3": "Gs3." + ext,
      "G#4": "Gs4." + ext,
      "G#5": "Gs5." + ext,
    },
    baseUrl: "audio/dantranh/",
  },
  6,
  0,
  2
);

// Marimba
var marimba = new Instrument(
  {
    urls: {
      B3: "B2." + ext,
      B5: "B4." + ext,
      C3: "C2." + ext,
      C5: "C4." + ext,
      C7: "C6." + ext,
      F2: "F1." + ext,
      F4: "F3." + ext,
      F7: "F5." + ext,
      G3: "G2." + ext,
      G5: "G4." + ext,
    },
    baseUrl: "audio/marimba/",
  },
  0,
  0,
  2
);

// // Ocarina
// var ocarina = new Instrument({
//     urls: {
//       'A5': 'A5.'+ext,
//       'A#4': 'As4.'+ext,
//       'A#5': 'As5.'+ext,
//       'B5': 'B5.'+ext,
//       'C5': 'C5.'+ext,
//       'D5': 'D5.'+ext,
//       'E5': 'E5.'+ext,
//       'F5': 'F5.'+ext,
//       'G5': 'G5.'+ext,
//       'G#5': 'Gs5.'+ext,
//     },
//     baseUrl: 'audio/ocarina/'
// }, -8, 0, 0.5);

// Guitar
var guitar = new Instrument(
  {
    urls: {
      A3: "A3." + ext,
      A4: "A4." + ext,
      C5: "C5." + ext,
      E4: "E4." + ext,
      E5: "E5." + ext,
      "G#5": "Gs5." + ext,
    },
    baseUrl: "audio/guitar/",
  },
  5,
  0,
  0.5
);

// Uke
var uke = new Instrument(
  {
    urls: {
      A4: "A4." + ext,
      "A#5": "As5." + ext,
      D5: "D5." + ext,
      E4: "E4." + ext,
      G5: "G5." + ext,
    },
    baseUrl: "audio/uke/",
  },
  4,
  0,
  0.5
);

// violin pizzicato
var violinpizz = new Instrument(
  {
    urls: {
      A3: "A3." + ext,
      A4: "A4." + ext,
      A5: "A5." + ext,
      C4: "C4." + ext,
      C5: "C5." + ext,
      E4: "E4." + ext,
      E5: "E5." + ext,
      G3: "G3." + ext,
      G4: "G4." + ext,
      G5: "G5." + ext,
    },
    baseUrl: "audio/violin_pizz/",
  },
  5,
  0,
  0.5
);

// Bass
var bass0 = new Instrument(
  {
    urls: {
      "C#2": "Cs1." + ext,
      "F#2": "Fs1." + ext,
      B2: "B1." + ext,
      E3: "E2." + ext,
      A3: "A2." + ext,
      D4: "D3." + ext,
      G4: "G3." + ext,
      C5: "C4." + ext,
      F5: "F4." + ext,
      "A#5": "As4." + ext,
      "D#6": "Ds5." + ext,
      "G#6": "Gs5." + ext,
      "C#7": "Cs6." + ext,
    },
    baseUrl: "audio/bass/",
  },
  -12,
  0,
  0.1
);

var bass1 = new Instrument(
  {
    urls: {
      "A#1": "As1." + ext,
      A2: "A2." + ext,
      B3: "B3." + ext,
      C2: "C2." + ext,
      "C#3": "Cs3." + ext,
      D2: "D2." + ext,
      E1: "E1." + ext,
      E2: "E2." + ext,
      E3: "E3." + ext,
      "F#1": "Fs1." + ext,
      "F#2": "Fs2." + ext,
      G1: "G1." + ext,
      "G#2": "Gs2." + ext,
      "G#3": "Gs3." + ext,
    },
    baseUrl: "audio/contrabass/",
  },
  8,
  0,
  0.1
);

var bass2 = new Instrument(
  {
    urls: {
      D2: "D1." + ext,
      "F#2": "Fs1." + ext,
      "A#2": "As1." + ext,
      D3: "D2." + ext,
    },
    baseUrl: "audio/synthbass/",
  },
  -10,
  0,
  0.1
);

var bass3 = new Instrument(
  {
    urls: {
      A2: "A2." + ext,
      C2: "C2." + ext,
      C3: "C3." + ext,
      "D#2": "Ds2." + ext,
      F2: "F2." + ext,
    },
    baseUrl: "audio/guitar_low/",
  },
  -10,
  0,
  0.1
);

var hat = new Instrument(
  {
    urls: {
      C1: "hat0." + ext,
      D1: "hat1." + ext,
      E1: "hat2." + ext,
      "F#1": "hat3." + ext,
      "G#1": "hat4." + ext,
      "A#1": "hat5." + ext,
      C2: "shaker0." + ext,
    },
    baseUrl: "audio/hat/",
  },
  -24,
  0,
  0
);

// Snare
var snare = new Instrument(
  {
    urls: {
      C1: "snare0." + ext,
      D1: "snare1." + ext,
      E1: "snare2." + ext,
      "F#1": "snare3." + ext,
      "G#1": "snare4." + ext,
      "A#1": "snare5." + ext,
      C2: "snare6." + ext,
      D2: "snare7." + ext,
      E2: "snare6." + ext,
      "F#2": "snare7." + ext,
      "G#2": "snare8." + ext,
      "A#2": "snare9." + ext,
      C3: "snare10." + ext,
      D3: "snare11." + ext,
      E3: "snare12." + ext,
      "F#3": "snare13." + ext,
      "G#3": "snare14." + ext,
      "A#3": "snare15." + ext,
      C4: "snare16." + ext,
      D4: "snare17." + ext,
      E4: "snare18." + ext,
      "F#4": "snare19." + ext,
      "G#4": "snare20." + ext,
    },
    baseUrl: "audio/snare/",
  },
  0,
  0,
  0
);

// Kick
var kick = new Instrument(
  {
    urls: {
      C1: "kick0." + ext,
      D1: "kick1." + ext,
      E1: "kick2." + ext,
      "F#1": "kick3." + ext,
      "G#1": "kick4." + ext,
      "A#1": "kick5." + ext,
      C2: "kick6." + ext,
      D2: "kick7." + ext,
      E2: "kick8." + ext,
      "F#2": "kick9." + ext,
      "G#2": "kick10." + ext,
      "A#2": "kick11." + ext,
      C3: "kick12." + ext,
      D3: "kick13." + ext,
      E3: "kick14." + ext,
      "F#3": "kick15." + ext,
      "G#3": "kick16." + ext,
      "A#3": "kick17." + ext,
      C4: "kick18." + ext,
      D4: "kick19." + ext,
    },
    baseUrl: "audio/kick/",
  },
  0,
  0,
  0
); // DEFINITIONS
// global
let starting;

let inventoryUpdated = 0;

function onStart() {
  var transport = Tone.Transport;
  var song = getSong(transport);
  startPlaying(song);
}

function getSong(transport, offline = false, bpm = between(60, 90)) {
  var song = {};
  var autoplay = !offline;

  song.offline = offline;
  song.transport = transport;

  // Tempo, swing, key
  song.bpm = bpm;
  transport.bpm.value = song.bpm;
  transport.swing = choose([between(0, 0.02), between(0.02, 0.1)], [0.8, 0.2]);
  song.key = Math.floor(between(0, 12));

  // Choose all sounds and instruments
  chooseAmbience().then((res) => (song.ambience = res));

  chooseVinyl().then((res) => (song.vinyl = res));

  chooseChordal().then((res) => (song.chordal = res));

  chooseLead().then((res) => (song.lead = res));

  song.bassDucking = chance(0.7);
  chooseBass(song.bassDucking, song.bpm).then((res) => (song.bass = res));

  connectKit();

  setEffects();

  // Progressions, basslines, melodies
  song.prog = getProg(song.key);
  song.halfspeedProg = song.bpm < 70 ? false : chance(0.3);
  song.progRhythm = getProgRhythm(song.prog.length, song.halfspeedProg);
  song.progVoiced = getProgVoiced(
    song.prog,
    song.progRhythm,
    song.halfspeedProg
  );
  song.alt_progVoiced = getProgVoiced(
    song.prog,
    song.progRhythm,
    song.halfspeedProg
  );

  song.bassSimple = getBassSimple(
    song.prog,
    song.progRhythm,
    song.halfspeedProg
  );
  song.bassRhythmic = getBassRhythmic(
    song.prog,
    song.progRhythm,
    song.halfspeedProg
  );

  song.melody = getMelody(
    song.key,
    song.prog,
    song.progRhythm,
    song.halfspeedProg
  );
  song.harmony = getHarmony(
    song.key,
    song.prog,
    song.progRhythm,
    song.halfspeedProg,
    song.melody
  );

  song.alt_melody = getMelody(
    song.key,
    song.prog,
    song.progRhythm,
    song.halfspeedProg
  );
  song.alt_harmony = getHarmony(
    song.key,
    song.prog,
    song.progRhythm,
    song.halfspeedProg,
    song.alt_melody
  );

  // Beats
  song.kickType = Tone.Frequency(between(0, 41) + 23, "midi");
  song.snareType = Tone.Frequency(between(0, 43) + 23, "midi");
  song.hatType = Tone.Frequency(between(0, 15) + 23, "midi");
  song.kickPattern = getKickPattern();
  song.snarePattern = getSnarePattern();
  song.hatPattern = getHatPattern();

  var shortFill = song.bpm < 78 ? true : chance(0.6);
  song.kickFill = getKickFill(song.kickPattern, shortFill);
  song.snareFill = getSnareFill(song.snarePattern, shortFill);
  song.hatFill = getHatFill(song.hatPattern, shortFill);

  var bassPatternProbs = chance(0.7) ? [0.8, 0.2] : [0.2, 0.8];

  // Make sure gain is full for the start of the song
  transport.scheduleOnce(function (time) {
    gain.gain.setValueAtTime(1, time);
  }, "0:0:0");

  // Define functions for each section
  let introA = getSection(
    song,
    chooseSome(
      [playBlockChords, 1],
      [playMelody, 0.5],
      choose([
        [playHat, 0.5],
        [playSnare, 0.2],
        [playKick, 0.3],
      ]),
      [playSimpleBass, 0.15]
    )
  );

  let introB = getSection(
    song,
    chooseSome(
      choose([
        [playBlockChords, 1],
        [playAltBlockChords, 1],
      ]),
      [playMelody, 0.75],
      [playBeat, 1],
      choose(
        [
          [playSimpleBass, 1],
          [playRhythmicBass, 1],
        ],
        bassPatternProbs
      )
    )
  );

  let sectionA = getSection(
    song,
    chooseSome(
      choose([
        [playBlockChords, 1],
        [playAltBlockChords, 1],
      ]),
      [playMelody, 1],
      [playHarmony, 0.75],
      choose(
        [
          [playBeat, 1],
          [playBeatFill, 1],
        ],
        [0.6, 0.4]
      ),
      choose(
        [
          [playSimpleBass, 1],
          [playRhythmicBass, 1],
        ],
        bassPatternProbs
      )
    )
  );

  let sectionB = getSection(
    song,
    chooseSome(
      choose([
        [playBlockChords, 1],
        [playAltBlockChords, 1],
      ]),
      [playMelody, 1],
      [playHarmony, 1],
      choose(
        [
          [playBeat, 0.8],
          [playBeatFill, 0.8],
        ],
        [0.6, 0.4]
      ),
      choose(
        [
          [playSimpleBass, 1],
          [playRhythmicBass, 1],
        ],
        bassPatternProbs
      )
    )
  );

  let sectionC = getSection(
    song,
    chooseSome(
      choose([
        [playBlockChords, 1],
        [playAltBlockChords, 1],
      ]),
      [playAltMelody, 1],
      [playAltHarmony, 0.5],
      choose(
        [
          [playBeat, 1],
          [playBeatFill, 1],
        ],
        [0.6, 0.4]
      ),
      choose(
        [
          [playSimpleBass, 1],
          [playRhythmicBass, 1],
        ],
        bassPatternProbs
      )
    )
  );

  let sectionD = getSection(
    song,
    chooseSome(
      choose([
        [playBlockChords, 1],
        [playAltBlockChords, 1],
      ]),
      choose([
        [playMelody, 0.7],
        [playAltMelody, 0.7],
      ]),
      [playHarmony, 0.5],
      choose(
        [
          [playBeat, 0.8],
          [playKick, 1],
          [playSnare, 1],
          [playBeatFill, 0.8],
        ],
        [0.5, 0.16, 0.16, 0.16]
      ),
      choose(
        [
          [playSimpleBass, 1],
          [playRhythmicBass, 1],
        ],
        bassPatternProbs
      )
    )
  );

  // Schedule each section
  transport.scheduleRepeat(introA, "8n", "0:0:0", "4:0:0");
  transport.scheduleRepeat(
    introB,
    "8n",
    "4:0:0",
    choose(["3:3:0", "3:2:0", "4:0:0"])
  );
  transport.scheduleRepeat(sectionA, "8n", "8:0:0", "4:0:0");
  transport.scheduleRepeat(
    sectionB,
    "8n",
    "12:0:0",
    choose(["3:3:0", "3:2:0", "4:0:0"])
  );
  transport.scheduleRepeat(sectionC, "8n", "16:0:0", "4:0:0");
  transport.scheduleRepeat(
    sectionD,
    "8n",
    "20:0:0",
    choose(["3:3:0", "3:2:0", "4:0:0"])
  );
  transport.scheduleRepeat(
    choose([sectionA, sectionB]),
    "8n",
    "24:0:0",
    "4:0:0"
  );
  transport.scheduleRepeat(choose([introA, introB]), "8n", "28:0:0", "6:0:0");

  // Shedule ambience, effect chain automation
  transport.scheduleOnce(function (time) {
    song.ambience.start(time, between(0, song.ambience.buffer.duration));
  }, "0:0:0");
  transport.scheduleOnce(function (time) {
    song.vinyl.start(time, between(0, song.vinyl.buffer.duration));
  }, "0:0:0");
  transport.scheduleOnce(function (time) {
    setFilter(choose([1, 2]), time);
  }, "0:0:0");
  transport.scheduleOnce(function (time) {
    rampRemoveFilter(time, choose(["4:0:0", "8:0:0"]));
  }, "0:0:0");

  // Add and remove filter
  if (chance(0.5)) {
    var bar = 12 + 4 * choose([0, 1, 2, 3]);
    var addAt = (bar - 1).toString() + ":3:3";
    var removeAt = (bar + choose([1, 3])).toString() + ":3:3";
    transport.scheduleOnce(function (time) {
      rampAddFilter(time, "0:0:1", song);
    }, addAt);
    transport.scheduleOnce(function (time) {
      rampRemoveFilter(time, "0:0:1");
    }, removeAt);
  }

  // Fade out, then skip to next song
  transport.scheduleOnce(function (time) {
    fadeOut(time);
  }, "28:0:0");
  if (autoplay) {
    transport.scheduleOnce(skip, "34:0:0");
  }

  // return the song
  return song;
}

// Functions that get called each eighth beat to play the parts

function playBlockChords(now, eighths, song) {
  let progPos = eighths % song.progVoiced.length;
  if (song.progVoiced[progPos]) {
    let toPlay = song.progVoiced[progPos];
    triggerHumanised(song.chordal, toPlay[0], toPlay[1], now, [0.7, 1], 0.1);
    if (!song.offline) {
      pulseChordal(now);
    }
  }
}

function playAltBlockChords(now, eighths, song) {
  let progPos = eighths % song.alt_progVoiced.length;
  if (song.alt_progVoiced[progPos]) {
    let toPlay = song.alt_progVoiced[progPos];
    triggerHumanised(song.chordal, toPlay[0], toPlay[1], now, [0.7, 1], 0.1);
    if (!song.offline) {
      pulseChordal(now);
    }
  }
}

function playSimpleBass(now, eighths, song) {
  let pos = eighths % song.bassSimple.length;
  if (song.bassSimple[pos]) {
    let toPlay = song.bassSimple[pos];
    song.bass.triggerAttackRelease(toPlay[0], toPlay[1], now, 1);
  }
}

function playRhythmicBass(now, eighths, song) {
  pos = eighths % song.bassRhythmic.length;
  if (song.bassRhythmic[pos]) {
    let toPlay = song.bassRhythmic[pos];
    song.bass.triggerAttackRelease(toPlay[0], toPlay[1], now, 1);
  }
}

function playSixteenths(now, eighths, instrument, notes, humanised = false) {
  let pos = eighths % notes.length;
  if (notes[pos]) {
    let toPlay = notes[pos];
    for (var i = 0; i < 2; i++) {
      if (toPlay[i]) {
        if (humanised) {
          triggerHumanised(
            instrument,
            [toPlay[i][0]],
            toPlay[i][1],
            now + i * Tone.Time("16n").toSeconds(),
            [0.8, 1],
            0.03
          );
        } else {
          instrument.triggerAttackRelease(
            toPlay[i][0],
            toPlay[i][1],
            now + i * Tone.Time("16n").toSeconds(),
            1
          );
        }
      }
    }
  }
}

function playMelody(now, eighths, song) {
  playSixteenths(now, eighths, song.lead, song.melody, true);
}

function playAltMelody(now, eighths, song) {
  playSixteenths(now, eighths, song.lead, song.alt_melody, true);
}

function playHarmony(now, eighths, song) {
  playSixteenths(now, eighths, song.lead, song.harmony, true);
}

function playAltHarmony(now, eighths, song) {
  playSixteenths(now, eighths, song.lead, song.alt_harmony, true);
}

function playBeat(now, eighths, song) {
  playKick(now, eighths, song);
  playSnare(now, eighths, song);
  playHat(now, eighths, song);
}

function playKick(now, eighths, song) {
  let beatPos = eighths % 16;
  if (song.kickPattern[beatPos]) {
    kick.sampler.triggerAttackRelease(song.kickType, "8n", now, 1);
    if (!song.offline) {
      pulseKick(now);
    }
    duck(now, song.bassDucking);
  }
}

function playSnare(now, eighths, song) {
  let beatPos = eighths % 16;
  if (song.snarePattern[beatPos]) {
    snare.sampler.triggerAttackRelease(song.snareType, "8n", now, 1);
    if (!song.offline) {
      pulseSnare(now);
    }
  }
}

function playHat(now, eighths, song) {
  let beatPos = eighths % 16;
  if (song.hatPattern[beatPos]) {
    hat.sampler.triggerAttackRelease(
      song.hatType,
      "8n",
      now + between(0, 0.03),
      between(0.7, 1)
    );
    if (!song.offline) {
      pulseHat(now);
    }
  }
}

function playBeatFill(now, eighths, song) {
  let pos = eighths % 32;
  playKickFill(now, pos, song);
  playSnareFill(now, pos, song);
  playHatFill(now, pos, song);
}

function playKickFill(now, pos, song) {
  let toPlay = song.kickFill[pos];
  for (var i = 0; i < 2; i++) {
    if (toPlay[i]) {
      var time = now + i * Tone.Time("16n").toSeconds();
      kick.sampler.triggerAttackRelease(song.kickType, "4n", time, 1);
      if (!song.offline) {
        pulseKick(time);
      }
      duck(time, song.bassDucking);
    }
  }
}

function playSnareFill(now, pos, song) {
  let toPlay = song.snareFill[pos];
  for (var i = 0; i < 2; i++) {
    if (toPlay[i]) {
      var time = now + i * Tone.Time("16n").toSeconds();
      snare.sampler.triggerAttackRelease(song.snareType, "8n", time, 1);
      if (!song.offline) {
        pulseSnare(time);
      }
    }
  }
}

function playHatFill(now, pos, song) {
  let toPlay = song.hatFill[pos];
  for (var i = 0; i < 2; i++) {
    if (toPlay[i]) {
      var time = now + i * Tone.Time("16n").toSeconds();
      hat.sampler.triggerAttackRelease(
        song.hatType,
        "8n",
        time + between(0, 0.03),
        between(0.7, 1)
      );
      if (!song.offline) {
        pulseHat(time);
      }
    }
  }
}

function triggerHumanised(
  instrument,
  notes,
  duration,
  time,
  velRange,
  maxDelay
) {
  for (var i = 0; i < notes.length; i++) {
    instrument.triggerAttackRelease(
      notes[i],
      duration,
      time + between(0, maxDelay),
      between(velRange[0], velRange[1])
    );
  }
}

function setEffects() {
  leadVerb.decay = between(0.5, 2.5);
  leadVerb.wet.value = between(0.1, 0.5);
  leadEcho.delayTime = choose(["8n", "4n"]);
  leadEcho.feedback = between(0.1, 0.3);
  leadEcho.wet.value = choose([0, between(0, 0.2)]);
  leadChorus.frequency.value = choose([2, 4]);
  leadChorus.depth = between(0, 0.3);
  leadChorus.delayTime = between(2, 2.5);
  leadChorus.wet.value = choose([0, between(0, 1)]);
  leadFilter.frequency.value = choose([20, between(300, 1200)], [0.8, 0.2]);

  // console.log('leadChorus depth: '+leadChorus.depth);
  // console.log('leadChorus delay: '+leadChorus.delayTime);
  // console.log('leadChorus wet: '+leadChorus.wet.value);

  chordalVerb.decay = between(0.5, 2.5);
  chordalVerb.wet.value = between(0.1, 0.65);
  chordalEcho.delayTime = choose(["8n", "4n"]);
  chordalEcho.feedback = between(0.1, 0.3);
  chordalEcho.wet.value = choose([0, between(0, 0.2)]);
  chordalChorus.frequency.value = choose([2, 4]);
  chordalChorus.depth = between(0, 0.3);
  chordalChorus.delayTime = between(2, 2.5);
  chordalChorus.wet.value = choose([0, between(0, 1)]);
  chordalFilter.frequency.value = choose([20, between(200, 500)], [0.8, 0.2]);

  // console.log('chordalChorus depth: '+chordalChorus.depth);
  // console.log('chordalChorus delay: '+chordalChorus.delayTime);
  // console.log('chordalChorus wet: '+chordalChorus.wet.value);

  // Master Effects
  vibratoSlow.depth.value = between(0, 0.25);
  vibratoFast.depth.value = between(0, 0.1);
  lowpass.frequency.value = choose(
    [20000, between(6000, 10000), between(10000, 14000)],
    [0.5, 0.2, 0.3]
  );
}

function duck(now, bassDucking) {
  let attack = 0.008;
  let min = 0.015849;
  // -36db change from 1
  let release = 0.44;
  let sustain = 0.06;

  chordalGain.gain.rampTo(min, attack, now);
  chordalGain.gain.rampTo(1, release, now + attack + sustain);

  if (bassDucking) {
    bassGain.gain.rampTo(min, attack, now);
    bassGain.gain.rampTo(1, release, now + attack + sustain);
  }
}

function setFilter(filterType, now) {
  switch (filterType) {
    case 0:
      // None
      filter.type = "highpass";
      filter.frequency.setValueAtTime(20, now);
      break;
    case 1:
      // Lowpass
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(between(300, 400), now);
      break;
    case 2:
      // Highpass
      filter.type = "highpass";
      filter.frequency.setValueAtTime(between(1000, 1600), now);
      break;
  }
}

function rampAddFilter(now, rampTime, song) {
  if (!song.offline) {
    filter.type = chance(0.5) ? "lowpass" : "highpass";
    // can't seem to change this for offline rendering
  }
  if (filter.type == "highpass") {
    filter.frequency.setValueAtTime(20, now);
    filter.frequency.rampTo(between(1000, 1600), rampTime, now);
  } else if (filter.type == "lowpass") {
    filter.frequency.setValueAtTime(20000, now);
    filter.frequency.rampTo(between(600, 1000), rampTime, now);
  }
}

function rampRemoveFilter(now, rampTime) {
  if (filter.type == "highpass") {
    filter.frequency.rampTo(20, rampTime, now);
  } else if (filter.type == "lowpass") {
    filter.frequency.rampTo(20000, rampTime, now);
  }
}

function fadeOut(now) {
  gain.gain.rampTo(0, "6:0:0", now);
}

function skip() {
  stop();
  clearTimeout(starting);
  starting = setTimeout(onStart, 500);
}

function stop() {
  for (var i = 0; i < ambiences.length; i++) {
    if (ambiences[i].player && ambiences[i].player.state == "started") {
      ambiences[i].player.stop();
    }
  }
  for (var i = 0; i < vinyls.length; i++) {
    if (vinyls[i].player && vinyls[i].player.state == "started") {
      vinyls[i].player.stop();
    }
  }
  filter.frequency.cancelScheduledValues(Tone.now());
  Tone.Transport.cancel();
  if (Tone.Transport.state != "stopped") {
    Tone.Transport.stop();
  }
  stopVisualiser();
}

initUI();
initVisualiser();
